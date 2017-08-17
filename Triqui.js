window.onload = function() {
  var jugador = "X";
  var jugador2 = "O";
  var turno = turno + 1;
  var que_turno ;
  var cont = 0;
  var opcion = document.querySelectorAll("li.button");

opcion.forEach(function(element,idx){
      element.addEventListener("click", function(event){
        cont = cont + 1;
        if (cont%2 === 1){
          element.innerText = "O";
        }else if (cont%2 === 0){
          element.innerText = "X";
        }
      console.log("Number", event.target.innerText);
      });
  });
  function myFunction(){
    location.reload();
  }
};
