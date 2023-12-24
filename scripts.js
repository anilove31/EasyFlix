function showFields() {
    var type = document.getElementById("type").value;
    var movieFields = document.getElementById("movieFields");
    var seriesFields = document.getElementById("seriesFields");

    if (type === "movie") {
        movieFields.style.display = "block";
        seriesFields.style.display = "none";
    } else {
        movieFields.style.display = "none";
        seriesFields.style.display = "block";
    }
}

function toggleReadme() {
    var readmeContent = document.getElementById("readmeContent");
    readmeContent.style.display = (readmeContent.style.display === "none" || readmeContent.style.display === "") ? "block" : "none";
}

function adjustValue(field, amount) {
    var inputField = document.getElementById(field);
    var value = parseInt(inputField.value, 10) || 0;
    value += amount;
    if (value < 1) {
        value = 1;
    }
    inputField.value = value;
}

function embedVideo() {
    var type = document.getElementById("type").value;
    var videoContainer = document.getElementById("videoContainer");

    var id, season, episode;

    if (type === "movie") {
        id = document.getElementById("movieId").value;
        videoContainer.innerHTML = `<iframe src="https://vidsrc.to/embed/movie/${id}" width="100%" height="400px" frameborder="0" allowfullscreen></iframe>`;
    } else {
        id = document.getElementById("seriesId").value;
        season = document.getElementById("season").value;
        episode = document.getElementById("episode").value;
        videoContainer.innerHTML = `<iframe src="https://vidsrc.to/embed/tv/${id}/${season}/${episode}" width="100%" height="400px" frameborder="0" allowfullscreen></iframe>`;
    }
}

