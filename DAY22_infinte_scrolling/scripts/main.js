// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
let mainSection = document.getElementById("data-list-wrapper");
let getRecipesBtn = document.getElementById("fetch-recipes");
let totalResult = document.querySelector(".total-results");
const urlAllRecipes = `${baseServerURL}/recipes`;

let recipesArray = [];
let pagenumber = 1

let fetchdata = async () => {
  try {
    let response = await fetch(`${urlAllRecipes}?_page=${pagenumber}&_limit=5`)
    let data = await response.json()
    addData(data)
    console.log(data)
  } catch (error) {

  }
}


let addData = (data) => {


  data.forEach(element => {
    let wrapper = document.createElement("div")
    wrapper.classList.add("data-list-wrapper")

    let card = document.createElement("div")
    card.classList.add("recipe-card")

    let imgdiv = document.createElement("div")
    let img = document.createElement("img")
    img.classList.add("recipe-image")
    img.src = element.image
    imgdiv.append(img)
   //hii

    let details = document.createElement("div")
    details.classList.add("recipe-details")

    let recipename =document.createElement("h2")
    recipename.classList.add("recipe-name")
    recipename.textContent= element.name
    

    let price = document.createElement("p")
    price.classList.add("recipe-price")
    price.textContent= element.price
    details.append(recipename,price)

    card.append(imgdiv,details)
    wrapper.append(card)
    mainSection.append(wrapper)
    
    recipesArray.push(wrapper)
  });
  totalResult.textContent=recipesArray.length

}

getRecipesBtn.addEventListener("click", () => {
fetchdata()
})

window.addEventListener("scroll", ()=>{
  let clientheight = document.documentElement.clientHeight
  let scrollheight = document.documentElement.scrollHeight
  let scroltop = document.documentElement.scrollTop

  console.log(clientheight,scrollheight,scroltop)
  if(Math.ceil(scrollheight-clientheight)<=Math.ceil(scroltop)){
    pagenumber++
    fetchdata(pagenumber)
    console.log("bhai yaha pe hua kahatm")
  }
})