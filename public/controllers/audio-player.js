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
// <audio id="myAudio" autoplay onended="onSongEnd()">
//   <source src="audio/song_clips/20181021_summerOf69_clip_mstr.mp3" type="audio/mpeg">
//   Your browser does not support the audio element.
// </audio>

var activeArray = shuffle(recordings);
var activeArray = randomizeHalves(recordings);

var stateModule = (function () {
    var state; // Private Variable

    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };

    pub.getState = function() {
        return state;
    }
    return pub; // expose externally
}());

function flipFlop(){
    var state = stateModule.getState;
    if (state = 0) {
        stateModel.changeState = 1
    }
    else (
        stateModel.changeState = 0
    )
    return stateModule.getState;
}

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

  function splitArray(arrayToSplit) {
    var arrayA = arrayToSplit.slice(0, Math.floor(arrayToSplit.length / 2));
    var arrayB = arrayToSplit.slice(Math.ceil(arrayToSplit.length / 2));
    return {'splits' : [{'A': arrayA}, {'B' : arrayB}]};
  }

function randomizeHalves(arrayToRandomize) {
  var splitObject = splitArray(arrayToRandomize);
  newArray = splitObject.A + splitObject.B;
  return newArray;
}

function pauseAudio() {
    var x = document.getElementById("myAudio");
    x.pause();
}

function chooseAtRandom(arrayToChooseFrom) {
var index = Math.floor((Math.random() * arrayToChooseFrom.length));
return arrayToChooseFrom[index];
}

function getRandomRecording() {
    const state = flipFlop();
    var half;
    if (state = 0) {
        half = 'A';
    }
    else {
        half = 'B'
    }
    const activeHalf = 
    return half;
}

stateModule.changeState(0);

