import {Howl} from "howler";
import kick from '../dist/assets/sounds/boom-bap-kick.wav'
import snare from '../dist/assets/sounds/snare-chop_C_major.wav';
import hihat from '../dist/assets/sounds/hi-hat-africa_C_minor.wav';
import clap from '../dist/assets/sounds/dry-short-clap.wav';


document.addEventListener("DOMContentLoaded", () => {

    // GRABBING INSTRUMENTS AND SETTING TO SOUNDTYPE
    const sounds = document.getElementsByClassName("instrument__sound")
    sounds.forEach( sound => {
        if (sound.id === "snare__sound") {
            sound.addEventListener('click', () => {
                var sound = new Howl({
                    src: [snare]
                });
                sound.play()
            })
        }
        if (sound.id === "kick__sound") {
            sound.addEventListener('click', () => {
                var sound = new Howl({
                    src: [kick]
                });
                sound.play()
            })
        }
        if (sound.id === "hihat__sound") {
            sound.addEventListener('click', () => {
                var sound = new Howl({
                    src: [hihat]
                });
                sound.play()
            })
        }
        if (sound.id === "clap__sound") {
            sound.addEventListener('click', () => {
                var sound = new Howl({
                    src: [clap]
                });
                sound.play()
            })
        }
    })
      
    //     if (sound.id === "snare__sound") {
    //     sound.addEventListener('click', e => {
    //         debugger
    //             var sound = new Howl({
    //                 src: [snare]
    //               });
                  
    //               sound.play();
                  
    //         }
    //     }
    // })

})