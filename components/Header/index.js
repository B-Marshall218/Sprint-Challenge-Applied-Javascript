// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    let header = document.createElement("div")
    let hDate = document.createElement("span")
    let hTitle = document.createElement("h1")
    let hTemp = document.createElement("span")


    header.classList.add("header")
    hDate.classList.add("date")
    hTemp.classList.add("temp")

    header.appendChild(hDate)
    header.appendChild(hTitle)
    header.appendChild(hTemp)

    hDate.textContent = "MARCH 28, 2019"
    hTitle.textContent = "Lambda TImes"
    hTemp.textContent = "98°"


    return header;
}


let headerContainer = document.querySelector(".header-container")
console.log(headerContainer)
let header = Header();
headerContainer.appendChild(header)




