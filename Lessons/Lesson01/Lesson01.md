# [Cool Kids Coding School](https://www,coolkidscodingschool.com)
![CKCS logo >](./images/ckcslogo.png)
</br>

## Course: **Web Development**

### Lesson 1: **Introduction to HTML**

---
</br>

**What is HTML?**

+ HTML stands for Hyper Text Markup Language
+ HTML is the standard markup language for creating Web pages
+ HTML describes the structure of a Web page
+ HTML consists of a series of elements
+ HTML elements tell the browser how to display the content
+ HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.

#### **Structure of a HTML page**

A minimal HTML web page has a `DOCTYPE` element that tells the browser what the document is.  It then contains a `<head>`, a `<body>` all enclosed in a `<html>` body.  Each open element, for the most part, is followed by a close element.  There are exceptions to this rule, but not many.

    <!DOCTYPE html>
    <html>
    <head>
        <title>Page Title</title>
    </head>
    <body>

        <h1>My First Heading</h1>
        <p>My first paragraph.</p>

    </body>
    </html> 

#### **What are HTML elements?**

A HTML element is defined by a `<start>` tag and an `</start>` end tag.  While many browsers will allow a missing end tag.  It is considered bad style to leave out the end tag.  

    `<tagname>Content goes here...</tagname>`

#### **HTML Headings**

HTML headings are defined by `<h1>` thru `<h6>` tags.

    <h1>This is heading 1</h1>
    <h2>This is heading 2</h2>
    <h3>This is heading 3</h3> 

#### **HTML Paragraphs**

HTML paragraphs are defined by the `<p>` tag

    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p> 

In many instances we want to sometimes create a transition from one are to another in a web page.  This can be done with the **horizontal rule**.

    <h1>This is heading 1</h1>
    <p>This is some text.</p>
    <hr>
    <h2>This is heading 2</h2>
    <p>This is some other text.</p>
    <hr> 

HTML does not care about whitespace.  It formats content based on rules that the markdown document describes.

    <p>
        My Bonnie lies over the ocean.

        My Bonnie lies over the sea.

        My Bonnie lies over the ocean.

        Oh, bring back my Bonnie to me.
    </p> 

This would render like this

    My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me. 

If you want to maintain spacing you can use the `<pre>` tag.

     <pre>
        My Bonnie lies over the ocean.

        My Bonnie lies over the sea.

        My Bonnie lies over the ocean.

        Oh, bring back my Bonnie to me.
    </pre> 

#### **HTML Links**

HTML links are defined by the `<a>` tag.  The `href` reference is called an attribute and it describes the element.

    <a href="https://www.coolkidscodingschool.com">This is the best website!</a> 

There are extra attributes that can be used to further control the behavior of this element.

    <a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a> 

+ _self - Default. Opens the document in the same window/tab as it was clicked
+ _blank - Opens the document in a new window or tab
+ _parent - Opens the document in the parent frame
+ _top - Opens the document in the full body of the window

#### **HTML Images**

HTML images are defined by the `<img>` tag.  The `src` and the `alt`, as well as the `width` and `height` attribute are used to parameterize the element.
The `src` attribute points to the image file.  The `alt` attribute describes the image should it not be able to load.  The `width` and `height` attribute fit the image into a defined area.

    <img src="./images/ckcs_logo.png" alt="CKCS Logo" width="104" height="142"> 

#### **HTML Attributes** 

+ All HTML elements can have attributes
+ Attributes provide additional information about elements
+ Attributes are always specified in the start tag
+ Attributes usually come in name/value pairs like: name="value"

The `style` attribute is used to add color and format to an element.  This type of attribute is called an __inline style__.

    <p style="color:red;">This is a red paragraph.</p> 

+ Use the style attribute for styling HTML elements
+ Use background-color for background color
+ Use color for text colors
+ Use font-family for text fonts
+ Use font-size for text sizes
+ Use text-align for text alignment

#### **HTML Formatting**

HTML texts can be formatted using the following tags.

    <b> - Bold text
    <strong> - Important text
    <i> - Italic text
    <em> - Emphasized text
    <mark> - Marked text
    <small> - Smaller text
    <del> - Deleted text
    <ins> - Inserted text
    <sub> - Subscript text
    <sup> - Superscript text

#### **HTML Comments**

Commenting your code is always a good idea, especially as your code grows in size and complexity.

    <!-- Write your comments here -->

#### **CSS**

CSS stands for cascading style sheets and it allows us incredible flexibility in formatting and visually displaying a web page.  This is a very deep topic and a whole course could easily be taught about CSS.  

CSS can be used in 3 ways:

+ Inline - by using the style attribute inside HTML elements
+ Internal - by using a `<style>` element in the `<head>` section
+ External - by using a `<link>` element to link to an external CSS file

##### Inline CSS

    <h1 style="color:blue;">A Blue Heading</h1>

    <p style="color:red;">A red paragraph.</p> 

##### Internal CSS

    <!DOCTYPE html>
    <html>
    <head>
    <style>
        body {background-color: powderblue;}
        h1   {color: blue;}
        p    {color: red;}
    </style>
    </head>
    <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

    </body>
    </html> 

##### External CSS

    <!DOCTYPE html>
    <html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>

        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>

    </body>
    </html> 

File `styles.css`

    body {
        background-color: powderblue;
    }
    h1 {
        color: blue;
    }
    p {
        color: red;
    }

With an external CSS file you can change the look of an entire website by changing one file!

#### **HTML Tables**

A table is defined using headers, rows, and cells.

    <table>
    <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
    </tr>
    <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
    </tr>
    <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
    </tr>
    </table> 

There are many ways to style a table.  

    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }

#### **HTML Lists**

Many types of lists can be created in HTML.  Among them are unordered

    <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
    </ul

and ordered.

    <ol>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
    </ol> 

#### **Block and Inline HTML**

Each HTML element has a default way of displaying itself.  

+ Block-level Elements

    A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.  
    A block-level element always takes up the full width available (stretches out to the left and right as far as it can).
    Two commonly used block elements are: `<p>` and `<div>`.  

    The `<p>` element defines a paragraph in an HTML document.  
    The `<div>` element defines a division or a section in an HTML document.  

    The `<p>` element is a block-level element.  
    The `<div>` element is a block-level element.  

        <p>Hello World</p>
        <div>Hello World</div> 

+ Inline Elements

    An inline element does not start on a new line.  
    An inline element only takes up as much width as necessary.  
    This is a `<span>` element inside a paragraph.  

         <span>Hello World</span> 

#### **HTML _class_ Attributes**

The HTML class attribute is used to specify a class for an HTML element.  
Multiple HTML elements can share the same class.  

    <!DOCTYPE html>
    <html>
    <head>
    <style>
        .city {
        background-color: tomato;
        color: white;
        border: 2px solid black;
        margin: 20px;
        padding: 20px;
    }
    </style>
    </head>
    <body>

        <div class="city">
            <h2>London</h2>
            <p>London is the capital of England.</p>
        </div>

        <div class="city">
            <h2>Paris</h2>
            <p>Paris is the capital of France.</p>
        </div>

        <div class="city">
            <h2>Tokyo</h2>
            <p>Tokyo is the capital of Japan.</p>
        </div>

    </body>
    </html>

You can access elements that have the same class atrtibute using _Javascript_

    <script>
    function myFunction() {
    var x = document.getElementsByClassName("city");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    }
    </script> 

#### **HTML _id_ Attribute**

An `id` attribute must be unique in a HTML document.  Only one element canuse that id.

    <!DOCTYPE html>
    <html>
    <head>
        <style>
            #myHeader {
            background-color: lightblue;
            color: black;
            padding: 40px;
            text-align: center;
            }
        </style>
    </head>
    <body>

        <h1 id="myHeader">My Header</h1>

    </body>
    </html> 

Id can also be used in _Javascript_.

    <script>
        function displayResult() {
            document.getElementById("myHeader").innerHTML = "Have a nice day!";
        }
    </script>

#### **HTML Javascript**

_Javascript_ makes a webpage more dynamic.

The HTML `<script>` tag is used to define a client-side script (JavaScript).
The `<script>` element either contains script statements, or it points to an external script file through the src attribute.
Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.
To select an HTML element, JavaScript most often uses the document.getElementById() method.
This JavaScript example writes "Hello JavaScript!" into an HTML element with id="demo":

    <script>
        document.getElementById("demo").innerHTML = "Hello JavaScript!";
    </script> 

