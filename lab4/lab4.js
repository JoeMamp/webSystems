// First, let us establish goals
// 1. To acquire this bread, now and forever, Amen.
// 2. To create a function in JavaScript hat does the following:
//    - Iterates through the DOM
//    - Prints the name of each node element
//    - Makes good (non-trivial) use of recursion
//    - Replaces the innerHTML of the element with id="info" with the return value

$(document).ready(function mainFunc() {


  // Get the list of all elements
  // Call the function to compile them into one string
  // Set the text variable equal to the return value of the function
  var elementList = document.getElementsByTagName("*");
  var text = buildText(elementList);

  // Feature to add titles to each element in the document
  for (var i = 0; i < elementList.length; i++) {
    elementList[i].title = elementList[i].tagName + ": " + elementList[i].innerHTML;
  }

  // Function to step through the elements, adding them to the text string
  // preceded by dashes and succeeded by a newline character
  function buildText(eL) {
    var text = "";
    for (var i = 0; i < eL.length; i++) {
      text = text + "-".repeat(getParents(eL[i])) + eL[i].tagName + "\n";
    }
    return text;
  }

  // Recursive function to determine how many parents an element has
  //  It checks if the parentElement is null, and if not, the counter is
  //  incermented and the function is called on the parent; the return value of
  //  this function call is also added to the counter. The counter is returned
  //  at the end of the if-statement holding the recursion
  function getParents(currE) {
    var rents = 0;
    if (currE.parentElement != null) {  // If it has a parent
      rents += 1; // Add 1
      rents += getParents(currE.parentElement); // Check how deep its parent is
    }
    return rents;
  }

  // Call to the event listener function for everyting in the document
  document.addEventListener("click", bubbleBoi);

  // Function that adds an event listener to the element(s) in question
  function bubbleBoi() {
    // while (event.target.parentElement != null) {
      alert(event.target.tagName);
    //   event.target = event.target.parentElement;
    // }
  }

  // Code that calls the functions that affect onMouseOver and onMouseOut actions
  var allDivs = document.getElementsByTagName("div");
  for (var i = 0; i < allDivs.length; i++) {
    allDivs[i].addEventListener("mouseover", letsGoRed);
    allDivs[i].addEventListener("mouseout", comeBackRed);
    allDivs[i].style.width = "40%";
    allDivs[i].style.float = "left";
    allDivs[i].style.marginLeft = "10pt";
  }

  // Change background color, change text (to help read with red background),
  // change the left property, and make the position relative (so that changing
  // left actually does something)
  function letsGoRed() {
    this.style.background = "red";
    this.style.color = "white";
    this.style.position = "relative";
    this.style.left = "10px";
  }

  // Reverts everything in letsGoRed (except position)
  function comeBackRed() {
    this.style.background = "white";
    this.style.color = "black";
    this.style.left = "0px";
  }

  // Replace the text with the recursively created tree text
  document.getElementById("info").innerHTML = text;

  // Some code to make the recursively created tree text bold and colorful (it
  // wasn't fun to read or look at, this sorta helps)
  // I also made the body font smaller so that the page didn't need to scroll at all
  document.getElementById("info").style.float = "left";
  document.getElementById("info").style.color = "blue";
  document.getElementById("info").style.fontWeight = "bold";
  document.body.style.fontSize = "90%";


  // Code that copies the first body element with class="quote", clones the element,
  // changes the inner HTML to my favorite quote that isn't way too long, and appends
  // the cloned element to the last child of the body
  var q = document.getElementsByClassName("quote")[0];   // get the first quote div
  var clone = q.cloneNode(true);  // clone the element
  clone.innerHTML = "Good is the enemy of great - Vista Kicks, If I Didn't Have You, 2:03";
  document.body.lastElementChild.appendChild(clone);

});