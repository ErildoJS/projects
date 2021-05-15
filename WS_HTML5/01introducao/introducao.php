<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function teste(texto) {
            documment.getElementById("teste").innerHTML = 
            "<p>" + texto +"</p>"
        }

        window.onload = function() {
            if(Modernizr.localstorage) {
                teste("podemos armazenar offline")
            }
        }
    </script>
</head>
<body>
    <div id="teste"></div>
</body>
</html>