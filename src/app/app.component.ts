import { Component } from '@angular/core';
import {Server} from "./shared/types/server";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Server[] = [
    {type: 'server', name: "YouTube's", content: 'Streaming server'},
    {type: 'blueprint', name: "Facebook's server", content: 'Messaging server'},
  ];

  onServerAdded(newServer: Server) {
    this.serverElements.push({
      type: 'server',
      name: newServer.name,
      content: newServer.content
    });
  }

  onBlueprintAdded(newServer: Server) {
    this.serverElements.push({
      type: 'blueprint',
      name: newServer.name,
      content: newServer.content
    });
  }
}
