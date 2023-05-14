import {Component} from "@angular/core";

const ONLINE = 'online';
const OFFLINE = 'offline';
const ONLINE_COLOR = 'green';
const OFFLINE_COLOR = 'red';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html'
})
export class ServerComponent {
  public serverID = Math.round(Math.random() * 100);
  public serverStatus = OFFLINE;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? ONLINE : OFFLINE;
  }

  public getServerStatus(){
    return this.serverStatus;
  }

  getServerColor() {
    return this.serverStatus === ONLINE ? ONLINE_COLOR : OFFLINE_COLOR;
  }

  protected readonly ONLINE = ONLINE;
}
