

let arrofData= JSON.parse(localStorage.getItem("buy-list"))
console.log(arrofData)

function adddata(arr) {
    arr.filter(ele => ele !== null).forEach(ele => {
        let tr = document.createElement("tr");
        let Name = document.createElement("td");
        Name.textContent = ele.bookname || ""; // Ensure bookname is defined or use an empty string
        let authorname = document.createElement("td");
        authorname.textContent = ele.authorname || ""; // Ensure authorname is defined or use an empty string
        let description = document.createElement('td');
        description.textContent = ele.bookdescription || ""; // Ensure bookdescription is defined or use an empty string
        let date = document.createElement("td");
        date.textContent = ele.date || ""; // Ensure date is defined or use an empty string
        let category = document.createElement("td");
        category.textContent = ele.category || ""; // Ensure category is defined or use an empty string

        tr.append(Name, authorname, description, date, category);
        document.querySelector("tbody").append(tr);
    });
}

adddata(arrofData)