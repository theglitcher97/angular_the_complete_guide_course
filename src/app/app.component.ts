import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public evenAndOddNumbersList: number[] = [];

  onIncomingNewEvenNumber(evenNumber: number) {
    this.evenAndOddNumbersList.push(evenNumber);
  }

  onIncomingNewOddNumber(oddNumber: number) {
    this.evenAndOddNumbersList.push(oddNumber);
  }
}
