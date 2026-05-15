<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $ad = htmlspecialchars($_POST['ad'] ?? '');
    $soyad = htmlspecialchars($_POST['soyad'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $konu = htmlspecialchars($_POST['konu'] ?? '');
    $mesaj = htmlspecialchars($_POST['mesaj'] ?? '');
    $sehir = htmlspecialchars($_POST['sehir'] ?? '');
    $sinif = htmlspecialchars($_POST['sinif'] ?? '');
    $cinsiyet = htmlspecialchars($_POST['cinsiyet'] ?? '');

    echo "<h2>Form Gönderildi ✔</h2>";

    echo "<ul>";
    echo "<li><b>Ad:</b> $ad</li>";
    echo "<li><b>Soyad:</b> $soyad</li>";
    echo "<li><b>Email:</b> $email</li>";
    echo "<li><b>Konu:</b> $konu</li>";
    echo "<li><b>Mesaj:</b> $mesaj</li>";
    echo "<li><b>Şehir:</b> $sehir</li>";
    echo "<li><b>Sınıf:</b> $sinif</li>";
    echo "<li><b>Cinsiyet:</b> $cinsiyet</li>";
    echo "</ul>";

} else {
    echo "Doğrudan erişim engellendi!";
}
?>