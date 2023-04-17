/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

declare let webkitSpeechRecognition:any;

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {

  public text$ = new Subject<string>();
  public recognition = new webkitSpeechRecognition();

  public start(): void{
    this.recognition.interimResults = false;

    this.recognition.addEventListener('result', (event:any) => {
      const transcript = event.results[0][0].transcript;

      console.log(transcript);
      this.text$.next(transcript);
    })
  }

  public hear(): void{
    this.recognition.start();
    console.log('microphone on');
  }
}
