  import { navbar } from "../CODES/navbar.js"



  document.getElementById("nav").innerHTML=navbar()

let api = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"


 let fetchdata= async()=>{


    try {
         let res =  await fetch(api)
         let data =  await res.json()
         console.log(data)
         adddata(data)
    } catch (error) {
        
    }
 }

 fetchdata()


 let arr =[]

 let adddata= (data)=>{

  let datadiv =document.getElementById("data")
  datadiv.innerHTML=""


  data.data.forEach(element => {
      
    let card = document.createElement("div")
    card.classList.add("card")

    let image = document.createElement("img")
    image.setAttribute("id", "image")
    image.src= element.image

    let title = document.createElement("h3")
    title.textContent= element.title

    let brand = document.createElement("h3")
    brand.textContent= ` brand: ${element.brand}`
    

    let category = document.createElement("h3")
    category.textContent = `category ${element.category}`

    let price =  document.createElement("h3")
    price.setAttribute("id", "price")
    price.textContent= `price: ${element.price}`

    let button = document.createElement("button")
    button.setAttribute("id", "btn")
    button.textContent ="Add to cart"

    button.addEventListener("click",()=>{
        arr.push(element)
      localStorage.setItem("cartitems", JSON.stringify(arr))

    })


    card.append(image,title,brand,category,price,button)
    datadiv.appendChild(card)
  });

 }
 

 let sortdata = async(value)=>{
  

    try {
        let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?sort=price&order=${value}`)
        let data = await res.json()
        console.log(data)
        adddata(data)
    } catch (error) {
         console.log(error)
    }
 }

 let sortbtn = document.getElementById("sorting1")
 sortbtn.addEventListener("change", ()=>{
    let value = sortbtn.value
    sortdata(value)
    console.log(value)

 })


 let filterdata = async(value)=>{

     try {
        let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=${value}`)
        let data  = await res.json()
        adddata(data)
     } catch (error) {
        console.log(error)
     }
 }

 let filter = document.getElementById("filter1")
 filter.addEventListener("change",()=>{
     let value= filter.value
     filterdata(value)
 })