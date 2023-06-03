import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string } | undefined;
  serverName = '';
  serverStatus = '';
  public allowEdit: boolean;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute
  ) {
    this.allowEdit = false;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
      if (this.server) {
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
      }
    });

    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === 'true';
    });
  }

  onUpdateServer() {
    if (this.server)
      this.serversService.updateServer(this.server.id, {
        name: this.serverName,
        status: this.serverStatus,
      });
  }
}
