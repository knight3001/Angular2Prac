import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Student, StudentService } from './student.service';

@Component({
  template: `
    <div class="list-group">
      <button type="button" *ngFor="let student of students | async"
        [class.selected]="isSelected(student)"
        (click)="onSelect(student)"
        class="list-group-item listItem">
        <span class="badge-left">{{ student.id }}</span> {{ student.name }}
      </button>
    </div>
    <router-outlet></router-outlet>
  `
})
export class StudentListComponent implements OnInit {
  students: Observable<Student[]>;
  selectedId: number;

  constructor(
    private service: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  isSelected(student: Student) {
    return student.id === this.selectedId;
  }

  ngOnInit() {
    this.students = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getStudents();
      });
  }

  onSelect(student: Student) {
    this.selectedId = student.id;

    // Navigate with relative link
    this.router.navigate([student.id], { relativeTo: this.route });
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/