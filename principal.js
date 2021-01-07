$(document).ready(function(){


    /*
      Para la creacion de una nota.
    */
    $("#crearNota").click(function() {
      $("#nota").show();
    });


    var areaTexto = $("#nota");
    $("#guardarNota").click(function() {
      var contenidoNota;
      var nuevaNota = [$("#tituloNota").val(), $("#etiqueta").val(), $("textarea").val()];

      if(nuevaNota[0] == null || nuevaNota[0].length == 0 || nuevaNota[2] == null || nuevaNota[2].length == 0){
        alert("Si quieres crear una nota debes darle un título y un contenido. ");
      }
      else{
        contenidoNota = {
          titulo : nuevaNota[0],
          contenido: nuevaNota[2],
          etiqueta: nuevaNota[1]
        };

        console.log(contenidoNota);

        areaTexto.hide();
        $("#tituloNota").val("");
        $("#etiqueta").val("");
        $("textarea").val("");
      }
    });

    /*
      Para la creacion de una nueva etiqueta
    */
    $("#crearEtiqueta").click(() => {
      var texto = document.createElement("p");
      var pedir = document.createElement("input");
      pedir.attr("id", "elemento");
      $("section").after();

      //el id de cada una de las etiquetas sera el nombre.
    });

    //para añadir atributos attr("href", "https://www.w3schools.com/jquery/");

    /*
    var txt3 = document.createElement("b");   // Create with DOM
    txt3.innerHTML = "jQuery!";
    $("img").after(txt1, txt2, txt3);
    */

});
