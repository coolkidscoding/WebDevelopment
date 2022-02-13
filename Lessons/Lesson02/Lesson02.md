# [Cool Kids Coding School](https://www,coolkidscodingschool.com)
![CKCS logo >](./images/ckcslogo.png)
</br>

## Course: **Web Development**

### Lesson 2: **Introduction to HTML (Continued)**

---
</br>

#### **HTML Forms**

HTML forms are used to collect input from users.  The `<form>` element is used in this case.

    <form>
    .
    form elements
    .
    </form>

The HTML `<input>` element is the most used form element.  The input element can be displayed in many ways depending on the value of the `<type>` attribute.

    Type                        Description
    <input  type="text">        Displays a single-line text input field
    <input  type="radio">       Displays a radio button (for selecting one of many choices)
    <input  type="checkbox">    Displays a checkbox (for selecting zero or more of many choices)
    <input  type="submit">      Displays a submit button (for submitting the form)
    <input  type="button">      Displays a clickable button

##### **Text Fields**
The text attribute defines a single-line input field for text input.

##### **Label Fields**
The label tag defines a label for many form elements.  The for attribute of the label tag should be equal to the id attribute of the input element in order to bind them together.

##### **Radio Buttons**
The input type radio defines a radio button.
Radio buttons allow a user to select ONE of a limited number of choices.

##### **Checkboxes**
The input type checkbox defines a checkbox.  Checkboxes allow a user to select ZERO or MORE options of a limited number of choices.

##### **Submit Button**
The input type submit defines a button for submitting the form data to a form handler.  The form handler is typically a file on the server with a script for processing input data.  The form handler is specified in the form's action attribute.

    <form action="/action_page.php">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe"><br><br>
        <input type="submit" value="Submit">
    </form> 

Notice that each input field must have a name attribute to be submitted.  If the name attribute is omitted, the value of the input field will not be sent.

#### **HTML Form Attributes**

##### **The Target Attribute**

The target attribute specifies where to display the response that is received after submitting form data.

    Value   Description
    _blank  The response is displayed in a new window or tab
    _self   The response is displayed in the current window
    _parent The response is displayed in the parent frame
    _top    The response is displayed in the full body of the window

##### **The Method Attribute**

The method attribute specifies the HTTP method to be used when submitting the form data.
The form data can be sent as URL variables (method=get) or as HTTP post transaction (method=post).  The default methos is GET.

Notes on GET:

+ Appends the form data to the URL, in name/value pairs
+ NEVER use GET to send sensitive data! (the submitted form data is visible in the URL!)
+ The length of a URL is limited (2048 characters)
+ Useful for form submissions where a user wants to bookmark the result
+ GET is good for non-secure data, like query strings in Google

Notes on POST:

+ Appends the form data inside the body of the HTTP request (the submitted form data is not shown in the URL)
+ POST has no size limitations, and can be used to send large amounts of data.
+ Form submissions with POST cannot be bookmarked

#### **HTML Form ELements**

##### **The Select Element**

The select element defines a drop down list.

    <label for="cars">Choose a car:</label>
    <select id="cars" name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
    </select> 

##### The Button Element**

The button element defines a clickable button.

    <button type="button" onclick="alert('Hello World!')">Click Me!</button> 

---

##### **Cool Kids Coding School 2022, for amy questions or comments contact info@coolkidscodingschool.com**
