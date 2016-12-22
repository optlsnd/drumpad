window.addEventListener('keydown', function(e) {
    const sound = document.querySelector(`audio[data-sound="${e.keyCode}"]`);
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();
    const pad = document.querySelector(`.pad[data-sound="${e.keyCode}"]`);
    pad.classList.add('pad--click');
    pad.addEventListener('transitionend', function() {
        this.classList.remove('pad--click');
    });
});