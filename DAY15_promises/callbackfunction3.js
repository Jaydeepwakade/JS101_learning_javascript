

function getUserdata(id,cb){

    setTimeout(() => {
         let user={
            id:id,
            name:"jaydeep",
            email:"jaydeep@google.com"
         }
         cb(user)
    },2000);

}

function displayuser(user){
    console.log(user.id)
    console.log(user.name)
    console.log(user.email)
}
let userid =12
getUserdata(userid,displayuser)
