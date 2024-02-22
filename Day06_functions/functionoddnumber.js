function Oddnumber(oddnum){
    return oddnum%2!==0;

  
 }
 console.log(Oddnumber(1));

 for(let i=0;i<=20;i++){
     if(Oddnumber(i)){
       console.log(i)
     }
 }
 