<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = $_POST["email"] ?? "";
    $password = $_POST["password"] ?? "";

    $dogru_email = "b251210016@sakarya.edu.tr";
    $dogru_sifre = "b251210016";

    if ($email == "" || $password == "") {

        echo "<h2>Hata: Alanlar boş bırakılamaz!</h2>";
        echo "<a href='login.html'>Geri dön</a>";

    } elseif ($email == $dogru_email && $password == $dogru_sifre) {

        echo "<h1>Hoşgeldiniz b251210016!</h1>";
        echo "<p>Giriş başarılı.</p>";

    } else {

        echo "<h2>Hatalı giriş!</h2>";
        echo "<a href='login.html'>Tekrar dene</a>";
    }

} else {
    header("Location: login.html");
    exit();
}

?>