<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">
    <meta name="author" content="Gökhan Karaca">
    <meta name="keywords" content="Javascript" , "HTML" , "CSS">
    <title>JAVASCRİPT</title>
</head>

<body>
    <h3>Meyve Bölümü</h3>
    <script type="text/javascript" lang="javascript">
        let meyveler = ["Elma", "Armut", "Portakal"] // Diziye eklenen her index değeri listeye dahil olacaktır.
        document.write(meyveler + "<br><br>");

        for (let i = 0; i < meyveler.length; ++i) {
            document.write("<li>" + meyveler[i] + "</li>");
        }

    </script>
</body>

</html>
