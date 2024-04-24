

function iphone1(ASIN,color,display,camera){

    let obj={}
    
    obj.ASIN=ASIN,
    obj.color=color,
    obj.display=display,
    obj.camera=camera,

    obj.dail= function(){
      return "tring tring"
    }
    obj.sendmesage= function(){
        return "sending message"
    }
    obj.cameraClick = function(){
        return "camera clicked"
    }

    return obj
}
let i1 =iphone1(1,"black","amoled",120)

console.log(i1.dail(),i1.cameraClick())

function iphone2(ASIN,color,display,camera,bluetooth){
   return{
    ASIN:ASIN,
    color:color,
    display:display,
    camera:camera,
    bluetooth:bluetooth,

    dail : function dail(){
        return "tring tring...."
    },

    sendmesage : function sendmesage(){
        return "send message"
    },
    cameraClick: function cameraClick(){
        return "camera click"
    },
    connectBluetooth: function(){
        return "Bluetooth connnected succesfully"
    }
   }
 
}
let i2 = iphone2(1,"red","amoled","camera",)
console.log(i2.display)
