// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // Create elements
    let newHeader = document.createElement("div");
    let newDate = document.createElement("span");
    let newTitle = document.createElement("h1");
    let newTemp = document.createElement("span");
    // Structure elements
    newHeader.appendChild(newDate);
    newHeader.appendChild(newTitle);
    newHeader.appendChild(newTemp);
    // Connect class names for styling
    newHeader.classList.add("header");
    newDate.classList.add("date");
    newTemp.classList.add("temp");
    // Add potential event listeners?
    // add content
    newTitle.textContent = "Lambda Times";
    newDate.textContent = "Oct 4th, 2019";
    newTemp.textContent = "98 deg";
    // Return newHeader Component
    return newHeader;
}
// Create a variable that is assigned the container that you want to append the new header component too
let appendHeaderThisBox = document.querySelector(".header-container");
// Append new Header to proper container
appendHeaderThisBox.appendChild(Header());
