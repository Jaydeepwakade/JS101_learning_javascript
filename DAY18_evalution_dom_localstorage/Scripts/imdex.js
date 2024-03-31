
 let arr=[]
function storeDAta(){
     let  bookname = document.getElementById("name").value
     let  authorname= document.getElementById("author").value
     let  bookdescription = document.getElementById("description").value
     let   category = document.getElementById("category").value
     let date = document.getElementById("date").value
     let price = document.getElementById("price").value


     let obj={
        bookname:bookname,
        authorname:authorname,
        bookdescription:bookdescription,
        category:category,
        date:date,
        price:price
     }
   arr.push(obj)
   console.log(arr)
   localStorage.setItem("BookLIst",JSON.stringify(arr))
  
}
console.log(arr)

document.getElementById("submit").addEventListener("click",function(){
    storeDAta()
    let  bookname = document.getElementById("name").value=""
    let  authorname= document.getElementById("author").value=""
    let  bookdescription = document.getElementById("description").value=""
    let   category = document.getElementById("category").value=""
    let date = document.getElementById("date").value =""
    let price = document.getElementById("price").value=""

})