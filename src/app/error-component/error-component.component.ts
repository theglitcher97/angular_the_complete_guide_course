import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.css'],
})
export class ErrorComponentComponent implements OnInit {
  errorMessage!: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.errorMessage = this.activatedRoute.snapshot.data['message'];
  }
}
