const arrayTeste = ["Aston Martin: Luxo e Performance em Cada Detalhe", "Bentley: O Pináculo do Conforto e Elegância", "BMW: Inovação e Dinamismo na Estrada", "Bugatti: Velocidade Extrema e Exclusividade", "Cadillac: Estilo e Sofisticação Americana", "Chevrolet: Confiabilidade e Versatilidade", "Dodge: Potência e Desempenho para Aventureiros", "Ferrari: A Emoção de Dirigir um Superesportivo", "Ford: Tradição e Modernidade em Movimento", "Honda: Tecnologia e Eficiência para o Dia a Dia", "Hyundai: Conforto e Segurança para sua Família", "Jaguar: Elegância e Potência Britânica", "Jeep: Aventuras Sem Limites com Robustez", "Lamborghini: O Poder da Exclusividade Italiana", "Land Rover: Sofisticação e Versatilidade Off-Road", "Lexus: Luxo e Inovação em Cada Modelo"];
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
    else
    {
        headerDiv.style.display="none";
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
            postsDiv.className = "col-5 meio postsP postDiv";
        }else{
            postsDiv.className = "col-5 meio postsP postDiv";
        }
        let postsP = document.createElement("p");
       
        let postImgP = document.createElement("img");
      
        postImgP.src=arrayTesteImagens[i];
        postImgP.style.height="auto";
        postImgP.style.overflow="hidden"
        postImgP.style.borderRadius="0px 0px 0px 0px";
    
        postImgP.style.width="100%";
        postImgP.style.backgroundPosition="center";
        postsDiv.appendChild(postImgP);
        postsDiv.appendChild(postsP)   
        
        postsP.innerHTML= element;

        postsP.style.fontFamily=" Bebas Neue, sans-serif";
        postsP.style.letterSpacing="1px";
        postsP.style.letterSpacing="1px";
        postsP.style.fontWeight="100"
        postsP.style.fontSize= "x-larger";
        postsP.style.paddingBlock= "0.1vw";
        postsP.style.paddingInline= "0.3vw";
        postsDiv.style.height = "";
      

        divDestaque.style.padding = "0px";

        postsP.style.backgroundColor="  black"
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


