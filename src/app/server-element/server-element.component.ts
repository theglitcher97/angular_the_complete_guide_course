import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {Server} from "../shared/types/server";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck{
  @Input("serverElement") element!: Server;

  constructor() {
    console.log('on the constructor');
  }

  // Hook execute after any bind @input() property value has changed,
  // it gets trigger before the OnInit
  ngOnChanges($event: any){
    console.log('OnChanges hook', $event)
  }

  // This hook gets trigger after the constructor
  ngOnInit() {
    console.log('on the OnInit')
  }

  ngDoCheck() {
    console.log('ngDoCheck invoked')
  }
}
