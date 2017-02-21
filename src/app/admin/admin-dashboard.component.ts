import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import { PreloadSelectedModules } from '../selective-preload-strategy';

import 'rxjs/add/operator/map';

@Component({
  template:  `
    <h3>Dashboard Information</h3>
    <table class="table table-striped">
      <tr>
        <th>Session ID:</th>
        <td>{{ sessionId | async }}</td>
      </tr>
      <tr>
        <th>Token:</th>
        <td>{{ token | async }}</td>
      </tr>
      <tr>
        <th>Preloaded Modules:</th>
        <td>
          <ul class="list-group">
            <li class="list-group-item" *ngFor="let module of modules">{{ module }}</li>
          </ul>
        </td>
      </tr>
    </table>
  `
})
export class AdminDashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;
  modules: string[];

  constructor(
      private route: ActivatedRoute,
      private preloadStrategy: PreloadSelectedModules
  ) {
      this.modules = preloadStrategy.preloadedModules;
  }

  ngOnInit() {
    // Capture the session ID if available
    this.sessionId = this.route
      .queryParams
      .map(params => params['session_id'] || 'None');

    // Capture the fragment if available
    this.token = this.route
      .fragment
      .map(fragment => fragment || 'None');
  }
}

