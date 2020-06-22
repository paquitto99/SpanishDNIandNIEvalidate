<script type="text/javascript">

      var i = 0;
      $(document).ready(function(){
        $("input# {INPUT-DNI} ").on("keyup",function(){ // replace {INPUT-DNI} by input-text on html-page...

           var valor = $(this).val();
           i = valor.length;
           if (i > 9)
           {
             alert('El documento de identidad introducido es demasiado largo. Asegurate de introducirlo correctamente.');
             $("# {INPUT-DNI} ").val(''); // replace {INPUT-DNI} by input-text on html-page...
           }

           if (i == 9)
           {
            var dni = valor.toUpperCase();
            var letra = dni.substr(-1, 1);
            var numero = dni.substr(0, 8);

            // Si es un NIE hay que cambiar la primera letra por 0, 1 ó 2 dependiendo de si es X, Y o Z.
            numero = numero.replace('X','0');
            numero = numero.replace('Y','1');
            numero = numero.replace('Z','2');

            var modulo = numero % 23;
            var letras_validas = "TRWAGMYFPDXBNJZSQVHLCKE";
            var letra_correcta = letras_validas.substr(modulo, 1);

            if (!(letra == letra_correcta))
            {
              alert ('el documento introducido no es VALIDO');
              $("# {INPUT-DNI} ").val('');  // replace {INPUT-DNI} by input-text on html-page...
            }
           }

        });
      });

</script>
