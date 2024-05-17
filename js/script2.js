const arrayTesteHere = ["Título Aaa","Título Bbb","Título Ccc" ,"Título Ddd","Título Eee","Título Fff","Título Ggg","Título Hhh","Título Iii","Título Jjj","Título Kkk","Título Lll","Título Mmm"];
const arrayTesteImagens = ["./images/Nova-Strada-Ultra-2024 (18).jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg",
"./images/Nova-Strada-Ultra-2024 (18).jpg","./images/Nova-Strada-Ultra-2024 (18).jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg",
"./images/Nova-Strada-Ultra-2024 (18).jpg","./images/Nova-Strada-Ultra-2024 (18).jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg",
"./images/Nova-Strada-Ultra-2024 (18).jpg","./images/Nova-Strada-Ultra-2024 (18).jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg",
"./images/Nova-Strada-Ultra-2024 (18).jpg",]


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
    
    postsPinfo2.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue dui, finibus a condimentum nec, aliquam vitae metus. Integer iaculis nisl sed mollis malesuada. Aliquam nisl elit, suscipit ut congue vel, bibendum ac mi. Suspendisse vitae ultrices velit, eu auctor neque. Donec porttitor eu leo ut bibendum. Phasellus laoreet ligula sit amet sem viverra efficitur. Vivamus aliquet pretium mauris, eget elementum metus semper ac. Morbi consequat, augue vitae consectetur pharetra, ex arcu elementum neque, ut lacinia dolor lorem at ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus."
    postsPinfo2.style.fontSize= "120%";
    postsPinfo2.style.textAlign = "justify";
    postsPinfo2.style.paddingInline = "1vw";
    postsPinfo2.style.paddingBottom = "1vw";
postImgP2.src=arrayTesteImagens[auxArray];
postImgP2.style.width="100%";


postImgP2.style.paddingBlock="2vw";
postImgP2.style.paddingInline="2vw";
postImgP2.style.borderRadius="3vw";

   postsDiv2.appendChild(postImgP2);
   postsDiv2.appendChild(postsP2);
   postsDiv2.appendChild(postsPinfo2);

    postsP2.innerHTML= arrayTesteHere[auxArray];
    postsP2.style.fontSize= "160%";
    postsDiv2.style.height = "auto";
    postsDiv2.style.width = "100%";

    rowPostsMain2.style.marginInline = "2%"
    rowPostsMain2.appendChild(postsDiv2);
    containerPostsSoloHere.appendChild(rowPostsMain2);
    
}

mostrarUmCerto();


//