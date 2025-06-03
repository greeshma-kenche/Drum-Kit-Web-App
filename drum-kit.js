document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    let audio;
    if (!['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].includes(key)) {
        return; // Ignore keys that are not part of the drum kit
    } 
    let keyDiv = document.querySelector(`.keys[data-key="${key}"]`);
    switch (key) {
        case 'a':
            audio = new Audio('assets/sounds/clap.wav');
            audio.play();
            break;
        case 's':
            audio = new Audio('assets/sounds/hihat.wav');
            audio.play();
            break;
        case 'd':
            audio = new Audio('assets/sounds/kick.wav');
            audio.play();
            break;
        case 'f':
            audio = new Audio('assets/sounds/openhat.wav');
            audio.play();
            break;
        case 'g':
            audio = new Audio('assets/sounds/boom.wav');
            audio.play();
            break;
        case 'h':
            audio = new Audio('assets/sounds/ride.wav');
            audio.play();
            break;
        case 'j':
            audio = new Audio('assets/sounds/snare.wav');
            audio.play();
            break;
        case 'k':
            audio = new Audio('assets/sounds/tom.wav');
            audio.play();
            break;
        case 'l':
            audio = new Audio('assets/sounds/tink.wav');
            audio.play();
            break;
    }
    keyDiv.classList.add('js-keys');
    setTimeout(() => {
        keyDiv.classList.remove('js-keys');
    }, 150);
});