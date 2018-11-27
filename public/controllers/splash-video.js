
// function getVideo(){
//     video = {'source': '/images/video_clips/MyMovie2.mp4'}
//     return video;
// }

function setOpacity(element, opacityValue) {
element.style.opacity = opacityValue;
}

function fadeAndHide(fadingElement, fadingCallback, hiddenCallback){
    const vidDuration = fadingElement.duration;
    const timeRemaining = vidDuration - fadingElement.currentTime;
    if (timeRemaining < 1){
        fadingCallback();
        setOpacity(fadingElement, timeRemaining);
        if (timeRemaining == 0) {
            fadingElement.style.display = 'none';
            hiddenCallback();
        }
    }
}

function showDivs(divsToShow, callback) {
    var i=0;
    for (i = 0; i < divsToShow.length; i++)
{
    const divToShow = divsToShow[i];
    divToShow.style.display = 'block';
}
if (callback) {
    callback();
}
}

var divsToHide = document.getElementsByClassName('hide-during-splash');
console.log("Divs to hide qty: " + divsToHide.length);
i = 0;
for (i = 0; i < divsToHide.length; i++)
{
    const divToHide = divsToHide[i];
    divToHide.style.display = 'none';
}
var divsToShowBeforeFade = document.getElementsByClassName('hide-during-video');
// splashVideoMediaObject = getVideo();
// splashVideoMedia = splashVideoMediaObject.source;

splashVideoDiv = document.getElementById('splash-video')


// splashVideoDiv.src = splashVideoMedia;
splashVideoDiv.setAttribute('style', 'width:100%; height: auto');
splashVideoDiv.controls = true;
splashVideoDiv.autoplay = true;
splashVideoDiv.muted = true;
// setOpacity(splashVideoDiv, 1);
// splashVideoDiv.setAttribute('playsinline', "");
// splashVideoDiv.setAttribute('poster', "/images/video_clips/poster.jpg");
// splashVideoDiv.setAttribute('object-fit:fill');

// splashVideoSource = document.createElement('source');
// splashVideoSource.src = splashVideoMedia;
// splashVideoSource.setAttribute('type', 'video/mp4');

// splashVideoDiv.appendChild(splashVideoSource);

splashVideoDiv.addEventListener(
    'timeupdate', 
    function(){fadeAndHide(
        splashVideoDiv, 
        function(){showDivs(divsToShowBeforeFade)},
        function(){showDivs(
            divsToHide, 
            function(){animateSongList()}
        )}
    )}
);

const vidPromise = splashVideoDiv.play();

// In browsers that don’t yet support this functionality,
// playPromise won’t be defined.
if (vidPromise !== undefined) {
    vidPromise.then(function() {
      // Automatic playback started!
    }).catch(function(error) {
        console.log('Video autoplay failed and was skipped with error: ' + error)
        splashVideoDiv.style.display = 'none';
        showDivs(divsToShowBeforeFade);
        showDivs(divsToHide);
      // Automatic playback failed.
      // Show a UI element to let the user manually start playback.
    });
  }
// splashVideoDiv.addEventListener(onended, function(){container.remove()})