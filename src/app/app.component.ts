import { Component } from '@angular/core';
import {Server} from "./cockpit/cockpit.component";

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

}
