import { Component } from '@angular/core';
// @ts-ignore
import NodeJS from '$GLOBAL$';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  private counter = 0;
  private intervalCounter!: NodeJS.Timer;
  private intervalInitialized = false;

  onStartGame() {
    if (!this.intervalInitialized) {
      this.intervalInitialized = true;
      this.intervalCounter = setInterval(() => {
        this.counter++;
        console.log(this.counter);
      }, 1000);
    }
  }

  onStopGame() {
    clearInterval(this.intervalCounter);
    this.intervalInitialized = false;
  }
}
