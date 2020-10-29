// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// make a variable housing the location of the container where I should append the new tabs too
let topicsElement = document.querySelector(".topics");

// make a tab creator aka tab component (item is the literal string that you want to house inside tab)
function Tab(item) {
    // create element
    let newTab = document.createElement("div");
    // add class for style
    newTab.classList.add("tab");
    // populate content
    newTab.textContent = item;
    // append the new tab to the DOM for implementation into the html document. No need to return value the appending is all thats needed
    topicsElement.appendChild(newTab);
}

// Perform a get request using axios object in the axios library to receive topics data
axios.get("https://lambda-times-backend.herokuapp.com/topics")
    // .then(topicsData)
    .then(function(response) {
        // target array of topics and for each item in topics array invoke the tab component and pass it each respective item
        response.data.topics.forEach(item => {
            Tab(item);
        })
    })
    .catch(function (error) {
        // handle error
        console.log(`There was an error. The error is: ${error}`);
    });