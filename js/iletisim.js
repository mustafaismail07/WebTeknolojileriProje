function kontrolEt() {



    let ad = document.getElementById("ad").value.trim();

    let soyad = document.getElementById("soyad").value.trim();

    let universite = document.getElementById("universite").value.trim();

    let sehir = document.getElementById("sehir").value.trim();

    let email = document.getElementById("email").value.trim();

    let konu = document.getElementById("konu").value;

    let mesaj = document.getElementById("mesaj").value.trim();

    let sinif = document.getElementById("sinif").value;



    let cinsiyet = document.querySelector('input[name="cinsiyet"]:checked');



    let sonuc = document.getElementById("sonuc");



    let hatalar = [];



    let textRegex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/;



    if (ad === "") hatalar.push("Ad boş bırakılamaz");

    else if (!textRegex.test(ad)) hatalar.push("Ad sadece harflerden oluşmalıdır");



    if (soyad === "") hatalar.push("Soyad boş bırakılamaz");

    else if (!textRegex.test(soyad)) hatalar.push("Soyad sadece harflerden oluşmalıdır");



    if (universite === "") hatalar.push("Üniversite boş bırakılamaz");

    else if (!textRegex.test(universite)) hatalar.push("Üniversite adı sadece harflerden oluşmalıdır");



    if (sehir === "") hatalar.push("Şehir boş bırakılamaz");

    else if (!textRegex.test(sehir)) hatalar.push("Şehir sadece harflerden oluşmalıdır");



    if (email === "") hatalar.push("E-posta boş bırakılamaz");

    else if (!email.includes("@")) hatalar.push("E-posta formatı hatalı");



    if (sinif === "") hatalar.push("Sınıf seçilmelidir");



    if (!cinsiyet) hatalar.push("Cinsiyet seçilmelidir");



    if (konu === "") hatalar.push("Konu seçilmelidir");



    if (mesaj === "") hatalar.push("Mesaj boş bırakılamaz");



    if (hatalar.length > 0) {



        let html = "<div class='alert alert-danger'><ul>";



        hatalar.forEach(h => {

            html += "<li>" + h + "</li>";

        });



        html += "</ul></div>";



        sonuc.innerHTML = html;

        return;

    }



    sonuc.innerHTML = `

        <div class="alert alert-success">

            <h5>Form Başarıyla Gönderildi ✔</h5>

            <p><b>Ad:</b> ${ad}</p>

            <p><b>Soyad:</b> ${soyad}</p>

            <p><b>Üniversite:</b> ${universite}</p>

            <p><b>Şehir:</b> ${sehir}</p>

            <p><b>Sınıf:</b> ${sinif}. Sınıf</p>

            <p><b>E-posta:</b> ${email}</p>

            <p><b>Cinsiyet:</b> ${cinsiyet.value}</p>

            <p><b>Konu:</b> ${konu}</p>

        </div>

    `;



    document.getElementById("iletisimForm").reset();

}



function harfDisiEngelle(inputId) {



    let input = document.getElementById(inputId);



    input.addEventListener("keydown", function (e) {



        let izinliTuslar = [

            "Backspace",

            "Delete",

            "Tab",

            "ArrowLeft",

            "ArrowRight",

            "Home",

            "End"

        ];



        if (izinliTuslar.includes(e.key)) {

            return;

        }



        let harfRegex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]$/;



        if (!harfRegex.test(e.key)) {

            e.preventDefault();

        }

    });

}

const app = Vue.createApp({

    data() {

        return {

            ad: "",

            soyad: "",

            universite: "",

            sehir: "",

            email: "",

            mesaj: "",

            sinif: "",

            cinsiyet: "",

            konu: "",

            hatalar: [],

            sonuc: ""

        }

    },

    methods: {

        async kontrolEt() {

            this.hatalar = [];

            this.sonuc = "";

            let textRegex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/;

            if (!this.ad) this.hatalar.push("Ad boş bırakılamaz");

            if (!this.soyad) this.hatalar.push("Soyad boş bırakılamaz");

            if (!this.universite) this.hatalar.push("Üniversite  boş bırakılamaz");

            if (!this.sinif) this.hatalar.push("Sınıf  boş bırakılamaz");

            if (!this.sehir) this.hatalar.push("Şehir  boş bırakılamaz");

            if (!this.email || !this.email.includes("@")) this.hatalar.push("Geçerli bir e-posta giriniz");

            if (!this.cinsiyet) this.hatalar.push("Cinsiyet seçilmelidir");

            if (!this.konu) this.hatalar.push("Konu seçilmelidir");

            if (!this.mesaj) this.hatalar.push("Mesaj boş bırakılamaz");



            if (this.hatalar.length === 0) {

                this.sonuc = "Gönderiliyor...";



                const formData = new FormData();

                formData.append('ad', this.ad);

                formData.append('soyad', this.soyad);

                formData.append('email', this.email);

                formData.append('konu', this.konu);

                formData.append('mesaj', this.mesaj);

                formData.append('sehir', this.sehir);

                formData.append('sinif', this.sinif);

                formData.append('universite', this.universite);

                formData.append('cinsiyet', this.cinsiyet);



                try {

                    const response = await fetch('iletisim.php', {

                        method: 'POST',

                        body: formData

                    });

                    const resData = await response.text();

                    this.sonuc = resData;

                } catch (error) {

                    this.sonuc = "Bağlantı hatası!";

                }

            }

        }

    }

});

app.mount("#app");

function harfDisiEngelle(inputId) {

    let input = document.getElementById(inputId);

    if (!input) return;

    input.addEventListener("keydown", function (e) {

        let izinliTuslar = ["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight", "Home", "End"];

        if (izinliTuslar.includes(e.key)) return;

        let harfRegex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]$/;

        if (!harfRegex.test(e.key)) e.preventDefault();

    });

}



harfDisiEngelle("ad");

harfDisiEngelle("soyad");

harfDisiEngelle("universite");

harfDisiEngelle("sehir");