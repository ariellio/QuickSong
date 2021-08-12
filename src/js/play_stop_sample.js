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
    })
})

pauseAndPlay.addEventListener('click', () => {
    if (window.someVar.playing()) {
        return window.someVar.stop() 
    } else if (!window.someVar.playing()) {
        return window.someVar.play()
    }
})


// pauseAndPlay.addEventListener('click', () => {
//    console.log("hello")
// })



