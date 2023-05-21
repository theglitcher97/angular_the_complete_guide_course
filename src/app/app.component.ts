import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [
    `
      h1 {
        color: teal;
      }
    `,
  ],
})
export class AppComponent {
  onIncomingNewEvenNumber(evenNumber: number) {
    console.log(`even number -> ${evenNumber}`);
  }

  onIncomingNewOddNumber(oddNumber: number) {
    console.log(`odd number -> ${oddNumber}`);
  }
}
