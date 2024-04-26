import {navbar} from "../utilites/navbar.js"


document.getElementById("navbar").innerHTML=navbar()

let recipeday = async()=>{


    try {
        let url =" https://www.themealdb.com/api/json/v1/1/random.php"

        let res = await fetch(url)
        let data = await res.json()
        appenddata(data)
        console.log(data)
    } catch (error) {
        
    }
 
}
recipeday()


let appenddata =(data)=>{

    let container = document.getElementById("container")
    data.meals.forEach(element => {
        

        let card = document.createElement("div")
        card.classList.add("card")

        let img =document.createElement("img")
        img.src=element.strMealThumb

         let name = document.createElement("h3")
         name.textContent= element.strMeal

         let des = document.createElement("h3")
         des.textContent= element.strInstructions
card.append(img,name,des)
container.appendChild(card)

         

    });


}