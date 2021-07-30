import fetchSong from './sample.js';

let searchButton = document.getElementsByClassName("search__button")[0]
let pauseAndPlay = document.getElementsByClassName("pause__sample")[0]


searchButton.addEventListener('click', () => {
    fetchSong()
    .then(playTrack => {
        playTrack.play()
        
    })
})


// debugger
// pauseAndPlay.addEventListener('click', () => {
//    console.log("hello")
// })



