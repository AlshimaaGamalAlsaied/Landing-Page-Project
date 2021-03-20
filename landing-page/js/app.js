/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll(".landing__container"); // To get all sections to add dynamic navigation to each of them
const uls = document.querySelector("#navbar__list"); //get the empty ul to append new section links 
const mybutton = document.getElementById("topButton"); // for scroll to top button
const frag = document.createDocumentFragment(); // for high performance

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


function append(parent, child) {
    return parent.append(child);
};
// to remove bounderies form unactive section
function remove(element){
    return element.style.background = "";
};

// set active section with "purple" bounderies, and call remove function to remove this color from any else section
function active() {
        for (section of sections) {
            // get bounderies vales
            const bounding = section.getBoundingClientRect();
            if (bounding.top >= -50 && bounding.top <= 100) {
                // to remove unactive section during scrolling
                sections.forEach(remove);
                section.style.background = "purple";
            }
        }
};   
/** functions to handle scroll to top*/
function scrollFunction() {
    if (document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
};
  
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// create a new paragraph to add it to the page dynamically
function new_paragraph(){

    for (section of sections)
    {
        const paragraph = document.createElement("p");
        const textNode = document.createTextNode("Stay safe and in a good health");
        const result = paragraph.appendChild(textNode);
        append(section, result);
    };
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// create menu with unordered list linked to each section
sections.forEach(function (section, index) {
    const dataNav = "{Section " + (index + 1) + "} ";
    const textNode = document.createTextNode(dataNav);
    const li_sec = document.createElement("li");
    const link_sec = document.createElement("a");
    link_sec.addEventListener('click', function () {
        section.scrollIntoView({ behavior: "smooth" });
    });
    append(link_sec, textNode);
    append(li_sec, link_sec);
    append(frag, li_sec);
});

append(uls, frag);

//scroll event
window.addEventListener('scroll', active);


// to top button
window.onscroll = scrollFunction;

// append a new paragraph as a child for each section
new_paragraph();