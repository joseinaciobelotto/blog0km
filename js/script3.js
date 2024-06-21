let id = document.getElementsByClassName(".postIdA");


angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http)
{
  $http.get('https://api-fake-blog.onrender.com/postagens').success(function(data)
   {
          $scope.publicacoes = data;
        
    }
  );
  

});

angular.module('blog2').controller('Rest', function ($scope, $http)
{

    var url = window.location.href;
var id = url.split('?')[1];
 id = url.split('=')[1];
    

  $http.get('https://api-fake-blog.onrender.com/postagem/'+id).success(function(dataSolo)
   {

          $scope.publicacoeSolo = dataSolo;
        
    }
  );
  

});


let card = document.querySelector(".card"); 


card.addEventListener("click", (e)=>{
    
console.log(id);

});

 

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


/*
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
    
    postsPinfo2.innerHTML="{{ publicacao.title }}";
    postsPinfo2.style.fontSize= "140%";
    postsPinfo2.style.textAlign = "justify";
    postsPinfo2.style.paddingInline = "";
    postsPinfo2.style.paddingBottom = "6vw";
    postImgP2.src= "{{ publicacao.title }}";
    postImgP2.style.width="100%";

    postImgP2.style.paddingBottom="2vw";
    postImgP2.style.paddingInline="";
    postImgP2.style.borderRadius=" ";

    postsDiv2.appendChild(postImgP2);
    postsDiv2.appendChild(postsP2);
    postsDiv2.appendChild(postsPinfo2);

    postsP2.innerHTML= "{{ publicacao.title }}";
    postsPinfo2.style.color="grey";
    postsP2.style.fontSize= "180%";
    postsDiv2.style.height = "auto";
    postsDiv2.style.width = "100%";

    rowPostsMain2.style.marginInline = "2%"
    rowPostsMain2.appendChild(postsDiv2);
    containerPostsSoloHere.appendChild(rowPostsMain2);
    
}

mostrarUmCerto();
*/  