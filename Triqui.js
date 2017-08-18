window.onload = function() {
  var jugador1 = "X";
  var jugador2 = "O";
  var turno = turno + 1;
  var que_turno ;
  var cont = 0;
  var opcion = document.querySelectorAll("li.button");
  var c1 = document.querySelector("#c1");
  var c2 = document.querySelector("#c2");
  var c3 = document.querySelector("#c3");
  var c4 = document.querySelector("#c4");
  var c5 = document.querySelector("#c5");
  var c6 = document.querySelector("#c6");
  var c7 = document.querySelector("#c7");
  var c8 = document.querySelector("#c8");
  var c9 = document.querySelector("#c9");

  opcion.forEach(function(element,idx){
    element.addEventListener("click", function(event){
      console.log(element.innerText);
      cont = cont + 1;
      if (cont%2 === 1 ){
        if (element.innerText !== "O" && element.innerText !== "X") {
          element.innerText = "O";
        }else {
          cont -= 1;
          alert("Casilla Ocupada");
        }
      }else {
        if (element.innerText !=="O" && element.innerText!=="X"){
          element.innerText = "X";
        }else {
          cont -= 1;
          alert("Casilla Ocupada");
        }
      }
    });
  });

  function jugadorx(){
    //Horizontal
    if (c1 === jugador1 && c2 === jugador1 && c3 === jugador1) {
      alert("jugador es el ganador");
    }else if (c4 === jugador1 && c5 === jugador1 && c6 === jugador1) {
      alert("jugador es el ganador");
    }else if (c7 === jugador1 && c8 === jugador1 && c9 === jugador1) {
      alert("jugador es el ganador");
    }
  }
};
 
