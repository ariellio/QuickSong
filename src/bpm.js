import * as Tone from 'tone';
import {song} from './instruments.js';
import snare from '../dist/assets/sounds/snare-chop_C_major.wav';
import hihat from '../dist/assets/sounds/hi-hat-africa_C_minor.wav';
import clap from '../dist/assets/sounds/dry-short-clap.wav';
import { Time } from 'tone';




var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

//PLAY
let getkickPlay = document.getElementsByClassName("play__button") 
export let loopKick = getkickPlay[0].addEventListener('click', () => {
        if (Tone.context.state !== 'running') {
            Tone.context.resume();
        } 

        //// ACCESSING HTML ELEMENTS
        const kickRow = document.getElementsByClassName("kick__bar__container")[0].children;
        const snareRow = document.getElementsByClassName("snare__bar__container")[0].children;
        const hihatRow = document.getElementsByClassName("hihat__bar__container")[0].children;
        const clapRow = document.getElementsByClassName("clap__bar__container")[0].children;

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
            if (kickRow[0].checked && beat === "0") {
                kick.triggerAttackRelease("c1", "1m", time)
            }
            if (kickRow[1].checked && beat === "1") {
                kick.triggerAttackRelease("c1", "1m", time)
            }
            if (kickRow[2].checked && beat === "2") {
                kick.triggerAttackRelease("c1", "1m", time)
            }
            if (kickRow[3].checked && beat === "3") {
                kick.triggerAttackRelease("c1", "1m", time)
            }

        }
        Tone.Transport.start();


        // SNARE
        Tone.ToneAudioBuffer.loaded().then(() =>{
                    Tone.Transport.scheduleRepeat(time => {
                        repeat(time)
                    }, "4n");
                    
                    function repeat(time){
                        let beat = Tone.Transport.position.split(":")[1]
                        if (snareRow[0].checked && beat === "0") {
                            snareInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (snareRow[1].checked && beat === "1") {
                            snareInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (snareRow[2].checked && beat === "2") {
                            snareInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (snareRow[3].checked && beat === "3") {
                            snareInstrument.triggerAttackRelease("c2", "1m")
                        }
            
                    }
                    Tone.Transport.start();  
        });

    
    
        // HIHAT
        Tone.ToneAudioBuffer.loaded().then(() =>{
                    Tone.Transport.scheduleRepeat(time => {
                        repeat(time)
                    }, "4n");
                    
                    function repeat(time){
                        let beat = Tone.Transport.position.split(":")[1]
                        if (hihatRow[0].checked && beat === "0") {
                            hihatInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (hihatRow[1].checked && beat === "1") {
                            hihatInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (hihatRow[2].checked && beat === "2") {
                            hihatInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (hihatRow[3].checked && beat === "3") {
                            hihatInstrument.triggerAttackRelease("c2", "1m")
                        }
            
                    }
                    Tone.Transport.start();  
        });

       // CLAP 
        Tone.ToneAudioBuffer.loaded().then(() =>{
                    Tone.Transport.scheduleRepeat(time => {
                        repeat(time)
                    }, "4n");
                    
                    function repeat(time){
                        let beat = Tone.Transport.position.split(":")[1]
                        if (clapRow[0].checked && beat === "0") {
                            clapInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (clapRow[1].checked && beat === "1") {
                            clapInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (clapRow[2].checked && beat === "2") {
                            clapInstrument.triggerAttackRelease("c2", "1m")
                        }
                        if (clapRow[3].checked && beat === "3") {
                            clapInstrument.triggerAttackRelease("c2", "1m")
                        }
            
                    }
                    Tone.Transport.start();  
        });
        

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

