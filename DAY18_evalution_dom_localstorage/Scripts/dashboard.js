

let dataarr = JSON.parse(localStorage.getItem("BookLIst"));


function getItem(arr) {
  arr.forEach(function (ele, ind) {
    let arrlength = arr.length
    let count = document.getElementById("count")
    count.textContent = `Number of Books :-  ${arrlength}`
    console.log(count, arrlength)

    let tr = document.createElement("tr")
    let Name = document.createElement("td")
    Name.textContent = ele.bookname

    let authorname = document.createElement("td")
    authorname.textContent = ele.authorname

    let deescription = document.createElement('td')
    deescription.textContent = ele.bookdescription
    let date = document.createElement("td")
    date.textContent = ele.date

    let category = document.createElement("td")
    category.textContent = ele.category


    let buy = document.createElement("td")
    buy.style.background = 'green'
    let buybtn = document.createElement("button")
    buybtn.textContent = "Buy"
    buybtn.style.backgroundColor = "green"
    buybtn.addEventListener("click", function () {
      // Remove the row from the table
      tr.remove();

      // Remove the item from localStorage with key "BookList"
      let BookList = JSON.parse(localStorage.getItem("BookLIst")) || [];
      BookList = BookList.filter((_, index) => index !== ind);
      localStorage.setItem("BookLIst", JSON.stringify(BookList));


      dataarr.splice(ind, 1);


      document.querySelector("tbody").innerHTML = "";
      getItem(dataarr);

      // Add the item to localStorage with key "buy-list"
      let buyList = JSON.parse(localStorage.getItem("buy-list")) || [];
      buyList.push(ele); // Assuming ind is the index of the current item
      localStorage.setItem("buy-list", JSON.stringify(buyList));

    })


    buy.append(buybtn)

    let mark = document.createElement("td")
    let bookmark = document.createElement("button")
    bookmark.textContent = "Bookmark"
    mark.append(bookmark)
    bookmark.addEventListener("click", function () {
      // Remove the item from localStorage with key "BookList"
      tr.remove();

      // Remove the item from localStorage with key "BookList"
      let BookList = JSON.parse(localStorage.getItem("BookLIst")) || [];
      BookList = BookList.filter((_, index) => index !== ind);
      localStorage.setItem("BookLIst", JSON.stringify(BookList));


      dataarr.splice(ind, 1);


      document.querySelector("tbody").innerHTML = "";
      getItem(dataarr);

      // Add the item to localStorage with key "buy-list"
      let bookmarklist= JSON.parse(localStorage.getItem("Bookmark-list")) || [];
      bookmarklist.push(ele); // Assuming ind is the index of the current item
      localStorage.setItem("Bookmark-list", JSON.stringify(bookmarklist));
    })

    tr.append(Name, authorname, deescription, date, category, buy, mark)

    document.querySelector("tbody").append(tr)
  })
}

function filterBooksByCategory(category) {
  let filteredBooks = dataarr.filter(book => book.category === category);
  document.querySelector("tbody").innerHTML = ""; // Clear the table
  getItem(filteredBooks);
}

document.getElementById("categoryFilter").addEventListener("change", function () {
  let selectedCategory = this.value;
  if (selectedCategory === "all") {

    document.querySelector("tbody").innerHTML = ""
    getItem(dataarr);
  } else {

    filterBooksByCategory(selectedCategory);
  }
});



getItem(dataarr)

