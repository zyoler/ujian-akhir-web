const loader = document.querySelector(".loader");
         window.onload = function(){
           setTimeout(function(){
             setTimeout(function(){
               loader.style.display = "none";
             }, 500);
           },1500);
         }

fetch('https://neophyte-proxy.herokuapp.com/https://wijuna.com/api/produk').then(function(res) {
     return res.json();
     document.loader = true;
}).then(function(res){
          for(i = 0; i < res['data']['data'].length; i++){
              document.querySelector('.sebelah .row') .innerHTML+=
              '<div class="col-lg-4 mt-2 produk'+ i +'">'+
                              '<div class="MyCard text-light p-2">'+
                                  '<img class="bg-dark" src="https://wijuna.com/' + res['data']['data'][i]['thumbnails'] + '" alt="Product">'+
                                  '<div class="MyCard-footer">'+
                                      '<span class="SpanTitle">'+ res['data']['data'][i]['name'] +'</span>'+
                                      '<br>'+
                                      '<span class="spanPrice"> Rp. '+ res['data']['data'][i]['harga'] +'</span>'+
                                  '</div>'+
                              '</div>' +
                          '</div>';
              document.querySelector('.produk' + i).addEventListener("click", myFunction);
          }
          document.loader = false;        
      })
      function myFunction()
          {
              console.log('Ok');
          }