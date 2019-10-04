// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// create Tabs component by iterating over data and filling component with content
// use function factory to create component
function Tab(herokuObject) {
    // num of tabs to create
    let numTabs = herokuObject.data.topics.length;
    console.log("im the num of tabs", numTabs);
    // create elements
    for (let i = 0; i < numTabs; i++) {
        console.log("im the iteration num", i);
        let newTab = document.createElement("div");
        // add class for style
        newTab.classList.add("tab");
        // give new tab content
        newTab.textContent = herokuObject.data.topics[i];
        console.log("Im the newtab after putting topics[i] in", newTab);
        return newTab;
    }
    return herokuObject.data.topics;
}

// add new tab to DOM underneath the .topics element

let topicsElement = document.querySelector(".topics");

// Perform a get request using axios object in the axios library to receive topics data
axios.get("https://lambda-times-backend.herokuapp.com/topics")
    // the axios object and .get method have already created a Promise object 
    // under the hood with the callback functions of resolve and reject.
    // add the .then method and .catch methods to decide what to do after a 
    // reject method is returned or a resolve method is returned. 
    .then(function(response) {
        // handle response 
        // create a tab via the Tab function factory holding response (aka the topics array) as its arg
        // append newly created tab array to topicsElement created above the get request
        console.log("Im the response: ", response);
        let tab = Tab(response);
        console.log("Im the Tab factory function result of response passed into it: ", tab);
        topicsElement.appendChild(tab);
    })
    .catch(function (error) {
        // handle error
        console.log(`There was an error. The error is: ${error}`);
    });