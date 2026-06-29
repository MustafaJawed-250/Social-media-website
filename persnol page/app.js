var isloggedin = JSON.parse(localStorage.getItem("isloggedin"))
var isloogedindetails = isloggedin[0]
let username = document.querySelector("#username")
username.textContent = isloogedindetails.username
let useremail = document.querySelector("#useremail")
useremail.textContent = isloogedindetails.email
let allposts = document.querySelector(".allposts");

let dexcription = document.querySelector("#description")
dexcription.textContent = isloogedindetails.description || "no description added"
console.log(isloggedin)
console.log(isloogedindetails)
console.log(username.textContent)

console.log(isloogedindetails.id)
var posts = JSON.parse(localStorage.getItem("userpostskey")) || [];


posts.forEach((item ,index) => {

    if (item.userid !== isloogedindetails.id) {
        return;
    }

    let createpost = document.createElement("div");

    createpost.className = "posts";

    createpost.innerHTML = `
<div class="post">

    <div class="post-header d-flex align-items-center justify-content-between flex-wrap">

        <div class="d-flex align-items-center">
            <img class="ppimg me-3" src="New folder/dummy iamge.png">

            <div class="user-info">
                <h3>${item.username}</h3>
                <p>${item.email}</p>
            </div>
        </div>

        <i class="fa-solid fa-trash delete-icon"></i>

    </div>

    <p class="captions mt-3">${item.title}</p>

    <img class="postsimg img-fluid" src="${item.imageurl}">

</div>
`;

 let deleteBtn = createpost.querySelector(".delete-icon");

  deleteBtn.addEventListener("click", function () {

    let isConfirm = confirm("Do you want to delete this post?");

    if (isConfirm) {

        createpost.remove();

        posts.splice(index, 1);

        localStorage.setItem("userpostskey", JSON.stringify(posts));

    } else {

        alert("Post was not deleted.");

    }

});
    allposts.appendChild(createpost);
})


function home(){
    window.location.href = "../home page/home.html"
}




    function post() {

    let createpost = document.createElement("div");

    let caption = document.querySelector("#caption");
    let imgurl = document.querySelector("#imgurl");

    createpost.setAttribute("class", "posts");

    createpost.innerHTML = `

<div class="post">

    <div class="post-header d-flex align-items-center justify-content-between flex-wrap">

        <div class="d-flex align-items-center">
            <img class="ppimg me-3" src="New folder/dummy iamge.png">

            <div class="user-info">
                <h3>${isloogedindetails.username}</h3>
                <p>${isloogedindetails.email}</p>
            </div>
        </div>

        <i class="fa-solid fa-trash delete-icon"></i>

    </div>

    <p class="captions mt-3">${caption.value}</p>

    <img class="postsimg img-fluid" src="${imgurl.value}">

</div>
`;
let deleteBtn = createpost.querySelector(".delete-icon");

deleteBtn.addEventListener("click", function () {

    let isConfirm = confirm("Do you want to delete this post?");

    if (isConfirm) {
        createpost.remove();

        posts.splice(index, 1);

        localStorage.setItem("userpostskey", JSON.stringify(posts));
    }

});
allposts.appendChild(createpost);

    let postobj = {
        postid: Date.now(),
        userid: isloogedindetails.id,
        title: caption.value,
        imageurl: imgurl.value,
        username: isloogedindetails.username,
    email: isloogedindetails.email,
    };

    console.log(caption.value)
    console.log(imgurl.value)

    posts.push(postobj);

    localStorage.setItem("userpostskey", JSON.stringify(posts));

    console.log(posts);

    caption.value = "";
    imgurl.value = "";
}


function logout(){
    localStorage.removeItem("isloggedin")
    window.location.href = "../Login page/login.html"
}
function editprofile(){
    let des = document.querySelector("#des")
    let un = document.querySelector("#un")
if(des.value == ""){
        username.textContent = un.value
           isloogedindetails.username = un.value
}else if(un.value == ""){
    dexcription.textContent = des.value
    isloogedindetails.description = des.value
}else if(des.value == "" && un.value == ""){
username.textContent = username.textContent
dexcription.textContent = dexcription.textContent
}else{
        username.textContent = un.value
    dexcription.textContent = des.value
    isloogedindetails.description = des.value
    isloogedindetails.username = un.value
    
}
localStorage.setItem("isloggedin", JSON.stringify(isloggedin));
    localStorage.setItem("userdetail", JSON.stringify(userdetail));
}


