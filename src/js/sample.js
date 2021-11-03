import { someVar } from "../index.js";

const fetchSong = async (instrument, bpm) => {
    const results = await fetch(`https://freesound.org/apiv2/search/text/?query=${instrument}+4+bar+loop+120bpm&token=k0FCScr2yLYiIb5M6C2exsUN4wCqj567u3zLj0UY`)
    const resultsJson = await results.json()
    let resultsArray = []
    resultsJson.results.filter( result => {

        if (instrument === "piano") {
            if (!result.name.includes("synth") && !result.name.includes("guitar") && !result.tags.includes("synth") && !result.tags.includes("guitar") && !result.tags.includes("drum") )
                result.tags.forEach(tag => {
                    if (tag === `${instrument}`)
                    resultsArray.push(result)
                })
        } else if (instrument === "guitar") {
            if (!result.name.includes("synth") && !result.name.includes("piano") && !result.tags.includes("synth") && !result.tags.includes("piano") && !result.tags.includes("drum") )
                result.tags.forEach(tag => {
                    if (tag === `${instrument}`)
                    resultsArray.push(result)
                })
        } else if (instrument === "synth") {
            if (!result.name.includes("guitar") && !result.name.includes("piano") && !result.tags.includes("drum") )
                result.tags.forEach(tag => {
                    if (tag === `${instrument}`)
                    resultsArray.push(result)
                })
        } 
    })
    const randomElement = resultsArray[Math.floor(Math.random() * resultsArray.length)]
    const resultId = randomElement.id
   
    const fetchSongFiles = await fetch(`https://freesound.org/apiv2/sounds/${resultId}/?token=k0FCScr2yLYiIb5M6C2exsUN4wCqj567u3zLj0UY`)
    const fetchSongJson = await fetchSongFiles.json();
    const mp3File = fetchSongJson.previews["preview-hq-mp3"];
    mp3File;

    if (Object.values(window.someVar).length  > 0) {
        window.someVar.stop();
        window.someVar.unload();
    }
  
    var sound = new Howl({
        src: [mp3File],
        loop: true,
        html5: true,
        volume: .5
    });
    
    window.someVar = sound;
    return sound;
}

export default fetchSong;