import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server!: { id: number; name: string; status: string } | undefined;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
  }

  onNavigate() {
    this.router.navigate(['edit'], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'preserve', // this preserve the queryParams on navigating
      // queryParamsHandling: 'merge', // this merge old and new query params and pass them to the loaded route
    });
  }
}
