import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html'
})
export class ServerComponent {
  public serverID = Math.round(Math.random() * 100);
  public serverStatus = 'offline';

  public getServerStatus(){
    return this.serverStatus;
  }
}
