import React from 'react';
import * as Tone from "tone";
import styles from './synth.css'; 
import Knob from './knob';
//create a synth and connect it to the master output (your speakers)
const synth = new Tone.Synth().toMaster();


//play a middle 'C' for the duration of an 8th note

const delay = ["1n", "2n","3n","4n","5n","6n","7n","8n",]




class Synth extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.nombre);
      }

     playNote (note) { 
        
        console.log(note);
        return synth.triggerAttackRelease(note, delay[5]);
      }

    render() {
        return (
            <div>
                <div>
                <ul className="set" >
                    <li className="white b" onClick={()=> this.playNote('F4')}></li>
                    <li className="black as" onClick={()=> this.playNote('F#4')}></li>
                    <li className="white a" onClick={()=> this.playNote('G4')}></li>
                    <li className="black gs"  onClick={()=> this.playNote('G#4')}></li>
                    <li className="white g"onClick={()=> this.playNote('A4')}></li>
                    <li className="black fs"  onClick={()=> this.playNote('A#4')}></li>
                    <li className="white f" onClick={()=> this.playNote('B4')}></li>
                    <li className="white e" onClick={()=> this.playNote('C5')}></li>
                    <li className="black ds"  onClick={()=> this.playNote('C#5')}></li>
                    <li className="white d" onClick={()=> this.playNote('D5')}></li>
                    <li className="black cs"  onClick={()=> this.playNote('D#5')}></li>
                    <li className="white c" onClick={()=> this.playNote('E5')}></li>
                    <Knob style={{left: '-10px'}}></Knob>
                </ul>
                </div>
            </div>
        )
    }
}

export default Synth