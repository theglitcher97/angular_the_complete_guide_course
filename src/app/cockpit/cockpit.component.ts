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
    this.serverCreated.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    })
  }

  onBlueprintAdded() {
    this.blueprintCreated.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    })
  }
}

export type Server = {
  type: string,
  name: string,
  content: string
}
