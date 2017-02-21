import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { HeroService, Hero } from '../heroes/hero.service';

@Component({
  template:  `
    <div class="page-header"><h2>Manage your heroes here</h2></div>
    <div class="list-group">
        <button type="button" *ngFor="let hero of heroes | async"
            [class.selected]="isSelected(hero)"
            (click)="onSelect(hero)"
            class="list-group-item listItem">
            <span class="badge-left">{{ hero.id }}</span> {{ hero.name }}
        </button>
    </div>
  `
})
export class ManageHeroesComponent implements OnInit {
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
        this.router.navigate(['/hero', hero.id, { admin: 'admin' }]);
    }
}
