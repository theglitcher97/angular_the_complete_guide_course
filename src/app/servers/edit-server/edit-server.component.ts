import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string } | undefined;
  serverName = '';
  serverStatus = '';

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params);
    console.log(this.activatedRoute.snapshot.queryParams);
    this.server = this.serversService.getServer(1);
    if (this.server) {
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    }
  }

  onUpdateServer() {
    if (this.server)
      this.serversService.updateServer(this.server.id, {
        name: this.serverName,
        status: this.serverStatus,
      });
  }
}
