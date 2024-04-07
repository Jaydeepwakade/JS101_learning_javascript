
let url = "https://jsonplaceholder.typicode.com/users"


let fetchdata = async (url1) => {

    try {
        let response = await fetch(`${url}${url1}`)
        let data = await response.json()
        console.log(data)
        pagination(data.length, 6)
        adddata(data)

    } catch (error) {
        console.log(error)
    }
}
fetchdata("/?_page=1&_limit=6")
let count = 1


let backgroundcolor = () => {

    let buttons = document.querySelectorAll("#btn button")

    buttons.forEach((button) => {
        if (parseInt(button.textContent) === count) {
            button.style.backgroundColor = "red"
        }
        else {
            button.style.backgroundColor = ""
        }

    })

}

let pagination = (total, limit) => {

    let totalcount = Math.ceil(total / limit)
    let btndiv = document.getElementById("btn")
    btn.innerHTML = ""
    for (let i = 1; i <= totalcount + 1; i++) {
        let btn = document.createElement("button")
        btn.innerText = i

        btn.addEventListener("click", function () {
            count = parseInt(this.textContent)
            backgroundcolor()
            let url2 = `/?_page=${this.textContent}&_limit=${limit}`
            fetchdata(url2)

        })
        btndiv.append(btn)

    }
    backgroundcolor()



}


let adddata = (arr) => {

    let datadiv = document.getElementById("card")
    datadiv.innerHTML = ""

    arr.forEach((ele) => {
        let card = document.createElement("div")

        let id = document.createElement("h2")
        id.textContent = ele.id


        let name = document.createElement("h2")
        name.textContent = ele.name

        let username = document.createElement("h2")
        username.textContent = ele.username


        let phone = document.createElement("h2")
        phone.textContent = ele.phone

        let web = document.createElement("h2")
        web.textContent = ele.website

        let { address: { street, city, suite, zipcode } } = ele
        let addres = document.createElement("h2")
        addres.textContent = street + " " + city + " " + suite + " " + zipcode

        card.append(id, name, username, phone, web, addres)
        datadiv.append(card)

    })

}



