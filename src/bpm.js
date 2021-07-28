import * as Tone from 'tone';
import {song} from './instruments.js';
// import kick from '../dist/assets/sounds/boom-bap-kick.wav'
import snare from '../dist/assets/sounds/snare-chop_C_major.wav';
import { Time } from 'tone';




var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

//LOOPING KICK
let getkickPlay = document.getElementsByClassName("kick__play") 
export let loopKick = getkickPlay[0].addEventListener('click', () => {
        if (Tone.context.state !== 'running') {
            Tone.context.resume();
        } 

        //// ACCESSING HTML ELEMENTS
        const kickRow = document.getElementsByClassName("kick__bar__container")[0].children;

        //CREATING INSTRUMENT
        const kick = new Tone.MembraneSynth().toDestination();
        

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


    //STOP KICK
    let stopToneKick = document.getElementsByClassName("kick__stop") 
    let stoppedKick = stopToneKick.forEach(tone => {
    tone.addEventListener('click', () => {
        Tone.Transport.stop();
    })
})
})
const snareInstrument  = new Tone.Sampler({
    "c2" : snare
}).toDestination()
//LOOPING SNARE
let getSnarePlay = document.getElementsByClassName("snare__play") 
export let loopSnare = getSnarePlay[0].addEventListener('click', () => {
        if (Tone.context.state !== 'running') {
            Tone.context.resume();
        } 

        //// ACCESSING HTML ELEMENTS
        const snareRow = document.getElementsByClassName("snare__bar__container")[0].children;
        debugger
        //CREATING INSTRUMENT
        const snareInstrument  = new Tone.Sampler({
            "c2" : snare
        }).toDestination()
        
        // snareInstrument.triggerAttackRelease("c2", "1m")
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
        
        // STOP SNARE    
        let stopSnare = document.getElementsByClassName("snare__stop") 
            let stoppedSnare = stopSnare.forEach(snareButton => {
                debugger
                snareButton.addEventListener('click', () => {
                    debugger
                    Tone.Transport.stop
                })
            })
})



//PLAY
// export let loop = new Tone.Loop(song, '4n');
// let toneTest = document.getElementsByClassName("kick__play") 
// debugger
// export let loopBpm = toneTest[0].addEventListener('click', () => {
//         if (Tone.context.state !== 'running') {
//             Tone.context.resume();
//         } 
//         Tone.Transport.stop();
//         loop.stop()
//         //start playing sound
//         Tone.Transport.start();
//         loop.start()
//     })





//CHANGE BPM
    let tempo = 60.0;
    const bpmControl = document.getElementById('bpm');
    const bpmValEl = document.getElementById('bpmval');
    
    bpmControl.addEventListener('input', e => {
    tempo = Number(e.target.value);
    bpmValEl.innerText = tempo;
    //connects tempo to loop tempo
    Tone.Transport.bpm.value = tempo}, false);

