
function Artist(name, style, birthYear) {

    this.name = name || "Неизвестный художник";
    this.style = style || "Неизвестный стиль";
    this.birthYear = birthYear || 1950;
    
    this.info = function() {
        return this.name + " (" + this.style + ")";
    };

    this.paint = function() {
        var paintings = [
            "«Звездная ночь»",
            "«Мона Лиза»",
            "«Крик»",
            "«Подсолнухи»",
            "«Черный квадрат»",
            "«Девочка с персиками»",
            "«Утро в сосновом лесу»",
            "«Девятый вал»"
        ];
        var randomIndex = Math.floor(Math.random() * paintings.length);
        return "написал картину " + paintings[randomIndex];
    };
    
    this.yearsOld = function() {
        var currentYear = new Date().getFullYear();
        var age = currentYear - this.birthYear;
        return age + " лет";
    };
    
    this.fullDescription = function() {
        return this.info() + ", " + this.yearsOld() + ", " + this.paint();
    };
}


var artists = [
    new Artist("Илья Репин", "Реализм", 1844),
    new Artist("Казимир Малевич", "Супрематизм", 1879),
    new Artist("Винсент Ван Гог", "Постимпрессионизм", 1853),
    new Artist("Пабло Пикассо", "Кубизм", 1881),
    new Artist("Клод Моне", "Импрессионизм", 1840),
    new Artist("Иван Айвазовский", "Романтизм", 1817),
    new Artist("Василий Кандинский", "Абстракционизм", 1866)
];

function displayArtists() {
    var container = document.getElementById("artists-list");
    var html = "";
    
    for (var i = 0; i < artists.length; i++) {
        var artist = artists[i];
        html += '<div class="artist-card">';
        html += '<div class="artist-name">' + artist.name + '</div>';
        html += '<div class="artist-style">Стиль: ' + artist.style + '</div>';
        html += '<div class="artist-year">Родился: ' + artist.birthYear + ' г.</div>';
        html += '<div class="artist-age">Возраст: ' + artist.yearsOld() + '</div>';
        html += '<div class="artist-action">🎨 ' + artist.paint() + '</div>';
        html += '</div>';
    }
    
    container.innerHTML = html;
}

window.onload = function() {
    displayArtists();
    
    console.log("Создано художников: " + artists.length);
    for (var i = 0; i < artists.length; i++) {
        console.log(artists[i].fullDescription());
    }
};