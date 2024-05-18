const arrayTeste = ["TÍTULO AAA","TÍTULO BBB","TÍTULO CCC" ,"TÍTULO DDD","TÍTULO EEE","TÍTULO FFF","TÍTULO GGG","TÍTULO HHH","TÍTULO III","TÍTULO JJJ","TÍTULO KKK","TÍTULO LLL","TÍTULO MMM"];
const arrayTesteImagens = ["./images/Nova-Strada-Ultra-2024.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg",
"./images/Nova-Strada-Ultra-2024.jpg","./images/Nova-Strada-Ultra-2024.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg",
"./images/Nova-Strada-Ultra-2024.jpg","./images/Nova-Strada-Ultra-2024.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg",
"./images/Nova-Strada-Ultra-2024.jpg","./images/Nova-Strada-Ultra-2024.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg",
"./images/Nova-Strada-Ultra-2024.jpg"]

let containerPostsMain = document.querySelector(".mainPosts");
let containerPostsSolo = document.querySelector(".mainPostsSolo");
let divDestaque = document.querySelector(".divDestaque");
let headerDiv = document.querySelector(".headerDiv");
let botaoSand = document.querySelector(".botaoSand");

let indexmodified=0;
let auxDiv=1;

let numeorDePost= arrayTeste.length;

let positionArray
let rowPostsMain;

let tamanhoTela = screen.width/100;

divDestaque.addEventListener("click", (e)=>{
            
    window.location.href = "postIndividual.html";

    positionArray = 0;

    localStorage.setItem('indexPost',  positionArray);
});

if(screen.width>991)
    {
        headerDiv.style.display="flex";
    }

botaoSand.addEventListener("click", (e)=>{
    if(headerDiv.style.display=="flex")
        {
            headerDiv.style.display="none";
        }
        else{
            headerDiv.style.display="flex";
        }
    
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
       
        let postImgP = document.createElement("div");
      
        postImgP.style.backgroundImage="url("+arrayTesteImagens[i]+")";
        postImgP.style.height="15vw";
        postImgP.style.overflow="hidden"
        postImgP.style.borderRadius="0px 0px 0px 0px";
        postImgP.style.backgroundSize="140%";
        postImgP.style.width="auto";
        postImgP.style.backgroundPosition="center";
        postsDiv.appendChild(postImgP);
        postsDiv.appendChild(postsP)   
        
        postsP.innerHTML= element;

        postsP.style.fontSize= "x-larger";
        postsP.style.paddingBlock= "1vw";
        postsDiv.style.height = "";
      
        postsDiv.style.width = "400px";
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


