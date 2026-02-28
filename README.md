#1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

--> getElementById("id")

  i) Selects one element by ID. 

  ii) Returns a single element. 

--> getElementsByClassName("class") 

i) Selects elements by class name.

ii) Returns HTMLCollection

--> querySelector("selector") 

i) Selects the first matching element using CSS selector. 

--> querySelectorAll("selector")

i) Selects all matching elements using CSS selector.

ii) Returns NodeList



#2. How do you create and insert a new element into the DOM?

i) Create element --> document.createElement("tag")

ii) Add content --> element.textContent = "Text"

iii) Insert into DOM --> parent.appendChild(element)



#3. What is Event Bubbling? And how does it work?

--> An events bubblin means an event starts from the target element and moves upward to its parent elements




#4. What is Event Delegation in JavaScript? Why is it useful?

--> Adding event listener to a parent element instead of multiple child elements.




#5. What is the difference between preventDefault() and stopPropagation() methods?

i) preventDefault() means Stops default browser action

ii) stopPropagation() means Stops bubbling

