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
var dialog_service_1 = require('../dialog.service');
var CrisisDetailComponent = (function () {
    function CrisisDetailComponent(route, router, dialogService) {
        this.route = route;
        this.router = router;
        this.dialogService = dialogService;
    }
    Object.defineProperty(CrisisDetailComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrisisDetailComponent.prototype, "display", {
        get: function () {
            return 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CrisisDetailComponent.prototype, "position", {
        get: function () {
            return 'relative';
        },
        enumerable: true,
        configurable: true
    });
    CrisisDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.editName = data.crisis.name;
            _this.crisis = data.crisis;
        });
    };
    CrisisDetailComponent.prototype.cancel = function () {
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.save = function () {
        this.crisis.name = this.editName;
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.canDeactivate = function () {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
    };
    CrisisDetailComponent.prototype.gotoCrises = function () {
        var crisisId = this.crisis ? this.crisis.id : null;
        // Pass along the crisis id if available
        // so that the CrisisListComponent can select that crisis.
        // Add a totally useless `foo` parameter for kicks.
        // Relative navigation back to the crises
        this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    };
    __decorate([
        core_1.HostBinding('@routeAnimation'), 
        __metadata('design:type', Object)
    ], CrisisDetailComponent.prototype, "routeAnimation", null);
    __decorate([
        core_1.HostBinding('style.display'), 
        __metadata('design:type', Object)
    ], CrisisDetailComponent.prototype, "display", null);
    __decorate([
        core_1.HostBinding('style.position'), 
        __metadata('design:type', Object)
    ], CrisisDetailComponent.prototype, "position", null);
    CrisisDetailComponent = __decorate([
        core_1.Component({
            template: "\n  <div class=\"form-horizontal\" *ngIf=\"crisis\">\n    <h3 class=\"centerText\">{{ editName }}</h3>\n    <div class=\"form-group\">\n      <label class=\"col-sm-2 control-label\">Id:</label>\n      <div class=\"col-sm-10\"><p class=\"form-control-static\">{{ crisis.id }}</p></div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-sm-2 control-label\">Name:</label>\n      <div class=\"col-sm-10\"><input [(ngModel)]=\"editName\" placeholder=\"name\" class=\"form-control\" /></div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-sm-10 col-sm-offset-2\">\n        <button (click)=\"save()\" type=\"button\" class=\"btn btn-primary\">Save</button>\n        <button (click)=\"cancel()\" type=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n  ",
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
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, dialog_service_1.DialogService])
    ], CrisisDetailComponent);
    return CrisisDetailComponent;
}());
exports.CrisisDetailComponent = CrisisDetailComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=crisis-detail.component.js.map