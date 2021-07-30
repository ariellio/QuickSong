const fetchSong = async (instrument, bpm) => {
    const results = await fetch('https://freesound.org/apiv2/search/text/?query=piano&token=k0FCScr2yLYiIb5M6C2exsUN4wCqj567u3zLj0UY')
    const resultsJson = await results.json()
    const resultsArray = resultsJson.results
    const randomElement = resultsArray[Math.floor(Math.random() * resultsArray.length)]
    const resultId = randomElement.id
   
    const fetchSongFiles = await fetch(`https://freesound.org/apiv2/sounds/523462/?token=k0FCScr2yLYiIb5M6C2exsUN4wCqj567u3zLj0UY`)
    const fetchSongJson = await fetchSongFiles.json();
    const mp3File = fetchSongJson.previews["preview-hq-mp3"];
    mp3File;
    // .then( results => {
    //     return results.json();
    // })

    var sound = new Howl({
        src: [mp3File],
        loop: true
    });
    return sound;
}

export default fetchSong;
// HAVE SOUND NOW WITH ID

// const playSample = (playTrack) => {
//     // var sound = new Howl({
//     //     src: [playTrack]
//     // });
    
//     sound.play();
// }




