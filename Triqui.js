window.onload = function() {
  var jugador = "X";
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

  console.log("c5");

  function triqui(){
    alert ('triqui');
  }

  function cargarDocumento(){
    document.getElementById('c9').addEventListener('click',triqui);
  }

  window.addEventListener('load',cargarDocumento);

  console.log(triqui);


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
