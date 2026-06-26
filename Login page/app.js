var firstname = document.getElementsByTagName("input")[0]
var mail = document.getElementsByTagName("input")[1]
var passkey = document.getElementsByTagName("input")[2]


var userdetail = JSON.parse(localStorage.getItem("userdetail")) || []



function login(){

    if(firstname.value === "" || mail.value === "" || passkey.value === ""){
        alert("Please fill all fields");
        return;
    }



    var user = userdetail.find((u)=>{

        return u.fullname == firstname.value &&
        u.email == mail.value &&
        u.password == passkey.value;

    })



    if(user){


        alert("you logged in successfully")


        let loggedinuser = []


        // signup wali same id yahan jayegi
        let isloggedin = {

            id: user.id,

            username: user.fullname,

            email: user.email,

            password: user.password

        }


        loggedinuser.push(isloggedin)


        localStorage.setItem(
            "isloggedin",
            JSON.stringify(loggedinuser)
        )



        window.location.href = "../persnol page/pp.html"



    }
    else{

        alert("your information didn't match any login id")

        window.location.href = "../signup page/index.html"

    }



}