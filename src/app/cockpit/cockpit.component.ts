import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Server} from "../shared/types/server";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  /*public newServerName = '';
  public newServerContent = '';*/
  @ViewChild('serverName') private serverNameElement!: ElementRef
  @ViewChild('serverContent') private serverContentElement!: ElementRef

  @Output() serverCreated: EventEmitter<Server> = new EventEmitter<Server>();
  @Output() blueprintCreated: EventEmitter<Server> = new EventEmitter<Server>();

  onServerAdded() {
    if(this.isServerInfoValid()) this.serverCreated.emit(this.buildServerObject('server'))
  }

  onBlueprintAdded() {
    if(this.isServerInfoValid()) this.blueprintCreated.emit(this.buildServerObject('blueprint'))
  }

  isServerInfoValid(){
    return this.serverNameElement.nativeElement.value.trim().length !== 0 &&
      this.serverContentElement.nativeElement.value.trim().length !== 0;
  }

  buildServerObject(serverType: string): Server {
    return {
      type: serverType,
      name: this.serverNameElement.nativeElement.value,
      content: this.serverContentElement.nativeElement.value
    }
  }
}


