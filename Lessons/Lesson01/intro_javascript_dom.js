
// DOM manipulation using javascript

// select elements by id
const button = document.getElementById("btn");
console.log(button);

const para = document.getElementById("para");
console.log(para);

// select elements by class name returns HTML Collection
const button_grp = document.getElementsByClassName("group1");
console.log(button_grp);

// select elements by tag returns HTML Collection
const p_element = document.getElementsByTagName("button");
console.log(p_element)

// select elements by CSS selector type
// . means select by class name
const buttons = document.querySelectorAll('.group1');
console.log(buttons);

const button1 = document.querySelector('.group1');
console.log(button1);

// # means select by id
const para1 = document.querySelector('#para');
console.log(para1);

// dont use any punctuation if selecting by tag
const para2 = document.querySelector('p');
console.log(para2);

// Manipulating Elements
// creating elements
// setting attributes
// set the content
// adding the new element to the DOM

const new_para = document.createElement("p");
new_para.setAttribute("class", "para_group3");
new_para.innerText = "This is a newly created paragraph";

const parent = document.querySelector("#parent_div");
parent.appendChild(new_para);

const new_para2 = document.querySelector(".para_group3");
new_para2.innerText = "I just changed the text of this paragraph";

console.log(new_para);


