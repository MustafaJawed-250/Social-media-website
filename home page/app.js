function persnolprofile(){
    window.location.href = "../persnol page/pp.html"
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




    function post() {
var isloggedin = JSON.parse(localStorage.getItem("isloggedin"))
var isloogedindetails = isloggedin[0]
    let createpost = document.createElement("div");

    let caption = document.querySelector("#caption");
    let imgurl = document.querySelector("#imgurl");

    createpost.setAttribute("class", "posts");

    createpost.innerHTML = `
 <div class="post">

        <div class="post-header">

            <img class="ppimg" src="dummy iamge.png">

            <div class="user-info">
                <h3>${isloogedindetails.username}</h3>
                <p>${isloogedindetails.email}</p>
            </div>

        </div>

        <p class="captions">${caption.value}</p>

        <img class="postsimg" src="${imgurl.value}">

    </div>
    `;
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