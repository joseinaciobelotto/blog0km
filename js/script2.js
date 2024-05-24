const arrayTesteHere = ["XIAOMI SU7: O CARRO ELÉTRICO QUE SURPREENDEU O MERCADO!","Aston Martin: Luxo e Performance em Cada Detalhe", "Bentley: O Pináculo do Conforto e Elegância", "BMW: Inovação e Dinamismo na Estrada", "Bugatti: Velocidade Extrema e Exclusividade", "Cadillac: Estilo e Sofisticação Americana", "Chevrolet: Confiabilidade e Versatilidade em um Só Lugar", "Dodge: Potência e Desempenho para Aventureiros", "Ferrari: A Emoção de Dirigir um Superesportivo", "Ford: Tradição e Modernidade em Movimento", "Honda: Tecnologia e Eficiência para o Dia a Dia", "Hyundai: Conforto e Segurança para sua Família", "Jaguar: Elegância e Potência Britânica", "Jeep: Aventuras Sem Limites com Robustez", "Lamborghini: O Poder da Exclusividade Italiana", "Land Rover: Sofisticação e Versatilidade Off-Road", "Lexus: Luxo e Inovação em Cada Modelo"];
const arrayTesteImagens = ["./images/xiaomi-su7.jpg","./images/Nova-Strada-Ultra-2024.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg",
"./images/Nova-Strada-Ultra-2024.jpg","./images/Nova-Strada-Ultra-2024.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg",
"./images/Nova-Strada-Ultra-2024.jpg","./images/Nova-Strada-Ultra-2024.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg",
"./images/Nova-Strada-Ultra-2024.jpg","./images/Nova-Strada-Ultra-2024.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg","./images/lamborghini-aventador-s-roadster-2018-11.jpg",
"./images/Nova-Strada-Ultra-2024.jpg"]

let containerPostsMainHere = document.querySelector(".mainPosts2");
let containerPostsSoloHere = document.querySelector(".mainPostsSolo2");

let headerDiv = document.querySelector(".headerDiv");
let botaoSand = document.querySelector(".botaoSand");



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

let auxArray = localStorage.getItem('indexPost');

function mostrarUmCerto(){


    containerPostsMainHere.style.display = "none";
   
    containerPostsSoloHere.style.display = "flex";
    containerPostsSoloHere.style.backgroundColor="black";
    
    containerPostsSoloHere.style.paddingTop="45px";
 
    rowPostsMain2 = document.createElement("div") ;
    rowPostsMain2.className = "row posts2";
    rowPostsMain2.style.justifyContent = "space-around";
  
    let postsDiv2 = document.createElement("div");
    postsDiv2.className = "col-9 postsP2";
    let postsP2 = document.createElement("p");
    let postsPinfo2 = document.createElement("p");
    let postImgP2 = document.createElement("img");
    
    postsPinfo2.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue dui, finibus a condimentum nec, aliquam vitae metus. Integer iaculis nisl sed mollis malesuada. Aliquam nisl elit, suscipit ut congue vel, bibendum ac mi. Suspendisse vitae ultrices velit, eu auctor neque. Donec porttitor eu leo ut bibendum. Phasellus laoreet ligula sit amet sem viverra efficitur. Vivamus aliquet pretium mauris, eget elementum metus semper ac. Morbi consequat, augue vitae consectetur pharetra, ex arcu elementum neque, ut lacinia dolor lorem at ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus."
    postsPinfo2.style.fontSize= "140%";
    postsPinfo2.style.textAlign = "justify";
    postsPinfo2.style.paddingInline = "";
    postsPinfo2.style.paddingBottom = "6vw";
    postImgP2.src=arrayTesteImagens[auxArray];
    postImgP2.style.width="100%";

    postImgP2.style.paddingBottom="2vw";
    postImgP2.style.paddingInline="";
    postImgP2.style.borderRadius=" ";

    postsDiv2.appendChild(postImgP2);
    postsDiv2.appendChild(postsP2);
    postsDiv2.appendChild(postsPinfo2);

    postsP2.innerHTML= arrayTesteHere[auxArray];
    postsPinfo2.style.color="grey";
    postsP2.style.fontSize= "180%";
    postsDiv2.style.height = "auto";
    postsDiv2.style.width = "100%";

    rowPostsMain2.style.marginInline = "2%"
    rowPostsMain2.appendChild(postsDiv2);
    containerPostsSoloHere.appendChild(rowPostsMain2);
    
}

mostrarUmCerto();

//