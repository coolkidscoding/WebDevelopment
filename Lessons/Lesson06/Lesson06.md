# [Cool Kids Coding School](https://www,coolkidscodingschool.com)
![CKCS logo >](./images/ckcslogo.png)
</br>

## Course: **Web Development**

### Lesson 6: **Weather App**

---
</br>

#### **Introduction**

In this lesson we are going to build a weather app.  Specifically we are going to:

+ Build a functional weather lookup tool.
+ Use argparse to build a CLI (Command Line Interface) app.
+ Use configparser to handle API secret.
+ Make API (application interface) calls to a weather service. 
+ Create visually attractive output

#### **Project Overview**

Before we start writing any code it is always good to to think about the specifications of our program.  The weather app you'll build in this tutorial will:

+ Take a city name as required input.
+ Take an optional flag to display the outout in Fahrenheit or Celsius.
+ Call an online weather api to fetch the weather data.
+ Format the output

#### **Step 1: Get Acces to a Suitable Weather API**

In this setp we will select a weather API for this project.  We will need a personal API key that will 
allow us to fetch information from the API.  For the API we will use OpenWeather.

Navigate to the sign up page and fill in the form.

    https://home.openweathermap.org/users/sign_up

Once you have succesfully signed up, then you'll receive a confirmation email with your API.

**Make An API Request and Inspect the Data**

Before we start writing any code we need to make sure our key works and we can examine the data.

    api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

You'll need replace the two variables shown in curly brace with yoiur input.


+ Replace {city name} with vienna, or another city name.
+ Replace {API key} with your API key, which you copied earlier.

In your browser you will see the text that will be delivered programmatically.
This text is formatted as JSON (Javascript Object Notation).

Look at the temperature.  Does it look suspicious?  It is displayed in Kelvin units.  You can change the units to a
temperature scale you are more comfortable with.

    api.openweathermap.org/data/2.5/weather?q=vienna&units=metric&appid={API key}

If you try the API again you will see units that look more reasonable.

#### **Step 2: Handle Secrets in Your Code**

In this section we are going to create the project structure and show how we hide our API key from being used by anyone other thatn us.

On a Windows PC these are the commands to setup the directories we will need.  They are slightly different if you are using something else.

    PS C:\> New-Item weather-app -ItemType Directory  
    PS C:\> Set-Location weather-app  
    PS C:\> New-Item .gitignore, secrets.ini, weather.py  

**Protect Your API Key**

    # .gitignore

    secrets.ini

By adding the name of your config file, secrest.ini, a a new line in your otherwise empty .gitgnore file, you let Git know that you dont want to record this file under version control.

**Access Your API Key in Your Python Code**

    ; secrets.ini

    [openweather]
    api_key=<YOUR-OPENWEATHER-API-KEY>

With this setup, you've created a section names openweather with a property named api_key, whose value is your OpenWeather API key.

Next, you'll need to use Python's configparser module to get acces to your API key in your weather.py file.

    # weather.py
    from configparser import ConfigParser


    def _get_api_key():

        """Fetch the API key from your configuration file.


        Expects a configuration file named "secrets.ini" with structure:


            [openweather]

            api_key=<YOUR-OPENWEATHER-API-KEY>

        """

        config = ConfigParser()

        config.read("secrets.ini")

        return config["openweather"]["api_key"]

#### **Create a CLI for Your Python Weather App**

In this step we are going to write a command-line parser that takes user-provided information for a city and an optional parameter about what temperature scale to use.  To build this functionality, you'll work with Python's argparse module.

**Set Up an Argument Parser**

We are going to collect the following information from the user:

+ City name
+ Temperature scale

        # weather.py
        import argparse

        from configparser import ConfigParser


        def read_user_cli_args():

            """Handles the CLI user interactions.


            Returns:

                argparse.Namespace: Populated namespace object

            """

            parser = argparse.ArgumentParser(

                description="gets weather and temperature information for a city"

            )

            return parser.parse_args()


        # ...


        if __name__ == "__main__":

            read_user_cli_args()

If you run your program right now it will execute without any complaints but there will be no output.
If you attempt to pass a city name to the program you will get an error.

**Parse Input Arguments**
To do this we will two arguments that the program expects.

        # weather.py


        import argparse

        from configparser import ConfigParser


        def read_user_cli_args():

            """Handles the CLI user interactions.


            Returns:

                argparse.Namespace: Populated namespace object

            """

            parser = argparse.ArgumentParser(

                description="gets weather and temperature information for a city"

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


        # ...


        if __name__ == "__main__":

            read_user_cli_args()

You will have to modify the weather.py in order to see the arguments that the program processed.

        # weather.py

        # ...

        if __name__ == "__main__":
            user_args = read_user_cli_args()
            print(user_args.city, user_args.imperial)

Here is a typical output 

    $ python weather.py vienna
    ['vienna'] False

    $ python weather.py new york -i
    ['new', 'york'] True

    $ python weather.py ho chi minh city --imperial
    ['ho', 'chi', 'minh', 'city'] True

#### **Step 4: Get the Weather Info**

In this step, you'll concatenate the user input into a valid URL that you send to the OpenWeather API.  You'll also add exception handling so that invalid input does not crash your program.

**Build the URL**

Because the base URL will stay the same for all calls, it's a good idea to define it as a constant at the top of your code.

    # weather.py

    import argparse
    from configparser import ConfigParser

    BASE_WEATHER_API_URL = "http://api.openweathermap.org/data/2.5/weather"

    # ...

It's time to create a complete URL.

    # weather.py


    import argparse

    from configparser import ConfigParser

    from urllib import parse


    BASE_WEATHER_API_URL = "http://api.openweathermap.org/data/2.5/weather"


    def read_user_cli_args():

        # ...


    def build_weather_query(city_input, imperial=False):

        """Builds the URL for an API request to OpenWeather's weather API.


        Args:

            city_input (List[str]): Name of a city as collected by argparse

            imperial (bool): Whether or not to use imperial units for temperature


        Returns:

            str: URL formatted for a call to OpenWeather's city name endpoint

        """

        api_key = _get_api_key()

        city_name = " ".join(city_input)

        url_encoded_city_name = parse.quote_plus(city_name)

        units = "imperial" if imperial else "metric"

        url = (

            f"{BASE_WEATHER_API_URL}?q={url_encoded_city_name}"

            f"&units={units}&appid={api_key}"

        )

        return url


    # ...

Calling build_weather_query returns a URL that you can use to make API calls.  If you call the function at the bottom of weather.py then you can generate and display the URL.

    # weather.py

    # ...

    if __name__ == "__main__":
        user_args = read_user_cli_args()
        query_url = build_weather_query(user_args.city, user_args.imperial)
        print(query_url)

**Make an HTTP Request**
You'll use Python's urllib module to make an HTTP GET request to the API.

    # weather.py

    import argparse
    import json
    from configparser import ConfigParser
    from urllib import parse, request

    # ...

You'll use urllib.request to make the request and you'll use json to convert the data of the API response.

    # weather.py


    # ...


    def get_weather_data(query_url):

        """Makes an API request to a URL and returns the data as a Python object.


        Args:

            query_url (str): URL formatted for OpenWeather's city name endpoint


        Returns:

            dict: Weather information for a specific city

        """

        response = request.urlopen(query_url)

        data = response.read()

        return json.loads(data)



    if __name__ == "__main__":

        user_args = read_user_cli_args()

        query_url = build_weather_query(user_args.city, user_args.imperial)

        weather_data = get_weather_data(query_url)

        print(weather_data)


If you test your program, you will see the data that we are now getting back from the API.  What happens if we get too creative and type a city name for which the API doesn't have any weather data?

    $ python weather.py cheesequake
    Traceback (most recent call last):

    ...

    urllib.error.HTTPError: HTTP Error 404: Not Found

**Handle Exceptions in Your Code**
You've encountered an HTTPError when ou played arpund with your command line app.  That doesn't make for a good user experience.  Because you know which error to catch, you can add a specific exception to your code.

    # weather.py


    import argparse

    import json

    import sys

    from configparser import ConfigParser

    from urllib import error, parse, request


    # ...


    def get_weather_data(query_url):


        # ...


        try:

            response = request.urlopen(query_url)

        except error.HTTPError:

            sys.exit("Can't find weather data for this city.")


        data = response.read()

        return json.loads(data)


    # ...

If you now try to enter a bad input you get a much more manageable output.

    $ python weather.py why not
    Can't find weather data for this city.

You can improve your exception handling by making your messages more specific to different HTTP error codes:

    # weather.py


    # ...


    def get_weather_data(query_url):


        # ...


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

        return json.loads(data)


    # ...

For good measure, you'll add another try..except block to handle potentially malformed JSON that the API might send you:

    # weather.py

    # ...

    def get_weather_data(query_url):

        # ...

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

    # ...

#### **Step 5: Display the Output of Your Python Weather App**

In this step we will filter the weather data we receive for the pieces of infromation we will use.

**Identify Relevant Data**
The current state of your Python weather app collects user input and returns the weather information for an existing city to the terminal.  The problem is, it returns too much data.  The format this data is presented does not lend itself to easy identification.  We can fix that.

    # weather.py

    from pprint import pp

    # ...

    if __name__ == "__main__":

        # ...

        pp(weather_data)

The more readable format allows us to identify the three pieces of information that we want to collect from the API response.

+ City name through weather_data['name']
+ Weather description through weather_data['weather'][0]['description']
+ Temperature through weather_data['main']['temp']

If we change the pprint to a targeted printusing f strings

    # weather.py

    # Removed: from pprint import pp

    # ...
    if __name__ == "__main__":

        # ...

        print(
        f"{weather_data['name']}: "
        f"{weather_data['weather'][0]['description']} "
        f"({weather_data['main']['temp']})"
        )

It gets clearer.  At this point its a good idea to create a dedicated function for printing the result.

    def display_weather_info(weather_data, imperial=False):

        """Prints formatted weather information about a city.


        Args:

            weather_data (dict): API response from OpenWeather by city name

            imperial (bool): Whether or not to use imperial units for temperature


        More information at https://openweathermap.org/current#name

        """

        city = weather_data["name"]

        weather_description = weather_data["weather"][0]["description"]

        temperature = weather_data["main"]["temp"]


        print(f"{city}", end="")

        print(f"\t{weather_description.capitalize()}", end=" ")
        # degree_sign = u"\N{DEGREE SIGN}"
        print(f"({temperature}°{'F' if imperial else 'C'})")



    if __name__ == "__main__":


        # ...

    display_weather_info(weather_data, user_args.imperial)

We can improve the program formatting by allowing padding for strings so the alignment stays consistent.

    # weather.py

    import argparse
    import json
    import sys
    from configparser import ConfigParser

    from urllib import error, parse, request

    BASE_WEATHER_API_URL = "http://api.openweathermap.org/data/2.5/weather"
    PADDING = 20

    # ...

    def display_weather_info(weather_data, imperial=False):

        # ...

        print(f"{city:^{PADDING}}", end="")
        print(
            f"\t{weather_description.capitalize():^{PADDING}}",
            end=" ",
        )
        print(f"({temperature}°{'F' if imperial else 'C'})")


#### **Step 6: Style the Weather App's Output**

At this point your Python weather CLI app displays all the relevant information in a readable and understandable manner.  In this step we will color and some emojis to your weather app to make it pop.

**Change Terminal Output Colors**
You can change the color and other display aspects of the text that you print.  You'll use special character sequences to highlight the city name by reversing the color.

+ \033[;7m inverts the terminal background and foreground colors.
+ \033[0m resets everything to the default.

Instead of mixing all the color code in the main weather file, we should factor it into it's own file so it becomes easier to change in the future.

Create a file called style.py in the same directory as your project.

    # style.py

    PADDING = 20

    REVERSE = "\033[;7m"
    RESET = "\033[0m"

    def change_color(color):
        print(color, end="")

Then change your code to the following:

    # weather.py


    import argparse

    import json

    import sys

    from configparser import ConfigParser

    from urllib import error, request


    import style


    BASE_WEATHER_API_URL = "http://api.openweathermap.org/data/2.5/weather"

    # Remove: PADDING = 20

    # Remove: REVERSE = "\033[;7m"

    # Remove: RESET = "\033[0m"


    # ...


    def display_weather_info(weather_data, imperial=False):


        # ...


        city = weather_data["name"]

        weather_description = weather_data["weather"][0]["description"]

        temperature = weather_data["main"]["temp"]


        style.change_color(style.REVERSE)

        print(f"{city:^{style.PADDING}}", end="")

        style.change_color(style.RESET)

        print(

            f"\t{weather_description.capitalize():^{style.PADDING}}",

            end=" ",

        )

        print(f"({temperature}°{'F' if imperial else 'C'})")


    # ...

Now we might as well as some color identifiers as well.

    # style.py

    PADDING = 20

    RED = "\033[1;31m"
    BLUE = "\033[1;34m"
    CYAN = "\033[1;36m"
    GREEN = "\033[0;32m"
    YELLOW = "\033[33m"
    WHITE = "\033[37m"

    REVERSE = "\033[;7m"
    RESET = "\033[0m"

    def change_color(color):
        print(color, end="")

    # weather.py

    # ...

    def display_weather_info(weather_data, imperial=False):

        # ...

        city = weather_data["name"]
        weather_description = weather_data["weather"][0]["description"]
        temperature = weather_data["main"]["temp"]

        style.change_color(style.REVERSE)
        print(f"{city:^{style.PADDING}}", end="")
        style.change_color(style.RESET)

        style.change_color(style.RED)
        print(
            f"\t{weather_description.capitalize():^{style.PADDING}}",
            end=" ",
        )
        style.change_color(style.RESET)

        print(f"({temperature}°{'F' if imperial else 'C'})")

    # ...

**Format Weather Types in Different Colors**
Similar to HTTP codes the weather API delivers a weather code that classifies the weather as a certain category.  We can use this code to color code the output.

    # weather.py

    import argparse
    import json
    import sys
    from configparser import ConfigParser
    from urllib import error, parse, request

    import style

    BASE_WEATHER_API_URL = "http://api.openweathermap.org/data/2.5/weather"

    # Weather Condition Codes
    # https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
    THUNDERSTORM = range(200, 300)
    DRIZZLE = range(300, 400)
    RAIN = range(500, 600)
    SNOW = range(600, 700)
    ATMOSPHERE = range(700, 800)
    CLEAR = range(800, 801)
    CLOUDY = range(801, 900)

    # ...

With these ranges we can now adjust our code to use them,

    # weather.py


    # ...


    def display_weather_info(weather_data, imperial=False):


        # ...


        city = weather_data["name"]

        weather_id = weather_data["weather"][0]["id"]

        weather_description = weather_data["weather"][0]["description"]

        temperature = weather_data["main"]["temp"]


        style.change_color(style.REVERSE)

        print(f"{city:^{style.PADDING}}", end="")

        style.change_color(style.RESET)


        if weather_id in THUNDERSTORM:

            style.change_color(style.RED)

        elif weather_id in DRIZZLE:

            style.change_color(style.CYAN)

        elif weather_id in RAIN:

            style.change_color(style.BLUE)

        elif weather_id in SNOW:

            style.change_color(style.WHITE)

        elif weather_id in ATMOSPHERE:

            style.change_color(style.BLUE)

        elif weather_id in CLEAR:

            style.change_color(style.YELLOW)

        elif weather_id in CLOUDY:

            style.change_color(style.WHITE)

        else:  # In case the API adds new weather codes

            style.change_color(style.RESET)

        print(

            f"\t{weather_description.capitalize():^{style.PADDING}}",

            end=" ",

        )

        style.change_color(style.RESET)


        print(f"({temperature}°{'F' if imperial else 'C'})")


    # ...

Putting that ode right in the middle of the main code is not that pretty.  We should refactor and make a private function that can hold all this logic.

    # weather.py

    # ...

    def display_weather_info(weather_data, imperial=False):

        # ...

        city = weather_data["name"]
        weather_id = weather_data["weather"][0]["id"]
        weather_description = weather_data["weather"][0]["description"]
        temperature = weather_data["main"]["temp"]

        style.change_color(style.REVERSE)
        print(f"{city:^{style.PADDING}}", end="")
        style.change_color(style.RESET)

        color = _select_weather_display_params(weather_id)

        style.change_color(color)
        print(
            f"\t{weather_description.capitalize():^{style.PADDING}}",
            end=" ",
        )
        style.change_color(style.RESET)

        print(f"({temperature}°{'F' if imperial else 'C'})")

    def _select_weather_display_params(weather_id):
        if weather_id in THUNDERSTORM:
            color = style.RED
        elif weather_id in DRIZZLE:
            color = style.CYAN
        elif weather_id in RAIN:
            color = style.BLUE
        elif weather_id in SNOW:
            color = style.WHITE
        elif weather_id in ATMOSPHERE:
            color = style.BLUE
        elif weather_id in CLEAR:
            color = style.YELLOW
        elif weather_id in CLOUDY:
            color = style.WHITE
        else:  # In case the API adds new weather codes
            color = style.RESET
        return color

    # ...

We can even add emojis to make it even more interesting.

    # weather.py


    # ...


    def display_weather_info(weather_data, imperial=False):


        # ...


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

            f"{weather_description.capitalize():^{style.PADDING}}",

            end=" ",

        )

        style.change_color(style.RESET)


        print(f"({temperature}°{'F' if imperial else 'C'})")


    def _select_weather_display_params(weather_id):

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


    # ...

**Conclusion**
We built this program up from nothing to pretty cool.  There are many things you could to enhance this program.  I leave this to the user to figure out.  Be creative, have fun!

---

##### **Cool Kids Coding School 2022, for any questions or comments contact info@coolkidscodingschool.com**
