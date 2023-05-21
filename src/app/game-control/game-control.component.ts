import { Component, EventEmitter, Output } from '@angular/core';
// @ts-ignore
import NodeJS from '$GLOBAL$';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() evenNumberGeneratedEvent: EventEmitter<number> =
    new EventEmitter<number>();
  @Output() oddNumberGeneratedEvent: EventEmitter<number> =
    new EventEmitter<number>();
  private counter = 0;
  private intervalCounter!: NodeJS.Timer;
  private intervalInitialized = false;

  onStartGame() {
    if (!this.intervalInitialized) {
      this.intervalInitialized = true;
      this.intervalCounter = setInterval(() => {
        this.counter++;
        if (this.counter % 2 === 0)
          this.evenNumberGeneratedEvent.emit(this.counter);
        else this.oddNumberGeneratedEvent.emit(this.counter);
      }, 1000);
    }
  }

  onStopGame() {
    clearInterval(this.intervalCounter);
    this.intervalInitialized = false;
  }
}
