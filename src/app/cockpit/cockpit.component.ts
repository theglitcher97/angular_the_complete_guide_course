import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  public newServerName = '';
  public newServerContent = '';

  @Output() serverCreated: EventEmitter<Server> = new EventEmitter<Server>();
  @Output() blueprintCreated: EventEmitter<Server> = new EventEmitter<Server>();

  onServerAdded() {
    if(this.isServerInfoValid()) this.serverCreated.emit(this.buildServerObject('server'))
  }

  onBlueprintAdded() {
    if(this.isServerInfoValid()) this.blueprintCreated.emit(this.buildServerObject('blueprint'))
  }

  isServerInfoValid(){
    return this.newServerName.trim().length !== 0 &&
      this.newServerContent.trim().length !== 0;
  }

  buildServerObject(serverType: string): Server {
    return {
      type: serverType,
      name: this.newServerName,
      content: this.newServerContent
    }
  }
}

export type Server = {
  type: string,
  name: string,
  content: string
}
