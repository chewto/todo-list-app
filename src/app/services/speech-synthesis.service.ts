/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';

const synth = window.speechSynthesis;

@Injectable({
  providedIn: 'root'
})
export class SpeechSynthesisService {

  public language = '';

  public talk(text:string|undefined){
    const synthesis = new SpeechSynthesisUtterance(text);
    synthesis.lang = this.language;
    synthesis.pitch = 1;
    synthesis.rate = 1;
    synth.speak(synthesis);
  }
}
