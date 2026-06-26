function persnolprofile(){
    window.location.href = "../home page/home.html"
}

function logout(){
    localStorage.removeItem("isloggedin")
    window.location.href = "../Login page/login.html"
}


let allposts = document.querySelector(".allposts")
let posts = JSON.parse(localStorage.getItem("userpostskey"))


posts.forEach((item) => {
    let createpost = document.createElement("div");
createpost.setAttribute("class", "posts");

    createpost.innerHTML = `
   <div class="post">

    <div class="post-header">

        <img class="ppimg" src="dummy iamge.png" alt="profile">

        <div class="user-info">
            <h3>${item.username}</h3>
            <p>${item.email}</p>
        </div>

    </div>

    <p class="captions">${item.title}</p>

    <img class="postsimg" src="${item.imageurl}" alt="Post Image">

</div>
`;

allposts.appendChild(createpost);
});