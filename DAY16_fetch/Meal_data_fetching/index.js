

async function getcategoriesdata() {
    try {
        let api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        let data = await api.json()
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
}
document.getElementById("get-category-data").addEventListener("click", function () {
    getcategoriesdata()
})

async function getingredientdata() {
    try {
        let api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
        let data = await api.json()
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
}

document.getElementById("get-ingredient-data").addEventListener("click", function () { })