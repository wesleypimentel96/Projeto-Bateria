//Adicionando um evento de keyp ao body
document.body.addEventListener("keyup", (event) => {

    playSound(event.code.toLowerCase());

});

// Função para acionar os audios com o evento de keyup
let playSound = (sound) => {

    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key = "${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
};

// Recebendo os valores do input, e transformando em um array de strings
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if (song !== "") {
        let songArray = song.split("");

        playComposition(songArray);
    }

});


// Recebendo o array de strings, e criando uma sequencia de audios com as keys dos audios.
function playComposition(songArray) {
    let wait = 0;


    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    };

};