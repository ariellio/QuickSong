import * as Tone from 'tone';
import {song} from './instruments.js';
import snare from '../dist/assets/sounds/snare-chop_C_major.wav';
import hihat from '../dist/assets/sounds/hi-hat-africa_C_minor.wav';
import clap from '../dist/assets/sounds/dry-short-clap.wav';
import { Time } from 'tone';




var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

const kickDiv = document.getElementsByClassName("kick__bar");
// console.log(kickD)
kickDiv.forEach(singleKick => {
    singleKick.addEventListener('click', () => {
        if (singleKick.dataset.active === "true") {
            singleKick.dataset.active = "false"
            singleKick.style.backgroundColor = "#202020"
        } else if (singleKick.dataset.active === "false"){
            singleKick.dataset.active = "true"
            singleKick.style.backgroundColor = "red"
        }

    })
})


//PLAY
let getPlay = document.getElementsByClassName("play__button") 
export let loopKick = getPlay[0].addEventListener('click', () => {
        if (Tone.context.state !== 'running') {
            Tone.context.resume();
        } 

        //// ACCESSING HTML ELEMENTS
        const kickRow = document.getElementsByClassName("kick__bar__container")[0];
        // const snareRow = document.getElementsByClassName("snare__bar__container")[0].children;
        // const hihatRow = document.getElementsByClassName("hihat__bar__container")[0].children;
        // const clapRow = document.getElementsByClassName("clap__bar__container")[0].children;

        //CREATING INSTRUMENTS
        const kick = new Tone.MembraneSynth().toDestination();
        //--//
        const snareInstrument  = new Tone.Sampler({
            "c2" : snare
        }).toDestination()
        //--//
        const hihatInstrument  = new Tone.Sampler({
            "c2" : hihat
        }).toDestination()
        //--//
        const clapInstrument  = new Tone.Sampler({
            "c2" : clap
        }).toDestination()

        // INSTRUMENT PLAYBACK BELOW (KICK, SNARE, HIHAT, CLAP)

        //KICK
        Tone.Transport.scheduleRepeat(time => {
            repeat(time)
        }, "4n");

       
        
        function repeat(time){
            let beat = Tone.Transport.position.split(":")[1]
            if (kickDiv[0].dataset.active === "true" && beat === "0" && currentState !== "running") {
                kick.triggerAttackRelease("c1", "1m", time)
            }
            if (kickDiv[1].dataset.active === "true" && beat === "1" && currentState !== "running") {
                kick.triggerAttackRelease("c1", "1m", time)
            }
            if (kickDiv[2].dataset.active === "true" && beat === "2" && currentState !== "running") {
                kick.triggerAttackRelease("c1", "1m", time)
            }
            if (kickDiv[3].dataset.active === "true" && beat === "3" && currentState !== "running") {
                kick.triggerAttackRelease("c1", "1m", time)
            }


        }

        Tone.Transport.start();

        let currentState = Tone.context.state




        SNARE
        Tone.ToneAudioBuffer.loaded().then(() =>{
                    Tone.Transport.scheduleRepeat(time => {
                        repeat(time)
                    }, "4n");
                    
                    function repeat(time){
                        let beat = Tone.Transport.position.split(":")[1]
                        if (snareRow[0].checked && beat === "0" && currentState !== "running") {
                            snareInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (snareRow[1].checked && beat === "1" && currentState !== "running") {
                            snareInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (snareRow[2].checked && beat === "2" && currentState !== "running") {
                            snareInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (snareRow[3].checked && beat === "3" && currentState !== "running") {
                            snareInstrument.triggerAttackRelease("c2", "1m")
                        }
            
                    }
                    Tone.Transport.start();  
        });

    
    
    //     // HIHAT
    //     Tone.ToneAudioBuffer.loaded().then(() =>{
    //                 Tone.Transport.scheduleRepeat(time => {
    //                     repeat(time)
    //                 }, "4n");
                    
    //                 function repeat(time){
    //                     let beat = Tone.Transport.position.split(":")[1]
    //                     if (hihatRow[0].checked && beat === "0" && currentState !== "running" ) {
    //                         hihatInstrument.triggerAttackRelease("c2", "1m")
    //                     }
    //                     if (hihatRow[1].checked && beat === "1" && currentState !== "running" ) {
    //                         hihatInstrument.triggerAttackRelease("c2", "1m")
    //                     }
    //                     if (hihatRow[2].checked && beat === "2" && currentState !== "running" ) {
    //                         hihatInstrument.triggerAttackRelease("c2", "1m")
    //                     }
    //                     if (hihatRow[3].checked && beat === "3" && currentState !== "running" ) {
    //                         hihatInstrument.triggerAttackRelease("c2", "1m")
    //                     }
            
    //                 }
    //                 Tone.Transport.start();  
    //     });

    //    // CLAP 
    //     Tone.ToneAudioBuffer.loaded().then(() =>{
    //                 Tone.Transport.scheduleRepeat(time => {
    //                     repeat(time)
    //                 }, "4n");
                    
    //                 function repeat(time){
    //                     let beat = Tone.Transport.position.split(":")[1]
    //                     if (clapRow[0].checked && beat === "0" && currentState !== "running") {
    //                         clapInstrument.triggerAttackRelease("c2", "1m")
    //                     }
    //                     if (clapRow[1].checked && beat === "1" && currentState !== "running") {
    //                         clapInstrument.triggerAttackRelease("c2", "1m")
    //                     }
    //                     if (clapRow[2].checked && beat === "2" && currentState !== "running") {
    //                         clapInstrument.triggerAttackRelease("c2", "1m")
    //                     }
    //                     if (clapRow[3].checked && beat === "3" && currentState !== "running") {
    //                         clapInstrument.triggerAttackRelease("c2", "1m")
    //                     }
            
    //                 }
    //                 Tone.Transport.start();  
    //     });
        

    //STOP PLAYBACK
    let stopPlayback = document.getElementsByClassName("stop__button") 
    let stoppedPlayback = stopPlayback.forEach(playback => {
    playback.addEventListener('click', () => {
        Tone.Transport.stop();
    })

    })
})

//CHANGE BPM
    let tempo = 60.0;
    const bpmControl = document.getElementById('bpm');
    const bpmValEl = document.getElementById('bpmval');
    
    bpmControl.addEventListener('input', e => {
    tempo = Number(e.target.value);
    bpmValEl.innerText = tempo;
    //connects tempo to loop tempo
    Tone.Transport.bpm.value = tempo}, false);

