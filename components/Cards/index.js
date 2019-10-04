// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// create a card container to append new card elements too
let cardContainer = document.querySelector(".cards-container");

// create a bootstrap card component
function BootStrapCard(obj) {
    let newCard = document.createElement("div");
    let headLine = document.createElement("div");
    let author = document.createElement("div");
    let imgContainer = document.createElement("div");
    let pic = document.createElement("img");
    let byAuthorName = document.createElement("span");
    // structure content elements
    newCard.appendChild(headLine);
    newCard.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(pic);
    author.appendChild(byAuthorName);
    // connect classes for styling
    newCard.classList.add("card");
    headLine.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    // populate elements with content
    headLine.textContent = obj.headline;
    byAuthorName.textContent = obj.authorName;
    pic.src = obj.authorPhoto;
    // append newCard to the container desired
    cardContainer.appendChild(newCard);
}

// create a javascript card component
function JavascriptCard(obj) {
    let newCard = document.createElement("div");
    let headLine = document.createElement("div");
    let author = document.createElement("div");
    let imgContainer = document.createElement("div");
    let pic = document.createElement("img");
    let byAuthorName = document.createElement("span");
    // structure content elements
    newCard.appendChild(headLine);
    newCard.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(pic);
    author.appendChild(byAuthorName);
    // connect classes for styling
    newCard.classList.add("card");
    headLine.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    // populate elements with content
    headLine.textContent = obj.headline;
    byAuthorName.textContent = obj.authorName;
    pic.src = obj.authorPhoto;
    // append newCard to the container desired
    cardContainer.appendChild(newCard);
}

// create a jquery card component
function JQueryCard(obj) {
    let newCard = document.createElement("div");
    let headLine = document.createElement("div");
    let author = document.createElement("div");
    let imgContainer = document.createElement("div");
    let pic = document.createElement("img");
    let byAuthorName = document.createElement("span");
    // structure content elements
    newCard.appendChild(headLine);
    newCard.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(pic);
    author.appendChild(byAuthorName);
    // connect classes for styling
    newCard.classList.add("card");
    headLine.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    // populate elements with content
    headLine.textContent = obj.headline;
    byAuthorName.textContent = obj.authorName;
    pic.src = obj.authorPhoto;
    // append newCard to the container desired
    cardContainer.appendChild(newCard);
}

// create a node card component
function NodeCard(obj) {
    let newCard = document.createElement("div");
    let headLine = document.createElement("div");
    let author = document.createElement("div");
    let imgContainer = document.createElement("div");
    let pic = document.createElement("img");
    let byAuthorName = document.createElement("span");
    // structure content elements
    newCard.appendChild(headLine);
    newCard.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(pic);
    author.appendChild(byAuthorName);
    // connect classes for styling
    newCard.classList.add("card");
    headLine.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    // populate elements with content
    headLine.textContent = obj.headline;
    byAuthorName.textContent = obj.authorName;
    pic.src = obj.authorPhoto;
    // append newCard to the container desired
    cardContainer.appendChild(newCard);
}

// create a technology card component
function TechnologyCard(obj) {
    let newCard = document.createElement("div");
    let headLine = document.createElement("div");
    let author = document.createElement("div");
    let imgContainer = document.createElement("div");
    let pic = document.createElement("img");
    let byAuthorName = document.createElement("span");
    // structure content elements
    newCard.appendChild(headLine);
    newCard.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(pic);
    author.appendChild(byAuthorName);
    // connect classes for styling
    newCard.classList.add("card");
    headLine.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    // populate elements with content
    headLine.textContent = obj.headline;
    byAuthorName.textContent = obj.authorName;
    pic.src = obj.authorPhoto;
    // append newCard to the container desired
    cardContainer.appendChild(newCard);
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(function (response) {
    // Enter data and invoke component on every item within each array within all objects
    console.log(response);
    response.data.articles.bootstrap.forEach(currObj => {
            BootStrapCard(currObj);
    })
    response.data.articles.javascript.forEach(currObj => {
            JavascriptCard(currObj);
    })
    response.data.articles.jquery.forEach(currObj => {
            JQueryCard(currObj);
    })
    response.data.articles.node.forEach(currObj => {
            NodeCard(currObj);
    })
    response.data.articles.technology.forEach(currObj => {
            TechnologyCard(currObj);
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
