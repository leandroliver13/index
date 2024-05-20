<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #lamp {
            cursor: pointer;
        }
    </style>
</head>
<body>
    <img id="lamp" src="images/lampada-off.jpg">

    <script>
        function ligarDesliga() {
            var imagem = document.getElementById('lamp').src;
            var imagemLigado = 'images/lampada-on.jpg';
            var imagemDesligado = 'images/lampada-off.jpg';

            if (imagem === imagemLigado) {
                document.getElementById('lamp').src = imagemDesligado;
            } else {
                document.getElementById('lamp').src = imagemLigado;
            }
        }

        document.getElementById("lamp").addEventListener("mouseover", ligarDesliga);
    </script>
</body>
</html>
