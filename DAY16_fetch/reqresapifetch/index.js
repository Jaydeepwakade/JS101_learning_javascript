
async function fetchData() {

    try {
        let rawData = await fetch("https://reqres.in/api/users")
        let data = await rawData.json()

        getdata(data)
    }
    catch (error) {
        console.log(error)
    }

}

function getdata(arr) {
    let newarr = arr.data
    newarr.forEach(element => {
        console.log(element)
        let div = document.createElement("div")

        let name = document.createElement("h2")
        name.textContent = `${element.first_name} ${element.last_name} `

        let email = document.createElement("h2")
        email.textContent = element.email

        let photo = document.createElement("img")
        photo.setAttribute("src", element.avatar)
        div.append(name, email, photo)
        document.getElementById("main").append(div)
    });
}

document.getElementById("btn").addEventListener("click", function () {
    fetchData()
})