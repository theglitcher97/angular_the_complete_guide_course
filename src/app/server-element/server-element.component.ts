import {Component, Input} from '@angular/core';
import {Server} from "../shared/types/server";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  @Input("serverElement") element!: Server;
}
