
function getVideo(){
    video = {'source': '/images/video_clips/MyMovie2.mp4'}
    return video;
}

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
//console.log("Show before fade count: " + divsToShowBeforeFade.length);

// var splashVideoDiv = document.getElementById('splash-video');
splashVideoMediaObject = getVideo();
splashVideoMedia = splashVideoMediaObject.source;

splashVideoDiv = document.getElementById('splash-video')
splashVideoDiv.setAttribute('src', splashVideoMedia);
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
splashVideoDiv.setAttribute('style', 'width:100%; height: auto');
// splashVideoDiv.setAttribute('position', 'absolute');
splashVideoDiv.muted = true;
setOpacity(splashVideoDiv, 1);
splashVideoDiv.play();
// splashVideoDiv.addEventListener(onended, function(){container.remove()})