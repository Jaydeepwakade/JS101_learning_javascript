# ArtVista🖌️(JS-CRUD-pagination-Search)
### JS-VITE-WITH-MOCK-SERVER

Please do NOT use VSCode live-server. It will not work. Use the npm commands suggested to you here.

## Installation
```
npm install --engine-strict
```
## Start only the Backend server
```
npm run server
```
## Start only Frontend server
```
npm run start
```
## Start both BE & FE in a single command
```
npm run watch
```
# Important files
```
├── index.html
├── scripts
│   └── index.js
└── styles
    └── style.css
```
## Maximum Marks - 22

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces; for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Rubrics
```
✅ able to submit the app - 1 mark ( minimum score )

### fetching the initial data
---------------------------------------
✅ Shows the correct initial data - 3 marks 

### Add, delete, and update an art
-----------------------------------------
✅ Able to add new arts - 2 marks
✅ Check by adding a new art the pagination button should increase - 1 mark
✅ Able to delete art - 2 marks
✅ Able to edit all fields of the arts - 2 marks
✅ Able to edit the package - 1 mark

### Sorting and filtering
----------------------------
✅ Low-to-high Sorts as expected - 1 mark
✅ high-to-low Sorts as expected - 1 mark
✅ Filters as expected - 1 mark

### pagination functionality
------------------------------
✅ Low-to-high Sorts as expected with pagination - 1 mark
✅ high-to-low Sorts as expected with pagination - 1 mark
✅ Filters as expected with pagination - 1 mark
✅ Check for pagination functionality - 2 mark

### search functionality
---------------------------
✅ Able to search by title - 1 mark
✅ Able to search by artist - 1 mark

```
### You haven't been taught Cypress to run the test cases locally; you can see the passed/ failed test cases and test errors on CP itself.

## Some Rules to follow:-

- Before writing a single line of code, please read the problem statement very carefully.
- <span style=" color: red">Don't change the already given IDs or classes.</span>
- If you don't follow these rules, you might not get any marks even if you do everything correctly.

## Problem statements

- Use `fetch` for API requests 
- irrespective of `sorting`, `filtering`, and `searching` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

### <h1 style="color:#215dc8">index page</h1>

Your task is to build ***`ArtVista`*** app where different arts are available, and you have to perform all `CURD` operations here, able to create, update, Read, and Delete arts and also implement search functionality.

<h4 style="color:#215dc8">
Problem 1. List of arts on page load [3]
</h4>

On page `load`, a list of all `arts` should be shown in the  `div#data-list-wrapper`. 

Expected markup (Arts card list):
<!-- ![landingpage markup]() -->
<figure>
<img src="https://i.imgur.com/ztnGSVH.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>landingpage markup</b></figcaption>
</figure>

- The `div.card` is a card appended to the div with `div.card-list`.
- In the above markup you can see only 5 cards are present on the first page and each page limit is 5.
- irrespective of `sorting`, `filtering`, and `searching` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

Expected markup (example, single card div inside card-list div): 
<!-- ![artMarkUp]() -->

<figure>
<img src="https://i.imgur.com/Knq70mH.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Single arts card Markup</b></figcaption>
</figure>

- **Markup - elements, classes & IDs should be identical to the above screenshot.**

- The **card** with `div.card` and `data-id={id of div}` having child div as 
  1. The `div.card-img` in this image of the arts is present.
  2. The `div.card-body` in this 
      -  h5 tag with `h5.card-title` **with title of art**.
      - p tag with `p.card-artist` with the *artist* of the art
      - p tag with `p.card-year` with the *year* of the art
      - p tag with `p.card-paintbrushes` with the *paintbrushes* of a arts
      - p tag with `p.card-price` with the *price* of the art
      - p tag with `p.card-medium` with the *medium* of a arts
      - anchor tag with `a.card-link` with *`Edit`* text
        1.  class= card-link
        2.  href=#
        3.  data-id= id of the arts 
      - button with `button.card-button` with *`Delete`* text 
        1.  class= card-button
        2.  data-id= id of the arts

| Sr. | tag    | class                                                      | text/src                      |
| --- | ------ | ---------------------------------------------------------- | ----------------------------- |
| 1.  | div    | <span style="color:#215dc8">card-img</span>                | add `img` tag inside this div |
| 1.  | img    | -                                                          | image of the art              |
| 2.  | h5     | <span style="color:#215dc8">card-title</span>               | the `title` of the art         |
| 3.  | p      | <span style="color:#215dc8">card-artist</span>        | `artist` of art          |
| 4.  | p      | <span style="color:#215dc8">card-year</span> | `year` of art   |
| 5.  | p      | <span style="color:#215dc8">card-paintbrushes</span>     | `paintbrushes` of art       |
| 6.  | p      | <span style="color:#215dc8">card-price</span>         | `price` of art           |
| 7.  | p      | <span style="color:#215dc8">card-medium</span>          | `medium` of art            |
| 8.  | a      | <span style="color:#215dc8">card-link</span>               | `Edit` text                   |
|     |        | data-id= id of the art                                     |                               |
| 9.  | button | <span style="color:#215dc8">card-button</span>             | `Delete` text                 |
|     |        | data-id= id of the art                                     |                               |


- Here, *`data-id`* is used to catch the `id` of the arts. You can use a dataset.id refer to [working with dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset).

Expected UI (example card):
<!-- ![artUI]() -->
<figure>
<img src="https://i.imgur.com/wVBrfl0.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Single arts card UI</b></figcaption>
</figure>

Data mapping:
<!-- ![dataMarkUp]() -->
<figure>
<img src="https://i.imgur.com/mbcTcPt.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>dataMarkUp
</b></figcaption>
</figure>

- The data should be fetched from `${baseServerURL}/arts`
- The arts should be shown on page `load`

<h4 style="color:#215dc8">
Problem 2. Pagination [2]
</h4>

<figure>
<img src="https://i.imgur.com/6j7soZQ.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Pagination</b></figcaption>
</figure>

- The buttons for pagination should be appended inside the `div` with `id=pagination-wrapper"` which is already mentioned in the boilerplate
- add _limit = 5 i.e. on each page `5` arts should be there
- At the start, 4 buttons must be there (we have a total of 20 objects in the db.json file, and using limit=5 need to create 4 buttons)
- pagination should be dynamic as when we *add* a new art the pagination button should increase. `(i.e from 4 to 5)`
- **Hint** : 
    1. `?_page={pagenumber}&_limit=5`
    2. use `res.headers.get("X-Total-Count")` for finding totalCount no of pages
- Note:- name the class names and data-testid as mentioned in the image provided above(markup)

<h4 style="color:#215dc8">
Problem 3. Ability to add new Arts [2]
</h4>

<!-- ![add arts ] -->
<figure>
<img src="https://i.imgur.com/ElyMqzl.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Add new arts
</b></figcaption>
</figure>

- input fields and a `button#add-art` with text `Add Arts` are already creted in template.
- on click of `Add Arts` button make a 'POST' request at ```${baseServerURL}/arts```
- *make a 'GET' request after the post to get updated data at ```${baseServerURL}/arts```*
- **` the page must not reload the list must update`**  otherwise you will lose the marks.
- irrespective of `sorting`, `filtering`, and `searching` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`1`&_limit=5)**</span>

<!-- ![added arts UI]() -->

<figure>
<img src="https://i.imgur.com/ChJ7OgO.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>new arts UI
</b></figcaption>
</figure>

<h4 style="color:#215dc8">
Problem 4. Ability to delete an Art [2]
</h4>

- In each art, the card adds a button `Delete` with `button.card-button` On clicking this button particular arts must be removed from DOM as well as `db.json`.

- make a 'DELETE' request at ```${baseServerURL}/arts/{artId}```
- *make a 'GET' request after deleting to get updated data at ```${baseServerURL}/arts```*
- **` the page must not reload the list must update`**  otherwise you will lose the marks.

<h4 style="color:#215dc8">
Problem 5. Ability to update all the fields of art [2]
</h4>

- Able to populate the following input on edit link click.( *Hint* - use preventDefault() to prevent the default behaviour of `<a>` tag of redirecting)
- Add an event listener with ```click``` to anchor tag with class `.card-link` use preventDefault.
- The page should not reload on the click of the Edit link `.card-link`.

1. To update all fields 

- `#update-art-id`  should be populated with the `id` of the art
- `#update-art-title` should be populated with the `title` of the art
- `#update-art-image` should be populated with the `image` of the art
- `#update-art-artist` should be populated with the `artist` of the art
- `#update-art-year` should be populated with the `year` of the art
- `#update-art-paintbrushes` should be populated with the `paintbrushes` of the art
- `#update-art-price` should be populated with the `price` of the art
- `#update-art-medium` should be populated with the `medium` of the art

<figure>
<img src="https://i.imgur.com/CK2MjWR.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Update all fields</b></figcaption>
</figure>

- make a 'PATCH' request at ```${baseServerURL}/arts/${artId}``` to update *title, image, artist, year, paintbrushes, price, and medium*
- *make a 'GET' request after the patch to get updated data at ```${baseServerURL}/arts```*
- **` the page must not reload the list must update`**  otherwise you will lose the marks.

<h4 style="color:#215dc8">
Problem 6. Ability to update only the package [1]
</h4>

- Able to populate the following input on edit link click.( *Hint* - use preventDefault() to prevent the default behaviour of `<a>` tag of redirecting)

- `#update-package-art-id` should be populated with the `id` of the art
- `#update-package-art-package` should be populated with the `package` of the art

- Once the edit inputs are populated, if the user clicks the `#update-package-art` button. 
- the package of that particular art should update based on the value entered in the `#update-package-art-package`. 
- The package of the art in the list should update without any page *reloads*.

- **` the page must not reload the list must update`**  otherwise you will lose the marks.

- make a 'PATCH' request at ```${baseServerURL}/arts/${artId}```

- *make a 'GET' request after the patch to get updated data at ```${baseServerURL}/arts```*

<h4 style="color:#215dc8">
Problem 7. Sorting Arts Based on Price
</h4>

- Sorting for `Low to High` UI:
<!-- ![sort Low to high] -->
<figure>
<img src="https://i.imgur.com/FVW8GnI.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>sort Low to high</b></figcaption>
</figure>


With the click of the button `#sort-low-to-high`, the art list should be sorted in ascending order based on their *price*.

With the click of the button `#sort-high-to-low`, the art list should be sorted in descending order based on their *price*.

You may use any approach of your choice for sorting. You may sort the available data, or you may make a new fetch request to the server and update the list. In case you want to fetch data, please use the [JSON Server documentation](https://github.com/typicode/json-server).

- irrespective of `sorting`, `filtering`, and `searching` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

<h4 style="color:#215dc8">
Problem 8. Filtering Arts based on the artist [1]
</h4>
 You have to create two types of filters as

 1. ***Tempera on Canvas***
 2. ***Oil on Canvas***
- Filtering for `Tempera on Canvas` UI:
<!-- ![filter Tempera on Canvas] -->

<figure>
<img src="https://i.imgur.com/aQGIyre.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Filter for medium "Tempera on Canvas"</b></figcaption>
</figure>

When the button `#filter-Tempera-on-Canvas` is clicked, the art list is expected to be filtered. It should only show the arts whose `medium` is ***`Tempera on Canvas`***.

When the button `#filter-Oil-on-Canvas` is clicked, the art list is expected to be filtered. It should only show the arts whose `medium` is ***`Oil on Canvas`***.

You may use any approach of your choice for filtering. You may filter the available data, or you may make a new fetch request to the server and update the list. In case you want to fetch data, please refer to the [JSON Server documentation](https://github.com/typicode/json-server).


- <span style=" color: green">No need to complete functionality for simultaneously working of filter and sorting operations</span>

- irrespective of `sorting`, `filtering`, and `searching` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

<h4 style="color:#215dc8">
Problem 9. Search by title/artist
</h4>

- To implement search functionality on top there is a select tag with *options* to search by artist  

1. ***`title`***
<!-- ![search by title] -->

<figure>
<img src="https://i.imgur.com/vJszfdc.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Search by title and `Water Lilies` as search query</b></figcaption>
</figure>

 2. ***`artist`***

A select tag (`select#search-by-select`) with options as
  1. title
  2. The artist is already created

Every time you have to select an eighter option, next to it there is an input box (`input#search-by-input`) You have to enter the title/artist if it is included in the title/artist respectively show the art only after clicking a search button(`button#search-by-button`)

You may use any approach of your choice for search functionality. You may use the available data or you may make a new fetch request to the server (with params as ***`?${title/artist}_like=${title of art/artist of art}`***) and update the list. In case you want to fetch data, please refer to the [JSON Server documentation](https://github.com/typicode/json-server). 


***Note***:- Get the updated data from API after the POST, PATCH, or DELETE request is done.

<figure>
<img src="https://i.imgur.com/tgRPxaI.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Problem is tetsed on CP</b></figcaption>
</figure>

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- We also request you not just submit it last minute
- Try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.