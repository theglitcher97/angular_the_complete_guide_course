import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Server } from './server.component';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';

@Injectable({ providedIn: 'root' })
export class ServerResolver implements Resolve<Server | undefined> {
  constructor(private serverService: ServersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<Server | undefined>
    | Promise<Server | undefined>
    | Server
    | undefined {
    return this.serverService.getServer(+route.params['id'] ?? 0);
  }
}
