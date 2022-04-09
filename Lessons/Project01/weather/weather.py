import argparse
import sys
import json
from urllib import error, parse, request
from configparser import ConfigParser

import style

# =========================================================

BASE_WEATHER_API_URL = "http://api.openweathermap.org/data/2.5/weather"

THUNDERSTORM = range(200, 300)
DRIZZLE = range(300, 400)
RAIN = range(500, 600)
SNOW = range(600, 700)
ATMOSPHERE = range(700, 800)
CLEAR = range(800, 801)
CLOUDY = range(801, 900)

def _get_api_key():
    config = ConfigParser()
    
    config.read('secrets.ini')
    api_key = config['openweather']['api_key']

    return api_key

def get_cli_args():
    
    parser = argparse.ArgumentParser(
        description='This is a CLI app that displays the weather of a requested city.'
    )
    
    parser.add_argument(
        "city", nargs="+", type=str, help="enter the city name"
    )
    parser.add_argument(
        "-i",
        "--imperial",
        action="store_true",
        help="display the temperature in imperial units",
    )
    
    return parser.parse_args()

def create_weather_url(city_input, imperial=False):
    api_key = _get_api_key()
    city_name = " ".join(city_input)
    url_encoded_city_name = parse.quote_plus(city_name)
    units = "imperial" if imperial else "metric"
    url = (
        f"{BASE_WEATHER_API_URL}?q={url_encoded_city_name}"
        f"&units={units}&appid={api_key}"
    )
    
    return url

def get_weather_data(query_url):
    try:
        response = request.urlopen(query_url)
    except error.HTTPError as http_error:
        if http_error.code == 401:  # 401 - Unauthorized
            sys.exit("Access denied. Check your API key.")
        elif http_error.code == 404:  # 404 - Not Found
            sys.exit("Can't find weather data for this city.")
        else:
            sys.exit(f"Something went wrong... ({http_error.code})")

    data = response.read()

    try:
        return json.loads(data)
    except json.JSONDecodeError:
        sys.exit("Couldn't read the server response.")
    
def display_weather_info(weather_data, imperial=False):
    """Prints formatted weather information about a city.
    Args:
        weather_data (dict): API response from OpenWeather by city name
        imperial (bool): Whether or not to use imperial units for temperature
    More information at https://openweathermap.org/current#name
    """
    city = weather_data["name"]
    weather_id = weather_data["weather"][0]["id"]
    weather_description = weather_data["weather"][0]["description"]
    temperature = weather_data["main"]["temp"]

    style.change_color(style.REVERSE)
    print(f"{city:^{style.PADDING}}", end="")
    style.change_color(style.RESET)

    weather_symbol, color = _select_weather_display_params(weather_id)
    style.change_color(color)

    print(f"\t{weather_symbol}", end=" ")
    print(
        f"\t{weather_description.capitalize():^{style.PADDING}}",
        end=" ",
    )
    style.change_color(style.RESET)

    print(f"({temperature}°{'F' if imperial else 'C'})")

def _select_weather_display_params(weather_id):
    """Selects a weather symbol and a display color for a weather state.
    Args:
        weather_id (int): Weather condition code from the OpenWeather API
    Returns:
        tuple[str]: Contains a weather symbol and a display color
    """
    if weather_id in THUNDERSTORM:
        display_params = ("💥", style.RED)
    elif weather_id in DRIZZLE:
        display_params = ("💧", style.CYAN)
    elif weather_id in RAIN:
        display_params = ("💦", style.BLUE)
    elif weather_id in SNOW:
        display_params = ("⛄️", style.WHITE)
    elif weather_id in ATMOSPHERE:
        display_params = ("🌀", style.BLUE)
    elif weather_id in CLEAR:
        display_params = ("🔆", style.YELLOW)
    elif weather_id in CLOUDY:
        display_params = ("💨", style.WHITE)
    else:  # In case the API adds new weather codes
        display_params = ("🌈", style.RESET)
    return display_params


if __name__ == '__main__':
    # this is where the code that 
    # will run our weather tool goes
    args = get_cli_args()
    url = create_weather_url(args.city, args.imperial)
    weather_data = get_weather_data(url)
    display_weather_info(weather_data, args.imperial)
    
