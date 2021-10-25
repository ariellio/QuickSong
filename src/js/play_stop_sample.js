import fetchSong from './sample.js';

let searchButton = document.getElementsByClassName("search__button")[0]
let pauseAndPlay = document.getElementsByClassName("pause__sample")[0]

let instruments = document.getElementById("pickSound").children;

let chosenInstrument
searchButton.addEventListener('click', () => {
    
    instruments.forEach(instrument => {
        if (instrument.selected) {
            chosenInstrument = instrument.value
        }
    })
    fetchSong(chosenInstrument)
    .then(playTrack => {
        playTrack.stop()
        playTrack.play()
        // playTrack.play()
    })
    
})

pauseAndPlay.addEventListener('click', () => {
    if (pauseAndPlay.children[0].classList.value === "fa fa-stop") {
        pauseAndPlay.children[0].classList = "fa fa-play"
    } else {
        pauseAndPlay.children[0].classList = "fa fa-stop"
    }

    if (window.someVar.playing()) {
        pauseAndPlay.children[0].classList = "fa fa-play"
        pauseAndPlay.children[0].style.color = "blue"
        return window.someVar.stop() 
    } else if (!window.someVar.playing()) {
        pauseAndPlay.children[0].classList = "fa fa-stop"
        pauseAndPlay.children[0].style.color = "#d69393"
        return window.someVar.play()
    } 
})