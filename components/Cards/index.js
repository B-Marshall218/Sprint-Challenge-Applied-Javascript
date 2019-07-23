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

// cards.appendChild(createCard(axiousData.data.articles))

function newCard(object) {
    let newCard = document.createElement("div")
    newCard.classList.add("card")
    newCard.textContent = object.card
    cardsContainer.appendChild(newCard)

    let headline = document.createElement("div")
    headline.classList.add("headline")
    headline.textContent = object.headline
    cardsContainer.appendChild(headline)

    let author = document.createElement("span")
    author.classList.add("author")
    author.textContent = "By " + object.authorName
    cardsContainer.appendChild(author)

    let imgContainer = document.createElement("img-container")
    imgContainer.classList.add("img-container")
    imgContainer.textContent = object.authorPhoto
    cardsContainer.appendChild(imgContainer)


}

let cardsContainer = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(axiousCardsData => {
        console.log("axiousData", axiousCardsData);
        console.log("axiousCardData", axiousCardsData.data.articles);
        for (var it in axiousCardsData.data.articles) {
            if (it === "javascript") {
                axiousCardsData.data.articles.javascript.forEach(object => {
                    newCard(object)
                    // console.log(object)
                })
            }
            if (it === "bootstrap") {
                axiousCardsData.data.articles.bootstrap.forEach(object => {
                    newCard(object)
                    console.log(object)
                })
            }
            if (it === "technology") {
                axiousCardsData.data.articles.technology.forEach(object => {
                    newCard(object)
                })
            }
            if (it === "jquery") {
                axiousCardsData.data.articles.jquery.forEach(object => {
                    newCard(object)
                })
            }
            if (it === "node") {
                axiousCardsData.data.articles.node.forEach(object => {
                    newCard(object)
                })
            }

            console.log(it);
            console.log(axiousCardsData.data.articles.javascript)
        }

    })
    .catch((err) => {
        console.log("error: ", err)
    })