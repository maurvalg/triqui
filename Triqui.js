window.onload = function() {
  var jugador1 = "X";
  var jugador2 = "O";
  var turno = turno + 1;
  var que_turno ;
  var cont = 0;
  var opcion = document.querySelectorAll("li.button");


  opcion.forEach(function(element,idx){
    element.addEventListener("click", function(event){
      console.log(element.innerText);
      cont = cont + 1;
      if (cont%2 === 1 ){
        if (element.innerText === "") {
          element.innerText = "O";
        }else {
          alert("Casilla Ocupada por jugador dos");
          cont -= 1;
        }
      }else {
        if (element.innerText ===""){
          element.innerText = "X";
          jugadorx();
        }else {
          alert("Casilla Ocupada por jugador uno");
          cont -= 1;
        }
      }
    });
  });

  function jugadorx(){
    var c1 = document.querySelector("#c1").innerText;
    var c2 = document.querySelector("#c2").innerText;
    var c3 = document.querySelector("#c3").innerText;
    var c4 = document.querySelector("#c4").innerText;
    var c5 = document.querySelector("#c5").innerText;
    var c6 = document.querySelector("#c6").innerText;
    var c7 = document.querySelector("#c7").innerText;
    var c8 = document.querySelector("#c8").innerText;
    var c9 = document.querySelector("#c9").innerText;

    //Horizontal
    if (c1 === jugador1 && c2 === jugador1 && c3 === jugador1) {
      console.log("jugador1 es el ganador");
    }else if (c4 === jugador1 && c5 === jugador1 && c6 === jugador1) {
      alert("jugador1 es el ganador");
    }else if (c7 === jugador1 && c8 === jugador1 && c9 === jugador1) {
      alert("jugador1 es el ganador");
    }
    //
  }
};
