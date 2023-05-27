import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public selectedTab = 'dashboard';

  onNavigate(tab: string) {
    this.selectedTab = tab;
  }
}
