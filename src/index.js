import {Howl, Howler} from "howler";
import * as Tone from 'tone';
import {song} from './instruments.js';
import {stoppedKick, stoppedSnare, loopKick,loopSnare, loopHihat, loopClap, loopBpm} from './bpm';
import * as samples from './sample.js';
import * as stopandplay from './play_stop_sample.js';



document.addEventListener("DOMContentLoaded", () => {
    //tonetest is bpm
    loopKick
    loopSnare
    loopHihat
    loopClap
    loopBpm
    
    //STOP BPM
    stoppedKick
    stoppedSnare

    samples

    let someVar

})







// -------------------------------------------------------------------
// GRABBING INSTRUMENTS AND SETTING TO SOUNDTYPE
// const sounds = document.getElementsByClassName("instrument__sound")
//     sounds.forEach( sound => {
    //         if (sound.id === "snare__sound") {
        //             sound.addEventListener('click', () => {
            //                 var sound = new Howl({
//                     src: [snare],
//                     loop: true,
//                     volume: 0.2,
//                 });
//                 sound.play()
//                 let number = sound.play()
               
//                 const stopButton = document.getElementsByClassName("stop__button")
//                 console.log(stopButton[0])
                
//                 stopButton.forEach(stopB => {
//                     stopB.addEventListener('click', () => {
//                         sound.stop()
//                     })
//                 })
//             })
//         }
//     if (sound.id === "kick__sound") {
//         sound.addEventListener('click', () => {
//             var sound = new Howl({
//                 src: [kick]
//             });
//             sound.play()
//         })
//     }
//     if (sound.id === "hihat__sound") {
//         sound.addEventListener('click', () => {
//             var sound = new Howl({
//                 src: [hihat]
//             });
//             sound.play()
//         })
//     }
//     if (sound.id === "clap__sound") {
//         sound.addEventListener('click', () => {
//             var sound = new Howl({
//                 src: [clap]
//             });
//             sound.play()
//         })
//     }
// })