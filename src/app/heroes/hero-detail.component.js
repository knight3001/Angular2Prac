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
var hero_service_1 = require('./hero.service');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route, router) {
        this.heroService = heroService;
        this.route = route;
        this.router = router;
    }
    Object.defineProperty(HeroDetailComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroDetailComponent.prototype, "display", {
        get: function () {
            return 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroDetailComponent.prototype, "position", {
        get: function () {
            return 'relative';
        },
        enumerable: true,
        configurable: true
    });
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            _this.admin = params['admin'];
            return _this.heroService.getHero(+params['id']);
        })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.gotoHeroes = function () {
        var heroId = this.hero ? this.hero.id : null;
        if (this.admin === 'admin') {
            this.router.navigate(['/admin/heroes', { id: heroId }]);
        }
        else {
            this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
        }
    };
    __decorate([
        core_1.HostBinding('@routeAnimation'), 
        __metadata('design:type', Object)
    ], HeroDetailComponent.prototype, "routeAnimation", null);
    __decorate([
        core_1.HostBinding('style.display'), 
        __metadata('design:type', Object)
    ], HeroDetailComponent.prototype, "display", null);
    __decorate([
        core_1.HostBinding('style.position'), 
        __metadata('design:type', Object)
    ], HeroDetailComponent.prototype, "position", null);
    HeroDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-hero',
            templateUrl: 'hero-detail.component.html',
            styles: [],
            animations: [
                core_1.trigger('routeAnimation', [
                    core_1.state('*', core_1.style({
                        opacity: 1,
                        transform: 'translateX(0)'
                    })),
                    core_1.transition(':enter', [
                        core_1.style({
                            opacity: 0,
                            transform: 'translateX(-100%)'
                        }),
                        core_1.animate('0.2s ease-in')
                    ]),
                    core_1.transition(':leave', [
                        core_1.animate('0.5s ease-out', core_1.style({
                            opacity: 0,
                            transform: 'translateY(100%)'
                        }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute, router_1.Router])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero-detail.component.js.map