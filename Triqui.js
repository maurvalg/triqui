window.onload = function() {
  var jugador1 = "X";
  var jugador2 = "O";
  var cont = 0;
  var opcion = document.querySelectorAll("li.button");
  opcion.forEach(function(element,idx){
    element.addEventListener("click", function(event){
      console.log(element.innerText);
      cont = cont + 1;
      if (cont%2 === 1 ){//si residuo de dividir cont en 2 es igual a 1
        if (element.innerText === "") {
          element.innerText = "O";
          jugadorO();
        }else {
          alert("Casilla Ocupada por jugador dos");
          cont -= 1;
        }
      }else {
        if (element.innerText === ""){
          element.innerText = "X";
          jugadorX();
        }else {
          alert("Casilla Ocupada por jugador uno");
          cont -= 1;
        }
      }
    });
  });

  function jugadorX(){
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
      alert("Jugador 1 es el ganador");
    }else if (c4 === jugador1 && c5 === jugador1 && c6 === jugador1) {
      alert("Jugador 1 es el ganador");
    }else if (c7 === jugador1 && c8 === jugador1 && c9 === jugador1) {
      alert("Jugador 1 es el ganador");

      //Vertical

    }else if (c1 === jugador1 && c4 === jugador1 && c7 === jugador1) {
      alert("Jugador 1 es el ganador");
    }else if (c2 === jugador1 && c5 === jugador1 && c8 === jugador1) {
      alert('Jugador 1 es el ganador');
    }else if (c3 === jugador1 && c6 === jugador1 && c9 === jugador1) {
      alert('Jugador 1 es el ganado');

      //Diagonal

    }else if (c1 === jugador1 && c5 === jugador1 && c9 === jugador1) {
      alert('Jugador 1 es el ganado');
    }else if (c3 === jugador1 && c5 === jugador1 && c7 === jugador1) {
      alert('Jugador 1 es el ganado');
    }
  }

  function jugadorO(){
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

    if (c1 === jugador2 && c2 === jugador2 && c3 === jugador2) {
      alert("Jugador 2 es el ganador");
    }else if (c4 === jugador2 && c5 === jugador2 && c6 === jugador2) {
      alert("Jugador 2 es el ganador");
    }else if (c7 === jugador2 && c8 === jugador2 && c9 === jugador2) {
      alert("Jugador 2 es el ganador");

      //Vertical

    }else if (c1 === jugador2 && c4 === jugador2 && c7 === jugador2) {
      alert("Jugador 2 es el ganador");
    }else if (c2 === jugador2 && c5 === jugador2 && c8 === jugador2) {
      alert("Jugador 2 es el ganador");
    }else if (c3 === jugador2 && c6 === jugador2 && c9 === jugador2) {
      alert("Jugador 2 es el ganador");

      //Diagonal

    }else if (c1 === jugador2 && c5 === jugador2 && c9 === jugador2) {
      alert("Jugador 2 es el ganador");
    }else if (c3 === jugador2 && c5 === jugador2 && c7 === jugador2) {
      alert("Jugador 2 es el ganador");
    }
  }

  var button_reset = document.getElementById("NuevoJuego");
  button_reset.addEventListener('click',function(){
    //1. Definir un for que recorra los li botones
    //2. Por cada li botton, propiedad innerText le asignamos ""
    console.log("reset");
  });
};
