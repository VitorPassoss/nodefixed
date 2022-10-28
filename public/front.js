async function apicomment(){
    var url = 'https://blog-appnode.herokuapp.com/api'
    await fetch(url)
    .then((response) => {
       return response.json()
    })
    .then((data) => {
       comentariosArray(data.comentarios)
    })
    .catch(function(error) {
      console.log(error);
    });
}
apicomment()
function comentariosArray(array){
  var divcoment = document.querySelectorAll('.comentarios');
  var divpost = document.querySelectorAll('#idpost');
  var ApiArrayRes = array;

  console.log(ApiArrayRes)

  ApiArrayRes.forEach(function(number){
    for(i = 0; i < divcoment.length; i++){
      if(number.idposts == Number(divpost[i].innerHTML)){
        divcoment[i].innerHTML += `
        <li><div><span class="usercoment"><img class="img-icon" src="https://cdn-icons-png.flaticon.com/512/149/149071.png"  alt=""> </span> ${number.nameC}</div>
        <div class="coment">${number.coment}</div>
        <div><img class="imgcoment" src="${number.imagemurl}" alt=""></li>
        ` 
      }else{
        divcoment[i].innerHTML = ``
      }
    }
})
   }
// Check for the File API support.
document.querySelector('#image_file').onchange = function(){
  var reader = new FileReader();
  reader.onloadend = function () {
    document.querySelector('url').value = reader.result;
  }
  reader.readAsDataURL(this.files[0]);
};


  




 






