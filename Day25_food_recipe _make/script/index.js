
import { navbar } from "../utilites/navbar.js";

let navbardiv = document.getElementById("container")
navbardiv.innerHTML = (navbar())

let api = "https://www.themealdb.com/api/json/v1/1/search.php?s="

let searchfunction = async (value1) => {
    try {
        let res = await fetch(`${api}${value1}`)
        let data = await res.json()
        console.log(data)
        appenddata(data)
    } catch (error) {
        console.log("bhai error aya hai,", error)
    }

}

document.getElementById("searchbtn").addEventListener("click", () => {

    let value1 = document.getElementById("searchinput").value
    console.log(value1)
    searchfunction(value1)
})

let appenddata = (data) => {

    let div = document.getElementById("data")
    div.innerHTML = ""

    data.meals.forEach(element => {

        let card = document.createElement("div")
        card.classList.add("card")


        // Create image element
        const img = document.createElement('img');
        img.src = element.strMealThumb;
        img.alt = element.strMeal;
        card.appendChild(img);

        // Create heading for meal name
        const heading = document.createElement('h2');
        heading.textContent = element.strMeal;
        card.appendChild(heading);

        // Create paragraph for instructions
        const instructionsPara = document.createElement('p');
        instructionsPara.textContent = element.strInstructions;
        card.appendChild(instructionsPara);

        let ingredients = document.createElement("ul")
         for (let i= 1; i<=20; i++) {
           let ingredeints = element['strIngredient' + i]
           let measue = element['strMeasure',+i]
            if(ingredeints && measue !==""){
                let list = document.createElement("li")
                list.textContent=`${measue,ingredeints}`
                ingredients.appendChild(list)
            }
            
         }

        card.append(img,heading,instructionsPara,ingredients)
        div.append(card)
    });




}