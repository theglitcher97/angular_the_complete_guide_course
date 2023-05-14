import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  public allowNewServer = false;
  public serverCreationStatus = 'No server was created';
  public serverName = '';
  public serverWasCreated = false;
  public servers = ['Google Cloud Server', 'Twitter Bots Server']
  constructor() {
    setTimeout(()=> this.allowNewServer = true,2000)
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created! Server name: " + this.serverName;
    this.servers.push(this.serverCreationStatus);
    this.serverWasCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value
  }
}
