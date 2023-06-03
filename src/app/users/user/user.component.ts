import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user!: { id: number; name: string };
  private subscriptions: Subscription = new Subscription();

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.activeRoute.snapshot.params['id'],
      name: this.activeRoute.snapshot.params['name'],
    };
    this.subscriptions.add(
      this.activeRoute.params.subscribe((param: Params) => {
        this.user.id = param['id'];
        this.user.name = param['name'];
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
