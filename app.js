var mail = document.getElementsByTagName("input")[1]
var fname = document.getElementsByTagName("input")[0]
var passkey = document.getElementsByTagName("input")[2]
var userdetail = userdetail = JSON.parse(localStorage.getItem("userdetail")) || [];


function signup(){
 
    if(fname.value === "" || mail.value === "" || passkey.value === ""){
        alert("Please fill all fields");
        return;
    }

    var check = userdetail.find(user => user.email === mail.value);

    if(check){
        alert("Email already exists");
        return;
    }
    var users = {
        id: Date.now(),
      fullname: fname.value,
      email: mail.value,
      password: passkey.value
    }
    
     let loggedinuser = []
 let isloggedin = {
    id: users.id,
    username: fname.value,
      email: mail.value,
       password: passkey.value
 }
 loggedinuser.push(isloggedin)
 localStorage.setItem("isloggedin" , JSON.stringify(loggedinuser))
    userdetail.push(users)
    localStorage.setItem("userdetail", JSON.stringify(userdetail))
    fname.value = ""
    mail.value = ""
    passkey.value = ""
    alert("thank you for creating your account")
     window.location.href = "./persnol page/pp.html"
}
