import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user!: { id: number; name: string };
  protected readonly Math = Math;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.activeRoute.snapshot.params['id'],
      name: this.activeRoute.snapshot.params['name'],
    };

    this.activeRoute.params.subscribe((param: Params) => {
      this.user.id = param['id'];
      this.user.name = param['name'];
    });
  }
}
