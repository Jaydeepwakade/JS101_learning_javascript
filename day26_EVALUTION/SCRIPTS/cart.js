
import { navbar } from "../CODES/navbar.js";

document.getElementById("nav").innerHTML=navbar()

 let arr =JSON.parse(localStorage.getItem("cartitems")) || []

 let appenddata = (arr)=>{

    let div = document.getElementById("data")
    div.innerHTML=""

   
    let total = 0
  
   arr.forEach((element, index) => {
      
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
        button.textContent ="remove item"

        button.addEventListener("click", ()=>{
             
            
                arr.splice(index,1)
            
              
              localStorage.setItem("cartitems", JSON.stringify(arr))
              card.remove()

              total-=element.price
              let count = document.getElementById("innercount").innerHTML = total

        })

        
      

        card.append(image,title,brand,category,price,button)
        div.appendChild(card)
        total+=element.price
        let count = document.getElementById("innercount").innerHTML = total
   

 }
 
)}
 appenddata(arr)