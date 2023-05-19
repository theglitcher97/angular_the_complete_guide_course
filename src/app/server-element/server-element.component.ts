import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit, Output, ViewChild
} from '@angular/core';
import {Server} from "../shared/types/server";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input("serverElement") element!: Server;

  @ContentChild("paragraphContent") paragraphContent!: ElementRef;
  @ViewChild("heading") heading!: ElementRef;

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
    console.log('Checking heading on OnInit', this.heading?.nativeElement.textContent)
    console.log('Checking paragraphContent on OnInit', this.paragraphContent?.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log('ngDoCheck invoked')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit invoked')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked invoked')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit invoked')
    console.log('Checking heading on AfterViewInit', this.heading?.nativeElement.textContent)
    console.log('Checking paragraphContent on OnInit', this.paragraphContent.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked invoked')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy invoiked')
  }
}
