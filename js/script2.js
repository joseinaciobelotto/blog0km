const arrayTesteHere = ["aaa","bbb","ccc" ,"ddd","eee","fff","ggg","hhh","iii","jjj","kkk","lll","mmm",];
const arrayTesteImagens = ["../images/Nova-Strada-Ultra-2024 (18).jpg","../images/lamborghini-aventador-s-roadster-2018-11.jpg","../images/lamborghini-aventador-s-roadster-2018-11.jpg",
"../images/Nova-Strada-Ultra-2024 (18).jpg","../images/Nova-Strada-Ultra-2024 (18).jpg","../images/lamborghini-aventador-s-roadster-2018-11.jpg","../images/lamborghini-aventador-s-roadster-2018-11.jpg",
"../images/Nova-Strada-Ultra-2024 (18).jpg","../images/Nova-Strada-Ultra-2024 (18).jpg","../images/lamborghini-aventador-s-roadster-2018-11.jpg","../images/lamborghini-aventador-s-roadster-2018-11.jpg",
"../images/Nova-Strada-Ultra-2024 (18).jpg","../images/Nova-Strada-Ultra-2024 (18).jpg","../images/lamborghini-aventador-s-roadster-2018-11.jpg","../images/lamborghini-aventador-s-roadster-2018-11.jpg",
"../images/Nova-Strada-Ultra-2024 (18).jpg"]


let containerPostsMainHere = document.querySelector(".mainPosts2");
let containerPostsSoloHere = document.querySelector(".mainPostsSolo2");



let auxArray = localStorage.getItem('indexPost');;

function mostrarUmCerto(){


    containerPostsMainHere.style.display = "none";
   
    containerPostsSoloHere.style.display = "flex";
    rowPostsMain2 = document.createElement("div") ;
    rowPostsMain2.className = "row posts";
    rowPostsMain2.style.justifyContent = "space-around";
  
    let postsDiv2 = document.createElement("div");
    postsDiv2.className = "col-9 postsP";
    let postsP2 = document.createElement("p");
    let postsPinfo2 = document.createElement("p");
    let postImgP2 = document.createElement("img");
    
    postsPinfo2.innerHTML="Saber Mais"
    postsPinfo2.style.paddingBottom ="5%"
postImgP2.src=arrayTesteImagens[auxArray];
postImgP2.style.width="100%";
postImgP2.style.borderRadius="10px";
postsDiv2.appendChild(postsP2)

   postsDiv2.appendChild(postImgP2);
   postsDiv2.appendChild(postsPinfo2)

    postsP2.innerHTML= arrayTesteHere[auxArray];
    postsDiv2.style.height = "auto";
    postsDiv2.style.width = "100%";
    rowPostsMain2.style.marginRight = "5%"
    rowPostsMain2.appendChild(postsDiv2);
    containerPostsSoloHere.appendChild(rowPostsMain2);
    containerPostsSoloHere.style.marginBottom = "15vw";
}

mostrarUmCerto();


//