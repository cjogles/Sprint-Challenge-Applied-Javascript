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
let topicsElement = document.querySelector(".topics");

function Tab(item) {
    // create elements
    let newTab = document.createElement("div");
    // add class for style
    newTab.classList.add("tab");
    // populate content
    newTab.textContent = item;
    // return newtabs
    topicsElement.appendChild(newTab);
}




// Perform a get request using axios object in the axios library to receive topics data
axios.get("https://lambda-times-backend.herokuapp.com/topics")
    // the axios object and .get method have already created a Promise object 
    // under the hood with the callback functions of resolve and reject.
    // add the .then method and .catch methods to decide what to do after a 
    // reject method is returned or a resolve method is returned. 
    .then(function(response) {
        // handle response create a tab via the Tab function factory holding response (aka the topics array) as its arg
        // append newly created tab array to topicsElement created above the get request
        console.log(response);
        response.data.topics.forEach(item => {
            Tab(item);
        })
    })
    .catch(function (error) {
        // handle error
        console.log(`There was an error. The error is: ${error}`);
    });