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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('../heroes/hero.service');
var ManageHeroesComponent = (function () {
    function ManageHeroesComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    ManageHeroesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes = this.route.params
            .switchMap(function (params) {
            _this.selectedId = +params['id'];
            return _this.service.getHeroes();
        });
    };
    ManageHeroesComponent.prototype.isSelected = function (hero) { return hero.id === this.selectedId; };
    ManageHeroesComponent.prototype.onSelect = function (hero) {
        this.router.navigate(['/hero', hero.id, { admin: 'admin' }]);
    };
    ManageHeroesComponent = __decorate([
        core_1.Component({
            template: "\n    <div class=\"well\">Manage your heroes here</div>\n    <div class=\"list-group\">\n        <button type=\"button\" *ngFor=\"let hero of heroes | async\"\n            [class.selected]=\"isSelected(hero)\"\n            (click)=\"onSelect(hero)\"\n            class=\"list-group-item listItem\">\n            <span class=\"badge-left\">{{ hero.id }}</span> {{ hero.name }}\n        </button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute, router_1.Router])
    ], ManageHeroesComponent);
    return ManageHeroesComponent;
}());
exports.ManageHeroesComponent = ManageHeroesComponent;
//# sourceMappingURL=manage-heroes.component.js.map