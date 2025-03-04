let button = document.getElementById('button');
let song = document.getElementById('song');

button.setAttribute('src', 'play.png');

button.addEventListener('click', function() {
    let src = button.getAttribute('src');
    if (src === 'play.png') {
        button.setAttribute('src', 'pause.png');
        song.play();
    } else {
        button.setAttribute('src', 'play.png');
        song.pause();
    }   
    });