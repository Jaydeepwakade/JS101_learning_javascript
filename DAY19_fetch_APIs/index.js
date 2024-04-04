
let value= document.getElementById("sorting")
value.addEventListener("change",function(){
    getdata()
})

let getdata = async()=>{
      try{
        const selectValue = document.getElementById("sorting").value;
        let rawdata;
        if(selectValue===""){
            rawdata = await fetch("https:dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries");
           
        }
        else{
            rawdata = await fetch(`https:dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=${selectValue}`)
        }
        let data = await rawdata.json()
        console.log(data.data)
        addData(data,selectValue)
      }
      catch(error){
      console.log(error)
      }
}
getdata()

let addData =(arr,sortoption)=>{
    document.getElementById("main").innerHTML=""
    
    arr.data.forEach(function(ele){       
         let div = document.createElement("div")
         if(sortoption==="asc"){
            div.style.backgroundColor="#BEF694"
         }
         else if(sortoption==="desc"){
            div.style.backgroundColor="#E6BCEA"
         }
        
          let country = document.createElement("h2")
          country.textContent= ` country :${ele.country}`
          
          let id = document.createElement("h3")
          id.textContent= ` ID: ${ele.id}`

          let rank = document.createElement("h3")
          rank.textContent= `Rank:${ele.Rank}`

          let population = document.createElement("h3")
          population.textContent=`Population: ${ele.population}`

          div.append(id,country,rank,population)
          document.getElementById("main").append(div)
    });


}