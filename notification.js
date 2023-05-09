chrome.runtime.onMessage.addListener(async msg => {
    if ('play' in msg) {
        playAudio(msg.play.source);
    }
});

function playAudio(source) {
    const audio = new Audio(source);
    audio.play();
}
setTimeout(close, 6000);