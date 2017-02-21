import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }            from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { HeroService, Hero }         from './hero.service';

@Component({
   moduleId: module.id,
   selector: 'my-heroes',
   templateUrl: 'hero-list.component.html',
   styleUrls: []
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private selectedId: number;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
     this.heroes = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getHeroes();
      });
  }

  isSelected(hero: Hero) { return hero.id === this.selectedId; }


  onSelect(hero: Hero): void {
    this.router.navigate(['/hero', hero.id]);
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/