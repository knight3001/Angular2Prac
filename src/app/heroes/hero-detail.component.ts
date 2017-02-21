import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { HeroService, Hero } from './hero.service';

@Component({
   moduleId: module.id,
   selector: 'my-hero',
   templateUrl: 'hero-detail.component.html',
   styles: [],
   animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class HeroDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }

  hero: Hero;
  private admin: string;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => {
            this.admin = params['admin'];
            return this.heroService.getHero(+params['id']);
        })
      .subscribe((hero: Hero) => this.hero = hero);
  }

  gotoHeroes(): void {
      let heroId = this.hero ? this.hero.id : null;
      if (this.admin === 'admin') {
          this.router.navigate(['/admin/heroes', { id: heroId }]);
      }
      else{
          this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
      }
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/