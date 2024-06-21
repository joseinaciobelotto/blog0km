angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-fake-blog.onrender.com/postagens').
      success(function(data) {
          $scope.publicacoes = data;
      }
  );
});

let card = document.querySelector(".card");  

card.addEventListener("click", (e)=>{
            
    
    let id = document.querySelector(".postIdA");
    console.log("22");
});

