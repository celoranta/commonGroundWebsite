


/*! getEmPixels  | Author: Tyson Matanich (http://matanich.com), 2013 | License: MIT */
(function (document, documentElement) {
    // Enable strict mode
    "use strict";

    // Form the style on the fly to result in smaller minified file
    var important = "!important;";
    var style = "position:absolute" + important + "visibility:hidden" + important + "width:1em" + important + "font-size:1em" + important + "padding:0" + important;

    window.getEmPixels = function (element) {

        var extraBody;

        if (!element) {
            // Emulate the documentElement to get rem value (documentElement does not work in IE6-7)
            element = extraBody = document.createElement("body");
            extraBody.style.cssText = "font-size:1em" + important;
            documentElement.insertBefore(extraBody, document.body);
        }

        // Create and style a test element
        var testElement = document.createElement("i");
        testElement.style.cssText = style;
        element.appendChild(testElement);

        // Get the client width of the test element
        var value = testElement.clientWidth;

        if (extraBody) {
            // Remove the extra body element
            documentElement.removeChild(extraBody);
        }
        else {
            // Remove the test element
            element.removeChild(testElement);
        }

        // Return the em value in pixels
        return value;
    };
}(document, document.documentElement));

// const song = {
//     title: 'default',
//     //ISWC: 'default',
//     originalRecordings() {},
//     lyrics: 'default'

// }

// const arrangement = {
//     song: 'song',
//     arrangedByBand: 'default',
//     bandRecordings: [],
//     instrumentation: [],
//     performedDuration: [],
//     //leadVoxBy: [],
//     //backingVoxBy: [],
//     genreTags: [],
//     lyrics: 'default',
//     form: [],
//     chordChanges: [],
//     initialTempo: 'calcFromForm',
//     initialKey: 'calcFromForm',
//     tunings: 'default'
// }

const minimumSongQty = 5;
const songsHeader = "SONGS";
const songsBlurb = "Common Ground is not a genre band.  " +
    "If it moves your feet, Common Ground plays it. Wilson Pickett?  Luke Bryant?  Daft Punk?  " +
    "Taylor Swift?  No problem."

//Functions

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function checkSongGenre(song) {
    song.genre == 'motown';
}

Object.defineProperty(Array.prototype, 'flat', {
    value: function (depth = 1) {
        return this.reduce(function (flat, toFlatten) {
            return flat.concat((Array.isArray(toFlatten) && (depth - 1)) ? toFlatten.flat(depth - 1) : toFlatten);
        }, []);
    }
});

function constructGenreSongDiv(genre, songs) {
    var marqueeContainer = document.createElement('div');
    var minorMarquee = document.createElement('div');
    var genreHeader = document.createElement('h6');
    var songList = document.createElement('ul');
    var songListContainer = document.createElement('div');
    var topFader = document.createElement('div');
    var bottomFader = document.createElement('div');
    genreHeader.innerHTML = genre.italics();
    genreHeader.setAttribute('class', 'genre-header');
    marqueeContainer.setAttribute('class', 'genre-song-marquee')
    songListContainer.setAttribute('class', 'songlist-container');
    minorMarquee.setAttribute('class', 'minor-marquee');
    topFader.setAttribute('class', 'fader');
    bottomFader.setAttribute('class', 'bottom-fader');
    songList.setAttribute('class', 'slider-list');
    songList.className += " song-container slideContainer";
    if (Array.isArray(songs)) {
        var i = 0;
        for (i = 0; i <= 0; i++) {
            songs.forEach(function (song) {
                var songItem = document.createElement('li');
                songItem.setAttribute('class', 'slider-list-item');
                songItem.className += ' slideItem';
                songItem.innerHTML = song.title;
                songList.appendChild(songItem);
                songListContainer.appendChild(songList);
                songListContainer.appendChild(topFader);
                songListContainer.appendChild(bottomFader);
            });
        };
    };

    // var listHeight = songs.length;
    var listHeight = minimumSongQty + 3;
    console.log("List Height:" + listHeight);
    songListContainer.setAttribute('style', "height:" + (listHeight) + "em");
    minorMarquee.appendChild(genreHeader);
    minorMarquee.appendChild(songListContainer);
    return minorMarquee;
}

// polyfill --- Amimate Scrolling Lists
function animateSongList() {
    window.requestAnimationFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();
    var speed = 2500;
    (function songSlide() {
        var listItemHeight = $('.slideItem:first-child').outerHeight();
        $(".slideContainer").animate({ marginTop: -listItemHeight }, speed, 'linear', function () {
            $(this).css({ marginTop: 0 }).find("li:last").after($(this).find("li:first"));
        });
        requestAnimationFrame(songSlide);
    })();
};

function tsvJSON(tsv) {
    const lines = tsv.split('\n');
    const headers = lines.slice(0, 1)[0].split('\t');
    return lines.slice(1, lines.length).map(line => {
        const data = line.split('\t');
        return headers.reduce((obj, nextKey, index) => {
            obj[nextKey] = data[index];
            return obj;
        }, {});
    });
};

function mappingFunction(element) {
    var songObject = {
        title: element.name,
        genreTags: element.custom_gqGyg9
    };
    return songObject;
};

function createSongsDiv(songs) {
    document.getElementById('songs-header').innerHTML = songsHeader;
    document.getElementById('songs-blurb').innerHTML = songsBlurb.italics();
    var genreArrays = new Array;
    for (var o in songs) {
        genreArrays.push(songs[o].genreTags);
    };
    var genres = (genreArrays.flat([1]));
    var uniqueGenres = genres.filter(onlyUnique);
    var genresWithSongs = [];
    uniqueGenres.forEach(function (genre) {
        var songsInGenre = [];
        songs.forEach(function (song) {
            if (song.genreTags.includes(genre)) {
                songsInGenre.push(song);
            };
        });
        genresWithSongs.push({ genre: genre, songs: songsInGenre });
    });

    var marquees = document.getElementsByClassName("song-swimlane");
    console.log("Song swimlanes: " + marquees.length)
    var genreCount = genresWithSongs.length;
    var i = 0;
    var n = 0;
    for (i = 0; i < genreCount; i++) {
        const genreObject = genresWithSongs[i];
        const songCount = genreObject.songs.length;
        if (songCount >= minimumSongQty) {
            var marquee = marquees[n % 3];
            n++;
            var genreSongDiv = constructGenreSongDiv(genreObject.genre, genreObject.songs);
            marquee.appendChild(genreSongDiv);
        };
    };
    animateSongList();
};

//Body
fetch('/songsJSON')
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            response.json()
                .then(function (songsJSArray) {
                    const filteredArray = songsJSArray.filter(element => element.type == "song");
                    console.log("Filtered Array" + filteredArray); 
                    var songsResult = filteredArray.map(element => mappingFunction(element));
                    console.log("New Songs Object:" + JSON.stringify(songs));
                    console.log("Old Songs Object: " + JSON.stringify(oldSongs));
                    return songsResult;
                })
                .then(function (finalSongsResult) {
                    createSongsDiv(finalSongsResult)
                });
        })
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });

