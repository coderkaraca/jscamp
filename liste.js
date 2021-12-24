<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>JAVASCRİPT</title>
</head>

<body>
    <script type="text/javascript" lang="javascript">
        let krediler = ["Kamu Kredileri", "Konut Kredileri", "Tarım Kredileri"]
        document.write(krediler + "<br><br>");

        for(let i = 0; i<krediler.length; ++i){
            document.write("<li>" + krediler[i] + "</li>");
        }

    </script>
</body>

</html>
