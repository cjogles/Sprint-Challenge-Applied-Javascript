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
function Card(obj) {
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
    pic.src = obj.data.articles.bootstrap[0].authorPhoto;
    headLine.textContent = obj.data.articles.bootstrap[0].headline;
    byAuthorName.textContent = obj.data.articles.bootstrap[0].authorName;
    //return card
    return newCard;
}
let card = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(function (response) {
    // handle success
    console.log(response);
    let newCard = Card(response);
    card.appendChild(newCard);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });