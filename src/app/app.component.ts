import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public userActivated = false;
  private subscriptions = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscriptions.add(
      this.userService.activatedEmitter.subscribe((isActivated) => {
        this.userActivated = isActivated;
      })
    );
  }
}
