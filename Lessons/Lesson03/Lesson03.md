# [Cool Kids Coding School](https://www,coolkidscodingschool.com)
![CKCS logo >](./images/ckcslogo.png)
</br>

## Course: **Web Development**

### Lesson 3: **CSS**

---
</br>

#### **Cascading Style Sheet Selectors**

We briefly discused CSS in previous lessons.  CSS is such a large topic that we could dedicate an entire course to it.  In this lesson we are going to dig deeper into the specific topic of selectors.  

A CSS selector selects the HTML element(s) you want to style.
CSS Selectors

CSS selectors are used to "find" (or select) the HTML elements you want to style.

We can divide CSS selectors into five categories:

+ Simple selectors (select elements based on name, id, class)
+ Combinator selectors (select elements based on a specific relationship between them)
+ Pseudo-class selectors (select elements based on a certain state)
+ Pseudo-elements selectors (select and style a part of an element)
+ Attribute selectors (select elements based on an attribute or attribute value)

#### **Simple Selectors**

The element selector selects HTML elements based on the element name.

    Here, all <p> elements on the page will be center-aligned, with a red text color: 

    p {
        text-align: center;
        color: red;
    } 

The id selector uses the id attribute of an HTML element to select a specific element.

The id of an element is unique within a page, so the id selector is used to select one unique element!

To select an element with a specific id, write a hash (#) character, followed by the id of the element.
Example

    The CSS rule below will be applied to the HTML element with id="para1": 

    #para1 {
        text-align: center;
        color: red;
    } 

The class selector selects HTML elements with a specific class attribute.

To select elements with a specific class, write a period (.) character, followed by the class name.

    In this example all HTML elements with class="center" will be red and center-aligned: 
    .center {
        text-align: center;
        color: red;
    } 

You can also specify that only specific HTML elements should be affected by a class.

    In this example only <p> elements with class="center" will be red and center-aligned: 
    
    p.center {
        text-align: center;
        color: red;
        }

HTML elements can also refer to more than one class.

    In this example the <p> element will be styled according to class="center" and to class="large": 
    
    <p class="center large">This paragraph refers to two classes.</p> 

The universal selector (*) selects all HTML elements on the page.

    The CSS rule below will affect every HTML element on the page: 
    * {
        text-align: center;
        color: blue;
    } 

The grouping selector selects all the HTML elements with the same style definitions.

Look at the following CSS code (the h1, h2, and p elements have the same style definitions):

    h1 {
    text-align: center;
    color: red;
    }

    h2 {
    text-align: center;
    color: red;
    }

    p {
    text-align: center;
    color: red;
    }

It will be better to group the selectors, to minimize the code.

To group selectors, separate each selector with a comma.

    In this example we have grouped the selectors from the code above: 
    h1, h2, p {
        text-align: center;
        color: red;
    } 

#### **Combinator Selectors**

A combinator is something that explains the relationship between the selectors.

A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.

There are four different combinators in CSS:

+ descendant selector (space)
+ child selector (>)
+ adjacent sibling selector (+)
+ general sibling selector (~)

Descendant Selector  
The descendant selector matches all elements that are descendants of a specified element.

    The following example selects all <p> elements inside <div> elements: 

    div p {
        background-color: yellow;
    } 

Child Selector (>)  
The child selector selects all elements that are the children of a specified element.

    The following example selects all <p> elements that are children of a <div> element:
    
    div > p {
        background-color: yellow;
    }

Adjacent Sibling Selector (+)  
The adjacent sibling selector is used to select an element that is directly after another specific element.

Sibling elements must have the same parent element, and "adjacent" means "immediately following".

    The following example selects the first <p> element that are placed immediately after <div> elements:

    div + p {
        background-color: yellow;
    }

General Sibling Selector (~)  
The general sibling selector selects all elements that are next siblings of a specified element.

    The following example selects all <p> elements that are next siblings of <div> elements: 

    div ~ p {
        background-color: yellow;
    }

#### **CSS Pseudo-classes**

What are Pseudo-classes?

A pseudo-class is used to define a special state of an element.

For example, it can be used to:

+ Style an element when a user mouses over it
+ Style visited and unvisited links differently
+ Style an element when it gets focus

Anchor Pseudo-classes

Links can be displayed in different ways:

    /* unvisited link */
    a:link {
    color: #FF0000;
    }

    /* visited link */
    a:visited {
    color: #00FF00;
    }

    /* mouse over link */
    a:hover {
    color: #FF00FF;
    }

    /* selected link */
    a:active {
    color: #0000FF;
    } 

Pseudo-classes and HTML Classes

Pseudo-classes can be combined with HTML classes:

When you hover over the link in the example, it will change color:

    a.highlight:hover {
        color: #ff0000;
    }

Hover on <div>

An example of using the :hover pseudo-class on a <div> element:

    div:hover {
        background-color: blue;
    }

CSS - The :first-child Pseudo-class  
The :first-child pseudo-class matches a specified element that is the first child of another element.

    Match the first <p> element

    In the following example, the selector matches any <p> element that is the first child of any element:

    p:first-child {
        color: blue;
    }

    Match the first <i> element in all <p> elements

    In the following example, the selector matches the first <i> element in all <p> elements:

    p i:first-child {
        color: blue;
    }

    Match all <i> elements in all first child <p> elements

    In the following example, the selector matches all <i> elements in <p> elements that are the first child of another element:

    p:first-child i {
        color: blue;
    }

#### **CSS Pseudo-elements**

What are Pseudo-Elements?

A CSS pseudo-element is used to style specified parts of an element.

For example, it can be used to:

+ Style the first letter, or line, of an element
+ Insert content before, or after, the content of an element

The ::first-line Pseudo-element

The ::first-line pseudo-element is used to add a special style to the first line of a text.

    The following example formats the first line of the text in all <p> elements:

    p::first-line {
        color: #ff0000;
        font-variant: small-caps;
    } 

The ::first-letter Pseudo-element  
The ::first-letter pseudo-element is used to add a special style to the first letter of a text.

    The following example formats the first letter of the text in all <p> elements: 

    p::first-letter {
        color: #ff0000;
        font-size: xx-large;
    }

Pseudo-elements and HTML Classes  
Pseudo-elements can be combined with HTML classes: 

    p.intro::first-letter {
        color: #ff0000;
        font-size: 200%;
    }

The example above will display the first letter of paragraphs with class="intro", in red and in a larger size.

Multiple Pseudo-elements  
Several pseudo-elements can also be combined.

In the following example, the first letter of a paragraph will be red, in an xx-large font size. The rest of the first line will be blue, and in small-caps. The rest of the paragraph will be the default font size and color:

    p::first-letter {
        color: #ff0000;
        font-size: xx-large;
    }

    p::first-line {
        color: #0000ff;
        font-variant: small-caps;
    }

CSS - The ::before Pseudo-element  
The ::before pseudo-element can be used to insert some content before the content of an element.

    The following example inserts an image before the content of each <h1> element:

    h1::before {
        content: url(smiley.gif);
    }

CSS - The ::after Pseudo-element  
The ::after pseudo-element can be used to insert some content after the content of an element.

    The following example inserts an image after the content of each <h1> element:

    h1::after {
    content: url(smiley.gif);
    }

CSS - The ::marker Pseudo-element  
The ::marker pseudo-element selects the markers of list items.

The following example styles the markers of list items:

    ::marker {
        color: red;
        font-size: 23px;
    }

CSS - The ::selection Pseudo-element  
The ::selection pseudo-element matches the portion of an element that is selected by a user.

The following CSS properties can be applied to ::selection: color, background, cursor, and outline.

The following example makes the selected text red on a yellow background:

    ::selection {
        color: red;
        background: yellow;
    }

#### **CSS Attribute Selectors**

Style HTML Elements With Specific Attributes

It is possible to style HTML elements that have specific attributes or attribute values.

CSS [attribute] Selector  
The [attribute] selector is used to select elements with a specified attribute.

    The following example selects all <a> elements with a target attribute:

    a[target] {
        background-color: yellow;
    }

CSS [attribute="value"] Selector  
The [attribute="value"] selector is used to select elements with a specified attribute and value.

    The following example selects all <a> elements with a target="_blank" attribute:

    a[target="_blank"] {
        background-color: yellow;
    }

CSS [attribute~="value"] Selector  
The [attribute~="value"] selector is used to select elements with an attribute value containing a specified word.

The following example selects all elements with a title attribute that contains a space-separated list of words, one of which is "flower":

    [title~="flower"] {
        border: 5px solid yellow;
    }

The example above will match elements with title="flower", title="summer flower", and title="flower new", but not title="my-flower" or title="flowers".

CSS [attribute|="value"] Selector  
The [attribute|="value"] selector is used to select elements with the specified attribute, whose value can be exactly the specified value, or the specified value followed by a hyphen (-).

Note: The value has to be a whole word, either alone, like class="top", or followed by a hyphen( - ), like class="top-text".

    [class|="top"] {
        background: yellow;
    }

CSS [attribute^="value"] Selector  
The [attribute^="value"] selector is used to select elements with the specified attribute, whose value starts with the specified value.

The following example selects all elements with a class attribute value that starts with "top":

Note: The value does not have to be a whole word!

    [class^="top"] {
        background: yellow;
    }

CSS [attribute$="value"] Selector  
The [attribute$="value"] selector is used to select elements whose attribute value ends with a specified value.

The following example selects all elements with a class attribute value that ends with "test":

Note: The value does not have to be a whole word!  

    [class$="test"] {
        background: yellow;
    }

CSS [attribute*="value"] Selector  
The [attribute*="value"] selector is used to select elements whose attribute value contains a specified value.

The following example selects all elements with a class attribute value that contains "te":

Note: The value does not have to be a whole word!  

    [class*="te"] {
        background: yellow;
    }

Styling Forms  
The attribute selectors can be useful for styling forms without class or ID:

    input[type="text"] {
        width: 150px;
        display: block;
        margin-bottom: 10px;
        background-color: yellow;
    }

    input[type="button"] {
        width: 120px;
        margin-left: 35px;
        display: block;
    } 

---

##### **Cool Kids Coding School 2022, for any questions or comments contact info@coolkidscodingschool.com**
