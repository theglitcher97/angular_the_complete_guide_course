import {Component, Input} from '@angular/core';
import {Server} from "../cockpit/cockpit.component";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  @Input("serverElement") element!: Server;
}
