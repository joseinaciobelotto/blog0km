const arrayTeste = ["Título Aaa","Título Bbb","Título Ccc" ,"Título Ddd","Título Eee","Título Fff","Título Ggg","Título Hhh","Título Iii","Título Jjj","Título Kkk","Título Lll","Título Mmm"];
const arrayTesteImagens = ["../images/Nova-Strada-Ultra-2024 (18).jpg","../images/lamborghini-aventador-s-roadster-2018-11.jpg","../images/lamborghini-aventador-s-roadster-2018-11.jpg",
"../images/Nova-Strada-Ultra-2024 (18).jpg","../images/Nova-Strada-Ultra-2024 (18).jpg","../images/lamborghini-aventador-s-roadster-2018-11.jpg","../images/lamborghini-aventador-s-roadster-2018-11.jpg",
"../images/Nova-Strada-Ultra-2024 (18).jpg","../images/Nova-Strada-Ultra-2024 (18).jpg","../images/lamborghini-aventador-s-roadster-2018-11.jpg","../images/lamborghini-aventador-s-roadster-2018-11.jpg",
"../images/Nova-Strada-Ultra-2024 (18).jpg","../images/Nova-Strada-Ultra-2024 (18).jpg","../images/lamborghini-aventador-s-roadster-2018-11.jpg","../images/lamborghini-aventador-s-roadster-2018-11.jpg",
"../images/Nova-Strada-Ultra-2024 (18).jpg"]


let containerPostsMain = document.querySelector(".mainPosts");
let containerPostsSolo = document.querySelector(".mainPostsSolo");





let auxDiv=0;

let numeorDePost= arrayTeste.length;

let positionArray
let rowPostsMain;


function mostrarPosts() 
{

    arrayTeste.forEach((element, i) => 
    {


        if (auxDiv == 0)
        {
        rowPostsMain = document.createElement("div") ;
        rowPostsMain.className = "row posts";
        rowPostsMain.style.justifyContent = "space-around";
        auxDiv=2;
        }
     
       
        let postsDiv = document.createElement("div");

        postsDiv.style.cursor = "pointer";
        
        if(auxDiv ==1)
        {
            postsDiv.className = "col-3 meio postsP";
        }else{
            postsDiv.className = "col-3 meio postsP";
        }
        let postsP = document.createElement("p");
        let postsPinfo = document.createElement("p");
        let postImgP = document.createElement("img");
        postsPinfo.innerHTML="Saber Mais"
        postsPinfo.style.fontSize= "120%";
        postsPinfo.style.textAlign= "center";
        postsPinfo.style.paddingTop= "1vw";
    postImgP.src=arrayTesteImagens[i];
    postImgP.style.width="100%";
    postImgP.style.borderRadius="10px";
    postsDiv.appendChild(postsP)

       postsDiv.appendChild(postImgP);
       postsDiv.appendChild(postsPinfo)

        postsP.innerHTML= element;
        postsP.style.fontSize= "120%";
        postsP.style.paddingBlock= "1vw";
        postsDiv.style.height = "auto";
        postsDiv.style.width = "400px";
        rowPostsMain.appendChild(postsDiv);

        containerPostsMain.appendChild(rowPostsMain);

        auxDiv--;

        postsDiv.addEventListener("click", (e)=>{
            
            window.location.href = "http://127.0.0.1:5500/postIndividual.html";

            positionArray = JSON.stringify(i);
   
            localStorage.setItem('indexPost',  positionArray);
        
        }
        );
    
    });

};


mostrarPosts();


