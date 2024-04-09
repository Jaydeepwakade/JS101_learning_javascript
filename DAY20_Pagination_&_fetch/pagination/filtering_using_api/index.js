let value1 =""
  let sort1 = document.getElementById("select")

  sort1.addEventListener('change',function(){
      value1 =sort1.value
     console.log(value1)
     fetchdata(value1)
  })

  let sort2 = document.getElementById("sorting")
  sort2.addEventListener('change',function(){
    let value2 =sort2.value
    console.log(value2)
    fetchdata(value1,value2)
 })






let fetchdata = async(url1, order)=>{
     try {
        let url = "https://jsonplaceholder.typicode.com/users"

         if(url1){
            url+=`?_sort=${url1}&_order=${order}`
         }
            let response = await fetch(url)
            let data = await response.json()
            adddata(data)
            console.log(data)
     } catch (error) {
        
     }
}
fetchdata()


 let adddata= (dataarr)=>{
    let  maindiv = document.getElementById("data")
    maindiv.innerHTML=""
     
     dataarr.forEach((ele)=>{
         
        let card = document.createElement("div")
        
         let id = document.createElement("h2")
         id.textContent=ele.id

         let name = document.createElement("h2")
         name.textContent= ele.name

         let username = document.createElement("h2")
         username.textContent=ele.username

         let phone = document.createElement("h2")
         phone.textContent= ele.phone

       card.append(id,name,username,phone)
       maindiv.append(card)


     })

 }
