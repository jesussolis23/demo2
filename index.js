$(document).ready(function(){
    var correo_electronico, password, campos;

    //iniciar sesion.
    $("#iniciar").click(function(){
      correo_electronico = $("#correo").val();
      password = $("#pswd").val();
      if(correo_electronico == null || correo_electronico.length == 0 || password == null || password.length == 0){
        alert("Los campos Correro electronico y\n contraseña son obligatorios para acceder. ");
      }
      else{
        campos = {correo: correo_electronico,
                  pswd: password};
        console.log(campos);
        window.localStorage.setItem("correo", correo_electronico);
        window.localStorage.setItem("password", password);
        limpiar();
      }
    });

    //para registrarse.
    $("#registrarse").click(function(){
      correo_electronico = $("#correo").val();
      password = $("#pswd").val();

      if(correo_electronico == null || correo_electronico.length == 0 || password == null || password.length == 0){
          alert("Ambos campos son necesarios. ");
      }
      else{
        campos = {correo: correo_electronico,
                  pswd: password};
        console.log(campos);
        window.localStorage.setItem("correo", correo_electronico);
        window.localStorage.setItem("password", password);
        limpiar();
      }
    });

    //recuperar contraseña.
    $("#ContrasenaOlvidada").click(() => {
      correo_electronico = $("#correo").val();
      if(correo_electronico == null || correo_electronico.length == 0){
        alert("Debes de introducir el correo para recuperar la contraseña. ");
      }else{
        console.log("El correo es valido. ");
      }
    });

    function limpiar(){
      $("#correo").val("");
      $("#pswd").val("");
    }
});
