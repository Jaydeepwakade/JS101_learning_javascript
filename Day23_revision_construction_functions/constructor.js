
function Iphone1(ASIN,color,display,camera,bluetooth){

    this.ASIN=ASIN;
    this.color=color;
    this.display=display;
    this.camera=camera;
    this.bluetooth=bluetooth;

    this.dail = function(){
        return "tring tring"
    }
    this.sendmessage = function(){
        return "sending message"
    }
    this.cameraClick= function (){
        return "Camera click"
    }
    this.connectbluetooth = function(){
        return "bluetooth connected succesfully"
    }
  
}

let a1={}
Iphone1.call(a1,1,"red","16.8",16)
console.log(a1.sendmessage())
