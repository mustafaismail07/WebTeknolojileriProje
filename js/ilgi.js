const apiKey = "9b107273";

async function filmAra() {

    const filmAdi = document.getElementById("filmInput").value;

    const sonucDiv = document.getElementById("filmSonuc");

    const benzerDiv = document.getElementById("benzerFilmler");

    if (filmAdi === "") {

        sonucDiv.innerHTML = `
            <div class="alert alert-danger">
                Lütfen bir film adı giriniz.
            </div>
        `;

        benzerDiv.innerHTML = "";

        return;
    }

    const url = `https://www.omdbapi.com/?t=${filmAdi}&apikey=${apiKey}`;

    const response = await fetch(url);

    const data = await response.json();

    if (data.Response === "False") {

        sonucDiv.innerHTML = `
            <div class="alert alert-warning">
                Film bulunamadı.
            </div>
        `;

        benzerDiv.innerHTML = "";

        return;
    }

    sonucDiv.innerHTML = `

        <div class="card shadow border-0 film-card">

            <div class="row g-0">

                <div class="col-md-4">
                    <img src="${data.Poster}" class="img-fluid rounded-start w-100">
                </div>

                <div class="col-md-8">

                    <div class="card-body">

                        <h2 class="fw-bold">${data.Title}</h2>

                        <p><strong>Yıl:</strong> ${data.Year}</p>

                        <p><strong>Tür:</strong> ${data.Genre}</p>

                        <p><strong>IMDB Puanı:</strong> ${data.imdbRating}</p>

                        <p><strong>Oyuncular:</strong> ${data.Actors}</p>

                        <p><strong>Konu:</strong> ${data.Plot}</p>

                    </div>

                </div>

            </div>

        </div>
    `;

    const benzerUrl = `https://www.omdbapi.com/?s=${filmAdi}&apikey=${apiKey}`;

    const benzerResponse = await fetch(benzerUrl);

    const benzerData = await benzerResponse.json();

    if (benzerData.Search) {

        let kartlar = `
            <h2 class="mb-4">Benzer Filmler</h2>
            <div class="row">
        `;

        benzerData.Search.slice(0, 6).forEach(film => {

            kartlar += `
                <div class="col-md-4 mb-4">

                    <div class="card shadow-sm h-100 onerilen-film">

                        <img src="${film.Poster}" class="card-img-top">

                        <div class="card-body">
                            <h5>${film.Title}</h5>
                            <p>${film.Year}</p>
                        </div>

                    </div>

                </div>
            `;
        });

        kartlar += `</div>`;

        benzerDiv.innerHTML = kartlar;
    }
}

