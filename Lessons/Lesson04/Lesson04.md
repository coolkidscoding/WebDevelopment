# [Cool Kids Coding School](https://www,coolkidscodingschool.com)
![CKCS logo >](./images/ckcslogo.png)
</br>

## Course: **Web Development**

### Lesson 3: **Javascript**

---
</br>

Javascript is the world's most popular programming language.

Javascript is the programming language of the Web.

Javascript is easy to learn.

#### **Why Study Javascript?**

Javascript is one of the **3 languages** that all web developers **must** learn.  

+ HTML to define the content of a web page
+ CSS to specify the layout of a web page
+ Javascript to program the behavior of a web page

#### **What can Javascript do?**

Javascript can change HTML Content

    document.getElementById("demo").innerHTML = "Hello JavaScript"; 

Javascript can change HTML attribute values

    <!DOCTYPE html>
    <html>
    <body>

    <h2>What Can JavaScript Do?</h2>

    <p>JavaScript can change HTML attribute values.</p>

    <p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

    <button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

    <img id="myImage" src="pic_bulboff.png" style="width:100px">

    <button onclick="document.getElementById('myImage').src='pic_bulboff.png'">Turn off the light</button>

Javascript can change HTML Styles (CSS)

    document.getElementById("demo").style.fontSize = "35px"; 

Javascript can hide HTML Elements

    document.getElementById("demo").style.display = "none"; 

Javascript can show HTML Elements

    document.getElementById("demo").style.display = "block"; 

#### **Where do we put Javascript?**

In HTML, Javascript code is inserted between the `<script>` tags

    <script>
    document.getElementById("demo").innerHTML = "My First JavaScript";
    </script>

JavaScript in `<head>` or `<body>`

You can place any number of scripts in an HTML document.

Scripts can be placed in the `<body>`, or in the `<head>` section of an HTML page, or in both.

JavaScript in `<head>`

In this example, a JavaScript function is placed in the `<head>` section of an HTML page.

The function is invoked (called) when a button is clicked:

    <!DOCTYPE html>
    <html>
    <head>
    <script>
        function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
        }
    </script>
    </head>
    <body>

        <h2>Demo JavaScript in Head</h2>

        <p id="demo">A Paragraph</p>
        <button type="button" onclick="myFunction()">Try it</button>

    </body>
    </html>

JavaScript in `<body>`

In this example, a JavaScript function is placed in the `<body>` section of an HTML page.

The function is invoked (called) when a button is clicked:

    <!DOCTYPE html>
    <html>
    <body>

        <h2>Demo JavaScript in Body</h2>

        <p id="demo">A Paragraph</p>

        <button type="button" onclick="myFunction()">Try it</button>

        <script>
            function myFunction() {
            document.getElementById("demo").innerHTML = "Paragraph changed.";
            }
        </script>

</body>
</html>

External JavaScript

Scripts can also be placed in external files:

    External file: myScript.js
    function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
    }

External scripts are practical when the same code is used in many different web pages.

JavaScript files have the file extension .js.

To use an external script, put the name of the script file in the src (source) attribute of a `<script>` tag:

    <script src="myScript.js"></script> 

External JavaScript Advantages

Placing scripts in external files has some advantages:

+ It separates HTML and code
+ It makes HTML and JavaScript easier to read and maintain
+ Cached JavaScript files can speed up page loads

To add several script files to one page  - use several script tags:

    <script src="myScript1.js"></script>
    <script src="myScript2.js"></script>

#### **Where do we see output from Javascript?**

JavaScript Display Possibilities

JavaScript can "display" data in different ways:

+ Writing into an HTML element, using innerHTML.
+ Writing into the HTML output using document.write().
+ Writing into an alert box, using window.alert().
+ Writing into the browser console, using console.log().

Using Inner HTML

    <!DOCTYPE html>
    <html>
    <body>

        <h1>My First Web Page</h1>
        <p>My First Paragraph</p>

        <p id="demo"></p>

        <script>
            document.getElementById("demo").innerHTML = 5 + 6;
        </script>

    </body>
    </html> 

Using **document.write()**

    <!DOCTYPE html>
    <html>
    <body>

        <h1>My First Web Page</h1>
        <p>My first paragraph.</p>

        <script>
        document.write(5 + 6);
        </script>

    </body>
    </html> 

Using **window.alert()**

    <!DOCTYPE html>
    <html>
    <body>

        <h1>My First Web Page</h1>
        <p>My first paragraph.</p>

        <script>
        window.alert(5 + 6);
        </script>

    </body>
    </html> 

Using **console.log()** (F12->Console)

    <!DOCTYPE html>
    <html>
    <body>

    <script>
    console.log(5 + 6);
    </script>

    </body>
    </html> 

#### **What does a web page look like programmatically?**

When a web page is loaded, the browser creates a Document Object Model (DOM) on the page.  
The HTML DOM model is constructed as a tree of Objects:

![DOM](./images/pic_htmltree.gif)

With the object model, JavaScript gets all the power it needs to create dynamic HTML:

+ JavaScript can change all the HTML elements in the page
+ JavaScript can change all the HTML attributes in the page
+ JavaScript can change all the CSS styles in the page
+ JavaScript can remove existing HTML elements and attributes
+ JavaScript can add new HTML elements and attributes
+ JavaScript can react to all existing HTML events in the page
+ JavaScript can create new HTML events in the page

#### Finding HTML Elements  

    Method                                  Description
    document.getElementById(id) 	        Find an element by element id
    document.getElementsByTagName(name) 	Find elements by tag name
    document.getElementsByClassName(name) 	Find elements by class name

Changing HTML Elements

    Property                                Description
    element.innerHTML =  new html content   Change the inner HTML of an element
    element.attribute = new value           Change the attribute value of an HTML element
    element.style.property = new style      Change the style of an HTML element
Method 	Description
element.setAttribute(attribute, value)      Change the attribute value of an HTML element

Adding and Deleting Elements

    Method 	                            Description
    document.createElement(element)     Create an HTML element
    document.removeChild(element)       Remove an HTML element
    document.appendChild(element)       Add an HTML element
    document.replaceChild(new, old)     Replace an HTML element
    document.write(text)

---
##### **Cool Kids Coding School 2022, for any questions or comments contact info@coolkidscodingschool.com**
