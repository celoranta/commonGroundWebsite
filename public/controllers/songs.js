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

// function Song(songTitle, genres) {
//     this.songTitle = title;
//     this.genres = genreTags;
// }
//Data


var songs = [
{title: 'Springsteen' , genreTags: ['country']},
{title: 'Mustang Sally' , genreTags: ['motown']},
{title: 'Cake by the Ocean',  genreTags: ['dance pop']},
{title: 'Locked out of Heaven',  genreTags : ['motown', 'dance pop']},
{title: 'Tell me Baby',  genreTags : [ 'funk rock', 'alternative']},
{title: 'Pump it Up',  genreTags : [ 'new wave']},
{title: 'Summer of 69',  genreTags : [   'anthems', 'heartland rock']},
{title: 'Listen to the Music',  genreTags : ['roots rock']},
{title: 'I Wish',  genreTags: ['soul', 'motown']},
{title: 'Learn to Fly', genreTags: [ 'alternative']},
{title: 'Cold Shot', genreTags: ['blues' ]},
{title: 'Fast as You', genreTags: ['country']},
{title: 'Blue On Black', genreTags: ['blues rock' ]},
{title: 'Pride and Joy', genreTags: ['blues' ]},
{title: 'Tightrope', genreTags: ['blues']},
{title: 'Dani California', genreTags: [ 'funk rock', 'alternative']},
{title: 'The Weight', genreTags: ['roots rock']},
{title: 'One Headlight', genreTags: ['alternative', '90\'s']},
{title: 'Superstition', genreTags: ['soul', 'motown']},
{title: 'Let Me Stand Next to Your Fire' , genreTags: ['roots rock']},
{title: 'Brown Eyed Girl', genreTags: [ 'oldies']},
{title: 'Ocean Pearl', genreTags: [ 'canadiana', 'alternative']},
{title: 'New Orleans is Sinking', genreTags: ['canadiana']},
{title: 'Poets', genreTags: [   'canadiana', 'alternative']},
{title: 'Get Ready', genreTags: ['soul', 'oldies']},
{title: 'Mary Jane\'s Last Dance', genreTags: ['heartland rock']},
{title: 'Drink in my Hand', genreTags: ['country']},
{title: 'Pink Cadillac', genreTags: [  'heartland rock']},
{title: 'Little Bones', genreTags: ['canadiana']},
{title: 'Hard to Handle', genreTags: ['southern rock', 'jam band', 'blues rock']},
{title: 'Lonely Boy', genreTags: ['garage rock', 'indie rock']},
{title: 'Gold on the Ceiling', genreTags: ['garage rock', 'indie rock']},
{title: 'Long Train Runnin\'', genreTags: ['roots rock']},
{title: 'Miss You', genreTags: ['disco rock']},
{title: 'All Summer Long', genreTags: ['southern rock']},
{title: 'My Kind of Night', genreTags: ['country']}
]

const minimumSongQty = 4;
const songsHeader = "SONGS";
const songsBlurb = "Common Ground is not a genre band.  " +
"If it moves your feet, we play it. Wilson Pickett?  Luke Bryant?  Daft Punk?  " +
"Taylor Swift?  No problem."

//Functions
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function checkSongGenre(song) {
  song.genre == 'motown';
}

Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth-1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});

function constructGenreSongDiv(genre, songs) {
    var marqueeContainer = document.createElement('div');
    var minorMarquee = document.createElement('div');
    var genreHeader = document.createElement('h6');
    var songList = document.createElement('ul');
    var songListContainer = document.createElement('div');

    genreHeader.innerHTML = genre.italics();
    genreHeader.setAttribute('class', 'genre-header');
    marqueeContainer.setAttribute('class', 'genre-song-marquee')
    songListContainer.setAttribute('class', 'songlist-container');

    songList.className+="song-container slideContainer";
    if (Array.isArray(songs)){
        var i = 0;
        for (i=0; i <= 0; i++){
    songs.forEach(function(song){
        var songItem = document.createElement('li');
        songItem.setAttribute('class', 'slideItem')
        songItem.innerHTML = song.title;
        songList.appendChild(songItem);
        songListContainer.appendChild(songList);
        // songList.innerHTML+=song.title + "<br>";
    });
    };
    };
    //songList.appendChild(songList);
    minorMarquee.appendChild(genreHeader);
    minorMarquee.appendChild(songListContainer);
    
    return minorMarquee;
}

{/* <ul class="slideContainer" >
<li class="slideItem" >
        The Rolling Stones - Miss You
</li>
<li class="slideItem">
        Elvis Costello - Pump it Up
</li>
<li class="slideItem">
        Bryan Adams - Summer of '69'
</li>
<li class="slideItem">
        Neil Young - Rockin' in the Free World
</li>
</ul> */}

//Body
document.getElementById('songs-header').innerHTML = songsHeader;
document.getElementById('songs-blurb').innerHTML = songsBlurb.italics();

var genreArrays = new Array;
for(var o in songs) {
    genreArrays.push(songs[o].genreTags);
};
var genres = (genreArrays.flat([1])); 
var uniqueGenres = genres.filter( onlyUnique );

var genresWithSongs = [];
uniqueGenres.forEach(function(genre){
    var songsInGenre = [];
    songs.forEach(function(song){
        if (song.genreTags.includes(genre)) {
            songsInGenre.push(song);
            //console.log(song);
        };
    });
    genresWithSongs.push({genre : genre , songs :  songsInGenre});
});

var marquees = document.getElementsByClassName("song-swimlane");
//var marquee = marquees[0];
var genreCount = genresWithSongs.length;
var i=0;
var n=0;
for(i=0; i < genreCount; i++){
    const genreObject = genresWithSongs[i];
    const songCount = genreObject.songs.length;
    if (songCount >= minimumSongQty) {
        var marquee = marquees[n%3]
        n++;
       var genreSongDiv = constructGenreSongDiv(genreObject.genre, genreObject.songs);
        //genreSongDiv
        marquee.appendChild(genreSongDiv);
    };
};

// polyfill --- Amimate Scrolling Lists
window.requestAnimationFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var speed = 1000;
(function currencySlide(){
    var currencyPairHeight = $('.slideItem:first-child').outerHeight();
    $(".slideContainer").animate({marginTop:-currencyPairHeight},speed, 'linear', function(){
                $(this).css({marginTop:0}).find("li:last").after($(this).find("li:first"));
        });
        requestAnimationFrame(currencySlide);
})();



//Look into FLEXBOX for evenly distributed dynamic columns?
//https://codepen.io/klamping/pen/YXwgBY?editors=110
