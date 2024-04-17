
let search = document.getElementById("searchinput")
let button = document.getElementById("btn")
let apikey = "468e32c3"


button.addEventListener("click", fetchdata)
async function fetchdata() {
    if (search.value === "") {
        alert("please enter the movie name")
        return
    }
    try {
        let api = await fetch(`http://www.omdbapi.com/?t=${search.value}&apikey=${apikey}`)
        let data = await api.json()
        console.log(data)
       getdata(data)
    }
    catch (err) {
        console.log(err)
    }
}


let getdata =(arr)=>{
    document.getElementById("data").innerHTML=""
    let div= document.createElement("div")
     let poster= document.createElement("img")
     poster.setAttribute("src",arr.Poster)
    let name = document.createElement("h2")
    name.textContent= arr.Title
    let realise = document.createElement("h3")
    realise.textContent=`released date:- ${arr.Released} `
    let rating = document.createElement("h3")
    rating.textContent= "rating"+"  "+ arr.imdbRating
    let actors= document.createElement("h3")
    actors.textContent = ` Actors :-${arr.Actors}`
    let plot = document.createElement("h3")
    plot.textContent=arr.Plot
  div.append(poster,name,realise,rating,actors,plot)
  document.getElementById("data").append(div)
}
      



