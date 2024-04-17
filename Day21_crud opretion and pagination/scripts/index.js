// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const artURL = `${baseServerURL}/arts`;
let mainSection = document.getElementById("data-list-wrapper");
let paginationWrapper = document.getElementById("pagination-wrapper");

// art
let artTitleInput = document.getElementById("art-title");
let artImageInput = document.getElementById("art-image");
let artartistInput = document.getElementById("art-artist");
let artYearInput = document.getElementById(
  "art-year"
);
let artPaintBrushesInput = document.getElementById("art-paintbrushes");
let artPriceInput = document.getElementById("art-price");
let artMediumInput = document.getElementById("art-medium");
let artCreateBtn = document.getElementById("add-art");

// Update art
let updateArtIdInput = document.getElementById("update-art-id");
let updateArtTitleInput = document.getElementById("update-art-title");
let updateArtImageInput = document.getElementById("update-art-image");
let updateArtartistInput = document.getElementById(
  "update-art-artist"
);
let updateArtYearInput = document.getElementById(
  "update-art-year"
);
let updateArtPaintBrushesInput = document.getElementById(
  "update-art-paintbrushes"
);
let updateArtPriceInput = document.getElementById("update-art-price");
let updateArtMediumInput = document.getElementById("update-art-medium");
let updateArtBtn = document.getElementById("update-art");

//Update price
let updatePackageArtId = document.getElementById("update-package-art-id");
let updatePackageArtPackage = document.getElementById(
  "update-package-art-package"
);
let updatePackageArtBtn = document.getElementById("update-package-art");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterTemperaOnCanvas = document.getElementById("filter-Tempera-on-Canvas");
let filterOilOnCanvas = document.getElementById("filter-Oil-on-Canvas");

//Search by title/colour

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Arts Data
let artsData = [];

let pageNumber = 1;


let showdata = async (url) => {

  try {

    let res = await fetch(url)
    let totalpage = res.headers.get("X-Total-count")
    let finallimit = 5
    let totallimit = Math.ceil(totalpage / finallimit)
    let data = await res.json()
    console.log(data)
    getData(data)
    pagination(url, totallimit)


  } catch (error) {
    console.error(error)
  }
}
showdata(`${artURL}?_page=1&_limit=5`)

let getData = (data) => {
  mainSection.innerHTML = "";

  data.forEach((art) => {
    createArtCard(art);
  });
  addEditLinkEventListener()
  addeventlistner(); // Add event listeners each time data is updated
};


let createArtCard = (ele) => {

  const card = document.createElement("div")
  card.classList.add("card")
  card.dataset.id = ele.id

  card.innerHTML = `
    <div class="card-img">
    <img src="${ele.image}" alt="${ele.title}">
</div>
<div class="card-body">
    <h5 class="card-title">${ele.title}</h5>
    <p class="card-artist">${ele.artist}</p>
    <p class="card-year"> year :${ele.year}</p>
    <p class="card-paintbrushes"> paintbrushes: ${ele.details?.paintbrushes || 'n/a'}</p>
    <p class="card-price">${ele.price}</p>
    <p class="card-medium">${ele.medium}</p>
    <a href="#" class="card-link" data-id="${ele.id}">Edit</a>
    <button class="card-button" data-id="${ele.id}">Delete</button>
</div>
    `;

  mainSection.appendChild(card);


}

let pagination = (url, limit) => {
  paginationWrapper.innerHTML = ""

  for (let i = 1; i <= limit; i++) {
    let btn = document.createElement("button")
    btn.textContent = i

    btn.addEventListener("click", () => {
    
      showdata(`${artURL}?_page=${i}&_limit=5`)
      pageNumber = i
    })
    paginationWrapper.append(btn)
   
  }
  let buttons = paginationWrapper.querySelectorAll("button")
  buttons.forEach((button,index)=>{
    let buttonpage = index+1
    if(buttonpage===pageNumber){
      button.style.backgroundColor="orange"
    }
    else{
      button.style.backgroundColor=""
    }
  })
  
}


let highlight = (currentpage)=>{

 
 

}

let addData = async () => {


  let payload = {
    title: artTitleInput.value,
    image: artImageInput.value,
    artist: artartistInput.value,
    year: artYearInput.value,
    details: { paintbrushes: artPaintBrushesInput.value },
    medium: artMediumInput.value,
    price: parseInt(artPriceInput.value)

  }

  try {

    let res = await fetch(artURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })


    showdata(`${artURL}?_page=${pageNumber}&_limit=5`);
    resetInputs(); // Reset form inputs


  } catch (error) {

  }

}
const resetInputs = () => {
  artTitleInput.value = '';
  artImageInput.value = '';
  artArtistInput.value = '';
  artYearInput.value = '';
  artPaintBrushesInput.value = '';
  artPriceInput.value = '';
  artMediumInput.value = '';
};



let deletebtn = async (artId, cardelement) => {


  try {

    let res = await fetch(`${artURL}/${artId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': "application/json"
      }


    })
    showdata(`${artURL}?_page=${pageNumber}&_limit=5`);
    cardelement.remove()




  } catch (error) {
    console.log(error)
  }

}

let addeventlistner = () => {
  let deletebtns = document.querySelectorAll(".card-button")

  deletebtns.forEach((button) => {

    button.addEventListener("click", (event) => {
      event.preventDefault()
      const artId = button.dataset.id;

      const cardelement = button.closest('.card')

      deletebtn(artId, cardelement)

    })

  })


}
artCreateBtn.addEventListener("click", () => addData());

function addEditLinkEventListener() {
  let editLinks = document.querySelectorAll(".card-link");

  editLinks.forEach((link) => {
    link.addEventListener("click", async (event) => {
      event.preventDefault();


      const artId = link.dataset.id;


      try {
        let response = await fetch(`${artURL}/${artId}`)

        let art = await response.json()

        updateArtIdInput.value = art.id;
        updateArtTitleInput.value = art.title;
        updateArtImageInput.value = art.image;
        updateArtartistInput.value = art.artist;
        updateArtYearInput.value = art.year;
        updateArtPaintBrushesInput.value = art.details?.paintbrushes || '';
        updateArtPriceInput.value = art.price;
        updateArtMediumInput.value = art.medium;
        updatePackageArtId.value = art.id
        updatePackageArtPackage.value = art.price
      }

      catch (error) {
        console.log(error)
      }


    });


  })
}



let updateData = async () => {
  let artid = updateArtIdInput.value;

  let payload = {
    title: updateArtTitleInput.value,
    image: updateArtImageInput.value,
    artist: updateArtartistInput.value,
    year: updateArtYearInput.value,
    details: { paintbrushes: updateArtPaintBrushesInput.value },
    medium: updateArtMediumInput.value,
    price: parseInt(updateArtPriceInput.value)

  }
  console.log(payload)
  try {

    let res = await fetch(`${artURL}/${artid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })

    showdata(`${artURL}?_page=${pageNumber}&_limit=5`);
    resetUpdateInputs()


  } catch (error) {
    console.log(error)

  }


}

const resetUpdateInputs = () => {
  updateArtIdInput.value = '';
  updateArtTitleInput.value = '';
  updateArtImageInput.value = '';
  updateArtartistInput.value = '';
  updateArtYearInput.value = '';
  updateArtPaintBrushesInput.value = '';
  updateArtPriceInput.value = '';
  updateArtMediumInput.value = '';
};
updateArtBtn.addEventListener("click", () => {

  updateData()
  console.log()

})


let updateprice = async () => {

  let artid = updatePackageArtId.value
  let updateprice = {
    price: updatePackageArtPackage.value
  }

  try {

    let response = await fetch(`${artURL}/${artid}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateprice)
    })

    showdata(`${artURL}?_page=${pageNumber}&_limit=5`);

  } catch (error) {

  }
}
updatePackageArtBtn.addEventListener("click", () => {
  updateprice()

})


let sortAtoz = async () => {

  try {

    let res = `${artURL}/?_sort=price&_order=asc&page=${pageNumber}&_limit=5`
    showdata(res)



  } catch (error) {
    console.log("nahi hora bhai kya kara hai tu")
  }

}

sortAtoZBtn.addEventListener("click", () => {
  sortAtoz()
})


let sortZtoA = async () => {

  try {
    let res = `${artURL}/?_sort=price&_order=desc&_page=${pageNumber}&_limit=5`
    showdata(res)

  } catch (error) {
    console.log('bhai tune kuch to galat kiya hai')
  }

}

sortZtoABtn.addEventListener("click", () => {
  sortZtoA()
})



let filter1 = async () => {
  try {

    let filter = `${artURL}?medium=Tempera on Canvas&_page=${pageNumber}&_limit=5`
    showdata(filter)

  } catch (error) {

  }

}

filterTemperaOnCanvas.addEventListener("click", () => {
  filter1()
})


let filter2 = () => {

  let filter = `${artURL}?medium=Oil on Canvas&_page=${pageNumber}&_limit=5`
  showdata(filter)

}

filterOilOnCanvas.addEventListener("click", () => {
  filter2()
})


let search = async () => {
  let searchby = searchBySelect.value
  let searchstring = searchByInput.value

  let searchurl;
  if (searchby === "title") {
    searchurl = `${artURL}?title_like=${encodeURIComponent(searchstring)}&_page=${pageNumber}&_limit=5`
  }
  else if (searchby === "artist") {
    searchurl = `${artURL}?artist_like=${encodeURIComponent(searchstring)}&_page=${pageNumber}&_limit=5`
  }

  try {
    let res = await fetch(searchurl)
    let data = await res.json()
    mainSection.innerHTML = ""
    if (data.length === 0) {

      let notfound = document.createElement("h1")
      notfound.textContent = `${searchstring} Not found`

      mainSection.append(notfound);

    }
    else {
      getData(data)
    }
  } catch (error) {
    console.log(error)
  }
}

searchByButton.addEventListener('click', () => {
  search()
})












