Joseph Mampillil
Web Systems Development
Lab 4 - JavaScript (JS) and the Document Object Model (DOM)

For part 1, I got a list of all the element in the document, and then added their
names to a string. I used a recursive function to get the number of parents to
insert the appropriate number of dashes, and I added a newline character at the
end of each element name. The DOM might be helpful for adding interactivity to
entire groups of containers throughout the document.

For part 2, I wrote an addEventListener call to a function, bubbleBoi, that
sends an alert with the tagName when an element is clicked. I couldn't quite figure
out how to bubble through the parent elements of each tag, so my code attempt at
that is commented out.

Demonstrate that your onmouseout and onmouseover listeners fire correctly.
Write a paragraph in your README file explaining what you did.

My onMouseOver and onMouseOut listeners are added for every div in the document.
I go through a list of all the divs and add the listener through calls to
letsGoRed (Over) and comeBackRed (Out). I also added styling to every div, making
their containers take up less space and floating them to the left so that I could
view the entire page wihtout having to scroll all the way down past my text tree.


I used https://www.w3schools.com/jsref/met_element_getelementsbytagname.asp to learn how
to get a list of all of the elements in the document. I found how to repeat the dashes at
https://www.geeksforgeeks.org/javascript-string-repeat/#targetText=The%20string.repeat()%20is,this%20function%20has%20been%20called.
I used https://www.w3schools.com/jsref/prop_node_parentelement.asp to find how to check for
an element's parent. I used https://www.w3schools.com/jsref/met_document_addeventlistener.asp
and https://www.w3schools.com/jsref/event_target.asp to figure out how to handle adding event listeners.

I looked at the following pages to add the quote at the bottom of the body:
https://www.w3schools.com/jsref/met_element_getelementsbyclassname.asp
https://www.w3schools.com/jsref/met_node_clonenode.asp
https://www.w3schools.com/jsref/met_node_appendchild.asp
https://www.w3schools.com/jsref/prop_element_lastelementchild.asp

I looked at the following pages to add mouseOver and mouseOut animations:
https://www.w3schools.com/js/js_htmldom_css.asp
https://www.w3schools.com/cssref/pr_pos_left.asp
https://www.w3schools.com/jsref/prop_style_left.asp

I used https://stackoverflow.com/questions/987967/how-to-change-an-elements-title-attribute-using-jquery
to figure out how to add titles to elements using JavaScript.