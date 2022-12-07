function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
function login()
{
var u =  document.getElementById("usuario").value;
var c =  document.getElementById("myInput").value;
i=1;
usr="juan";
cl="12345";
      if (u == usr && c==cl )
       {
            alert("BIENVENIDO AL SISTEMA DE LA EMPRESA PROYECTOS")
            window.location="https://agomez1996.github.io/paginaFinal/"
            i=4;
       }
       else {
            alert('contraseña y usuario incorrecto')
       }
}