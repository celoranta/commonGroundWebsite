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

function pauseAudio() {
    var x = document.getElementById("myAudio");
    x.pause();
}

function getRandomRecording() {
    var index = Math.floor((Math.random() * recordings.length));
    return recordings[index].url;
}

