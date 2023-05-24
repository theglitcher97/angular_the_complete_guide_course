import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public tabSelected = 'recipes';

  navigateTo(tabSelected: string) {
    this.tabSelected = tabSelected;
  }
}
