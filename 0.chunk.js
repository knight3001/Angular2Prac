webpackJsonp([0,6],{

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crisis_service__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crisis_center_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crisis_list_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__crisis_center_home_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__crisis_detail_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__crisis_center_routing_module__ = __webpack_require__(553);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisCenterModule", function() { return CrisisCenterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CrisisCenterModule = (function () {
    function CrisisCenterModule() {
    }
    CrisisCenterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__crisis_center_routing_module__["a" /* CrisisCenterRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__crisis_center_component__["a" /* CrisisCenterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__crisis_list_component__["a" /* CrisisListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__crisis_center_home_component__["a" /* CrisisCenterHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__crisis_detail_component__["a" /* CrisisDetailComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__crisis_service__["a" /* CrisisService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CrisisCenterModule);
    return CrisisCenterModule;
}());
//# sourceMappingURL=C:/work/Angular2Prac/src/crisis-center.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export Crisis */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrisisService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Crisis = (function () {
    function Crisis(id, name) {
        this.id = id;
        this.name = name;
    }
    return Crisis;
}());
var CRISES = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];
var crisesPromise = Promise.resolve(CRISES);

var CrisisService = (function () {
    function CrisisService() {
    }
    CrisisService.prototype.getCrises = function () { return crisesPromise; };
    CrisisService.prototype.getCrisis = function (id) {
        return crisesPromise
            .then(function (crises) { return crises.find(function (crisis) { return crisis.id === +id; }); });
    };
    CrisisService.prototype.addCrisis = function (name) {
        name = name.trim();
        if (name) {
            var crisis_1 = new Crisis(CrisisService.nextCrisisId++, name);
            crisesPromise.then(function (crises) { return crises.push(crisis_1); });
        }
    };
    CrisisService.nextCrisisId = 100;
    CrisisService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], CrisisService);
    return CrisisService;
}());
//# sourceMappingURL=C:/work/Angular2Prac/src/crisis.service.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrisisCenterHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CrisisCenterHomeComponent = (function () {
    function CrisisCenterHomeComponent() {
    }
    CrisisCenterHomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            template: "\n    <div class=\"well\">Welcome to the Crisis Center</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CrisisCenterHomeComponent);
    return CrisisCenterHomeComponent;
}());
//# sourceMappingURL=C:/work/Angular2Prac/src/crisis-center-home.component.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrisisCenterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CrisisCenterComponent = (function () {
    function CrisisCenterComponent() {
    }
    CrisisCenterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            template: "\n    <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CrisisCenterComponent);
    return CrisisCenterComponent;
}());
//# sourceMappingURL=C:/work/Angular2Prac/src/crisis-center.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_service__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrisisDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostBinding */])('@routeAnimation'), 
        __metadata('design:type', Object)
    ], CrisisDetailComponent.prototype, "routeAnimation", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostBinding */])('style.display'), 
        __metadata('design:type', Object)
    ], CrisisDetailComponent.prototype, "display", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostBinding */])('style.position'), 
        __metadata('design:type', Object)
    ], CrisisDetailComponent.prototype, "position", null);
    CrisisDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            template: "\n  <div class=\"form-horizontal\" *ngIf=\"crisis\">\n    <h3 class=\"centerText\">{{ editName }}</h3>\n    <div class=\"form-group\">\n      <label class=\"col-sm-2 control-label\">Id:</label>\n      <div class=\"col-sm-10\"><p class=\"form-control-static\">{{ crisis.id }}</p></div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-sm-2 control-label\">Name:</label>\n      <div class=\"col-sm-10\"><input [(ngModel)]=\"editName\" placeholder=\"name\" class=\"form-control\" /></div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-sm-10 col-sm-offset-2\">\n        <button (click)=\"save()\" type=\"button\" class=\"btn btn-primary\">Save</button>\n        <button (click)=\"cancel()\" type=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n  ",
            styles: [],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* trigger */])('routeAnimation', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({
                        opacity: 1,
                        transform: 'translateX(0)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* transition */])(':enter', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({
                            opacity: 0,
                            transform: 'translateX(-100%)'
                        }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* animate */])('0.2s ease-in')
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* transition */])(':leave', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* animate */])('0.5s ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({
                            opacity: 0,
                            transform: 'translateY(100%)'
                        }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__dialog_service__["a" /* DialogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__dialog_service__["a" /* DialogService */]) === 'function' && _c) || Object])
    ], CrisisDetailComponent);
    return CrisisDetailComponent;
    var _a, _b, _c;
}());
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=C:/work/Angular2Prac/src/crisis-detail.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crisis_service__ = __webpack_require__(543);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrisisListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrisisListComponent = (function () {
    function CrisisListComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    CrisisListComponent.prototype.isSelected = function (crisis) {
        return crisis.id === this.selectedId;
    };
    CrisisListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crises = this.route.params
            .switchMap(function (params) {
            _this.selectedId = +params['id'];
            return _this.service.getCrises();
        });
    };
    CrisisListComponent.prototype.onSelect = function (crisis) {
        this.selectedId = crisis.id;
        // Navigate with relative link
        this.router.navigate([crisis.id], { relativeTo: this.route });
    };
    CrisisListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["f" /* Component */])({
            template: "\n    <div class=\"list-group\">\n      <button type=\"button\" *ngFor=\"let crisis of crises | async\"\n        [class.selected]=\"isSelected(crisis)\"\n        (click)=\"onSelect(crisis)\"\n        class=\"list-group-item listItem\">\n        <span class=\"badge-left\">{{ crisis.id }}</span> {{ crisis.name }}\n      </button>\n    </div>\n    <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__crisis_service__["a" /* CrisisService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__crisis_service__["a" /* CrisisService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], CrisisListComponent);
    return CrisisListComponent;
    var _a, _b, _c;
}());
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=C:/work/Angular2Prac/src/crisis-list.component.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crisis_center_home_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crisis_list_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crisis_center_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crisis_detail_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__can_deactivate_guard_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__crisis_detail_resolve_service__ = __webpack_require__(554);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrisisCenterRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var crisisCenterRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__crisis_center_component__["a" /* CrisisCenterComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__crisis_list_component__["a" /* CrisisListComponent */],
                children: [
                    {
                        path: ':id',
                        component: __WEBPACK_IMPORTED_MODULE_5__crisis_detail_component__["a" /* CrisisDetailComponent */],
                        canDeactivate: [__WEBPACK_IMPORTED_MODULE_6__can_deactivate_guard_service__["a" /* CanDeactivateGuard */]],
                        resolve: {
                            crisis: __WEBPACK_IMPORTED_MODULE_7__crisis_detail_resolve_service__["a" /* CrisisDetailResolve */]
                        }
                    },
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__crisis_center_home_component__["a" /* CrisisCenterHomeComponent */]
                    }
                ]
            }
        ]
    }
];
var CrisisCenterRoutingModule = (function () {
    function CrisisCenterRoutingModule() {
    }
    CrisisCenterRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(crisisCenterRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__crisis_detail_resolve_service__["a" /* CrisisDetailResolve */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CrisisCenterRoutingModule);
    return CrisisCenterRoutingModule;
}());
//# sourceMappingURL=C:/work/Angular2Prac/src/crisis-center-routing.module.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crisis_service__ = __webpack_require__(543);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrisisDetailResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrisisDetailResolve = (function () {
    function CrisisDetailResolve(cs, router) {
        this.cs = cs;
        this.router = router;
    }
    CrisisDetailResolve.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.params['id'];
        return this.cs.getCrisis(id).then(function (crisis) {
            if (crisis) {
                return crisis;
            }
            else {
                _this.router.navigate(['/crisis-center']);
                return false;
            }
        });
    };
    CrisisDetailResolve = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__crisis_service__["a" /* CrisisService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__crisis_service__["a" /* CrisisService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], CrisisDetailResolve);
    return CrisisDetailResolve;
    var _a, _b;
}());
//# sourceMappingURL=C:/work/Angular2Prac/src/crisis-detail-resolve.service.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map