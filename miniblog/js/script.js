const arrayTeste = ["TÍTULO AAA","TÍTULO BBB","TÍTULO CCC" ,"TÍTULO DDD","TÍTULO EEE","TÍTULO FFF","TÍTULO GGG","TÍTULO HHH","TÍTULO III","TÍTULO JJJ","TÍTULO KKK","TÍTULO LLL","TÍTULO MMM"];
const arrayTesteImagens = ["./images/Nova-Strada-Ultra-2024.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg",
"./images/Nova-Strada-Ultra-2024.jpg","./images/Nova-Strada-Ultra-2024.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg",
"./images/Nova-Strada-Ultra-2024.jpg","./images/Nova-Strada-Ultra-2024.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg",
"./images/Nova-Strada-Ultra-2024.jpg","./images/Nova-Strada-Ultra-2024.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg",
"./images/Nova-Strada-Ultra-2024.jpg"]


let containerPostsMain = document.querySelector(".mainPosts");
let containerPostsSolo = document.querySelector(".mainPostsSolo");
let divDestaque = document.querySelector(".divDestaque");



let indexmodified=0;
let auxDiv=1;

let numeorDePost= arrayTeste.length;

let positionArray
let rowPostsMain;


divDestaque.addEventListener("click", (e)=>{
            
    window.location.href = "postIndividual.html";

    positionArray = 0;

    localStorage.setItem('indexPost',  positionArray);
});



function mostrarPosts() 
{

    arrayTeste.forEach((element, i) => 
    {

        indexmodified=i+1;
        if (auxDiv == 1)
        {
        rowPostsMain = document.createElement("div") ;
        rowPostsMain.className = "row posts";
        rowPostsMain.style.justifyContent = "space-around";
        auxDiv=3;
        }
     
       
        let postsDiv = document.createElement("div");

        postsDiv.style.cursor = "pointer";
        
        if(auxDiv ==2)
        {
            postsDiv.className = "col-3 meio postsP";
        }else{
            postsDiv.className = "col-3 meio postsP";
        }
        let postsP = document.createElement("p");
       // let postsPinfo = document.createElement("p");
        let postImgP = document.createElement("div");
      /*  postsPinfo.innerHTML="Saber Mais"
        postsPinfo.style.fontSize= "120%";
        postsPinfo.style.textAlign= "center";
        postsPinfo.style.paddingTop= "1vw";*/
    postImgP.style.backgroundImage="url("+arrayTesteImagens[i]+")";
    postImgP.style.height="300px";
    postImgP.style.overflow="hidden"
    postImgP.style.borderRadius="0px 0px 0px 0px";
  //  postImgP.style.boxShadow="0px -30px 30px 0px rgba(255, 255, 255, 0.34)";
   // postImgP.style.mixBlendMode="diference";
    postImgP.style.backgroundSize="140%";
    postImgP.style.width="auto";
    postImgP.style.backgroundPosition="center";
 postsDiv.appendChild(postImgP);
    postsDiv.appendChild(postsP)

       
       //postsDiv.appendChild(postsPinfo)

        postsP.innerHTML= element;
        postsP.style.fontSize= "140%";
        postsP.style.paddingBlock= "1vw";
        postsDiv.style.height = "";
       // postsDiv.style.backgroundImage="url("+arrayTesteImagens[i]+")";
       // postsDiv.style.backgroundSize="1000%"
        postsDiv.style.width = "48%";
        rowPostsMain.appendChild(postsDiv);

        containerPostsMain.appendChild(rowPostsMain);

        auxDiv--;

        postsDiv.addEventListener("click", (e)=>{
            
            window.location.href = "postIndividual.html";

            positionArray = JSON.stringify(i+1);
   
            localStorage.setItem('indexPost',  positionArray);
        
        }
        );
    
    });

};


mostrarPosts();


