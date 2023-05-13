import { Component } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  /*template:
    `
      <app-server></app-server>
      <app-server></app-server>
    `,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  public allowNewServer = false;
  public serverCreationStatus = 'No server was created';
  public serverName = '';
  public serverWasCreated = false;
  constructor() {
    setTimeout(()=> this.allowNewServer = true,2000)
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created! Server name: " + this.serverName;
    this.serverWasCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value
  }
}
