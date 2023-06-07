import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivateGuard } from './can-deactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent
  implements OnInit, CanComponentDeactivateGuard
{
  server: { id: number; name: string; status: string } | undefined;
  serverName = '';
  serverStatus = '';
  public allowEdit: boolean;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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
    if (this.server) {
      this.serversService.updateServer(this.server.id, {
        name: this.serverName,
        status: this.serverStatus,
      });

      this.router.navigate(['../'], {
        relativeTo: this.activatedRoute,
        queryParamsHandling: 'preserve',
      });
    }
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.server) {
      if (
        this.server.name !== this.serverName ||
        this.server.status !== this.serverStatus
      ) {
        return confirm('do you wanna discard your changes?');
      }
      return true;
    }
    return true;
  }
}
