
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

function saveShuffledArray(array){
    console.log("Creating Shuffled Array");
stateModule.changeState(shuffle(array));
};

function getNextRecording() {
    var playlist = stateModule.getState();
    console.log("Playlist Length: " + playlist.length);
    var nextRecordingObject = playlist.shift();
    var nextRecordingUrl = nextRecordingObject.url;
    console.log("Next recording: " + nextRecordingUrl);
    console.log("Shortened Playlist Length: " + playlist.length)
    console.log("Recordings Array Length: " + getRecordings().length)
    if (playlist.length == 0) {
        saveShuffledArray();
    }
    return nextRecordingUrl;
}

/* View in fullscreen */
function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
  
  /* Close fullscreen */
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }

  function startNewSong(player) {
    player.src = getNextRecording();
    player.load();
    player.play();
    z.play();
  }

  function stopSizePulse(source){
      var cssClassToRemove = 'pulse-size';
    const isPulsing = source.classList.contains(cssClassToRemove);
    if (isPulsing) {
        source.classList.remove(cssClassToRemove);
    }
  }

function playAudio(source) {
    console.log("Play Audio Called");
    var toPlay = document.getElementById("myAudio");
    console.log("Audio Element: " + toPlay );
    console.log(toPlay.outerHTML)
    stopSizePulse(source);
    toPlay.play();
  }

function pauseAudio() {
    var toPause = document.getElementById("myAudio");
    toPause.pause();
}

  function onSongEnd() {
    var audioPlayer = document.getElementById('myAudio');
    startNewSong(audioPlayer);
  }


splashVideo = document.createElement('video');
splashVideo.setAttribute('id', 'splash-video');
splashVideo.classList.add('w3-top');
splashVideo.setAttribute('style', "width: 100%; height: auto;z-index: 500");
splashVideo.muted = true;
openFullscreen(splashVideo)

saveShuffledArray(getRecordings());
var audioPlayer = document.getElementById('myAudio');
audioPlayer.setAttribute("src", getNextRecording());
audioPlayer.setAttribute('type', "audio/mpeg");
audioPlayer.setAttribute('onended', "onSongEnd()");
var playButton = document.getElementById('play-button');
playButton.addEventListener("click", function(evt){playAudio(playButton)});
var pauseButton = document.getElementById('pause-button');
pauseButton.addEventListener("click", function(){pauseAudio()});

