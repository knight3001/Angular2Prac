"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var selective_preload_strategy_1 = require('../selective-preload-strategy');
require('rxjs/add/operator/map');
var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(route, preloadStrategy) {
        this.route = route;
        this.preloadStrategy = preloadStrategy;
        this.modules = preloadStrategy.preloadedModules;
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        // Capture the session ID if available
        this.sessionId = this.route
            .queryParams
            .map(function (params) { return params['session_id'] || 'None'; });
        // Capture the fragment if available
        this.token = this.route
            .fragment
            .map(function (fragment) { return fragment || 'None'; });
    };
    AdminDashboardComponent = __decorate([
        core_1.Component({
            template: "\n    <h3>Dashboard Information</h3>\n    <table class=\"table table-striped\">\n      <tr>\n        <th>Session ID:</th>\n        <td>{{ sessionId | async }}</td>\n      </tr>\n      <tr>\n        <th>Token:</th>\n        <td>{{ token | async }}</td>\n      </tr>\n      <tr>\n        <th>Preloaded Modules:</th>\n        <td>\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\" *ngFor=\"let module of modules\">{{ module }}</li>\n          </ul>\n        </td>\n      </tr>\n    </table>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, selective_preload_strategy_1.PreloadSelectedModules])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());
exports.AdminDashboardComponent = AdminDashboardComponent;
//# sourceMappingURL=admin-dashboard.component.js.map