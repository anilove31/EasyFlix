function showFields() {
    var type = document.getElementById("type").value;
    var movieFields = document.getElementById("movieFields");
    var seriesFields = document.getElementById("seriesFields");

    if (type === "movie") {
        movieFields.style.display = "block";
        seriesFields.style.display = "none";
    } else if (type === "series") {
        movieFields.style.display = "none";
        seriesFields.style.display = "block";
    }
}

function adjustValue(field, amount) {
    var inputField = document.getElementById(field);
    var value = parseInt(inputField.value, 10) || 0;
    value += amount;
    if (value < 1) {
        value = null;
    }
    inputField.value = value;
}

function extractIdFromLink(link) {
    var match = link.match(/tt\d+/);
    return match ? match[0] : null;
}

function embedVideo() {
    var type = document.getElementById("type").value;
    var videoContainer = document.getElementById("videoContainer");

    var id, season, episode;

    if (type === "movie") {
        var movieLink = document.getElementById("movieLink").value;
        id = extractIdFromLink(movieLink);
        if (!id) {
            alert("Invalid movie link. Please enter a valid IMDb link.");
            return;
        }
        videoContainer.innerHTML = `<iframe src="https://vidsrc.to/embed/movie/${id}" width="100%" height="400px" frameborder="0" allowfullscreen></iframe>`;
    } else {
        var seriesLink = document.getElementById("seriesLink").value;
        id = extractIdFromLink(seriesLink);
        if (!id) {
            alert("Invalid series link. Please enter a valid IMDb link.");
            return;
        }
        season = document.getElementById("season").value;
        episode = document.getElementById("episode").value;
        videoContainer.innerHTML = `<iframe src="https://vidsrc.to/embed/tv/${id}/${season}/${episode}" width="100%" height="400px" frameborder="0" allowfullscreen></iframe>`;
    }
}
