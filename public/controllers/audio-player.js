
function getRecordings() {
const recordings = [
    { "url": "/audio/song_clips/20181021_blueOnBlack_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_cakeByTheOcean_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_DaniCalifornia_clip.mp3" },
    { "url": "/audio/song_clips/20181021_DrinkInMyHand_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_fastAsYou_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_Fire_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_goldOnTheCeiling_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_HardToHandle_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_iWish_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_LearnToFly_clip-mstr.mp3" },
    { "url": "/audio/song_clips/20181021_ListenToTheMusic_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_lonelyBoy_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_longTrainRunnin_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_MaryJanesLastDance_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_missYou_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_mustangSally_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_myKindOfNight_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_NewOrleansIsSinking_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_OceanPearl_clip-mstr.mp3" },
    { "url": "/audio/song_clips/20181021_oneHeadlight_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_poets_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_PrideAndJoy_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_pumpItUp_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_Springsteen_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_Springsteen_clip_mstr2.mp3" },
    { "url": "/audio/song_clips/20181021_summerOf69_clip_mstr.mp3" },
    { "url": "/audio/song_clips/20181021_superstition_Clip_Mstrd.mp3" },
    { "url": "/audio/song_clips/20181021_tellMeBabyMastered.mp3" },
    { "url": "/audio/song_clips/20181021_TheWeight_clip_mstr.mp3" }
];
return recordings
}

var stateModule = (function () {
    var state; // Private Variable
    var pub = {};// public object - returned at end of module
    pub.changeState = function (newstate) {
        state = newstate;
        console.log("State changed to: " + state);
    };
    pub.getState = function() {
        return state;
    }
    return pub; // expose externally
}());

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function getNextRecording() {
    var playlist = stateModule.getState();
    console.log("Playlist Length: " + playlist.length);
    var nextRecordingObject = playlist.shift();
    var nextRecordingUrl = nextRecordingObject.url;
    console.log("Next recording: " + nextRecordingUrl);
    console.log("Shortened Playlist Length: " + playlist.length)
    console.log("Recordings Array Length: " + getRecordings().length)
    if (playlist.length == 0) {
        createShuffledPlaylist();
    }
    return nextRecordingUrl;
}

function pauseAudio() {
    var toPause = document.getElementById("myAudio");
    toPause.pause();
}

function playAudio() {
    console.log("Play Audio Called");
    var toPlay = document.getElementById("myAudio");
    console.log("Audio Element: " + toPlay );
    console.log(toPlay.outerHTML)
    toPlay.play();
  }

  function onSongEnd() {
    startNewSong();
  }

  function startNewSong() {
    var x = document.getElementById("myAudio");
    var y = x.parentElement;
    y.removeChild(x);
    var z = document.createElement('audio');
    z.setAttribute('id', 'myAudio');
    z.setAttribute('onended', 'onSongEnd()');
    var url = getNextRecording();
    z.setAttribute('src', url);
    z.setAttribute('type', "audio/mpeg");
    y.appendChild(z);
    z.play();
  }

//load state module with shuffled recordings
function createShuffledPlaylist(){
    let recordings = getRecordings();
    console.log("Creating Shuffled Playlist from Recordings.");
stateModule.changeState(shuffle(recordings));
};

createShuffledPlaylist();

var audioPlayer = document.getElementById('myAudio');
audioPlayer.setAttribute("src", getNextRecording());
audioPlayer.setAttribute('type', "audio/mpeg");

audioPlayer.setAttribute('onended', "onSongEnd()");
//audioPlayer.autoplay = false;

var playButton = document.getElementById('play-button');
playButton.addEventListener("click", function(){playAudio()});

var pauseButton = document.getElementById('pause-button');
pauseButton.addEventListener("click", function(){pauseAudio()});

