const url = 'https://jsonplaceholder.typicode.com/todos';

let currentPage = 1;

let getdata = async (url1) => {
    try {
        let res = await fetch(`${url}${url1}`);
        let total = res.headers.get('X-Total-Count');
        pagination(total, 6);
        console.log(total);
        let data = await res.json();
        console.log(data);
        addData(data);
    } catch (error) {
        console.log(error);
    }
};

getdata('?_page=1&_limit=6');

let updateButtonColor = () => {
  let buttons = document.querySelectorAll('#page button');
  buttons.forEach((button) => {
      if (parseInt(button.textContent)=== currentPage) {
          button.style.backgroundColor = 'lightgreen'; // Set background color for current page button
      } else {
          button.style.backgroundColor = ''; // Reset background color for other buttons
      }
  });
};




let pagination = (total, limit) => {
    let totalpage = Math.ceil(total / limit);
    let pagescontainer = document.getElementById('page');
    pagescontainer.innerHTML = '';

    for (let i = 1; i <= totalpage; i++) {
        let btn = document.createElement('button');
        btn.textContent = i;
        btn.addEventListener('click', function () {
            currentPage = parseInt(this.textContent); 
            updateButtonColor();// Update currentPage when a button is clicked
            let url1 = `?_page=${this.textContent}&_limit=${limit}`;
            getdata(url1);
           
        });
        pagescontainer.appendChild(btn);
    }
    updateButtonColor()
};

let addData = (data) => {
    let dataContainer = document.getElementById('data');
    dataContainer.innerHTML = '';

    data.forEach((ele) => {
        let card = document.createElement('div');

        let userid = document.createElement('h3');
        userid.textContent = ele.userId;
        let id = document.createElement('h3');
        id.textContent = ele.id;
        let title = document.createElement('h3');
        title.textContent = ele.title;
        let status = document.createElement('h3');
        status.textContent = ele.completed;

        card.append(userid, id, title, status);
        dataContainer.appendChild(card);
    });
};
