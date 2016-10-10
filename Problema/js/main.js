window.addEventListener("load",function(){
  var boton = document.getElementById("boton");
  
  boton.addEventListener("click",function(){
    var input = document.getElementById("mensajes").value;
    var mensajeNuevo = document.createElement("div");
        mensajeNuevo.innerHTML = input;
    
    var contenedor = document.getElementById("chat");
    	contenedor.insertBefore(mensajeNuevo, contenedor.appendChild[0]);
        input.value = "";
    
    function agregaMensaje () {

        var div = document.createElement("div");
            div.innerText = texto;
        var mensajes = document.getElementById("contenedor");
            mensajes.inserBefore(div, mensajes.appendChild[0]);
    };
  });
  
  var fotoUno = document.getElementById("pink-1");
  
  fotoUno.addEventListener("click",function(){
    
  });
});

