import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { CourseService, Course } from '../courses/course.service';

@Component({
  template:  `
    <div class="page-header"><h2>Manage your courses here</h2></div>
    <div class="list-group">
        <button type="button" *ngFor="let course of courses | async"
            [class.selected]="isSelected(course)"
            (click)="onSelect(course)"
            class="list-group-item listItem">
            <span class="badge-left">{{ course.id }}</span> {{ course.name }}
        </button>
    </div>
  `
})
export class ManageCoursesComponent implements OnInit {
    courses: Observable<Course[]>;
    private selectedId: number;

    constructor(
        private service: CourseService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.courses = this.route.params
            .switchMap((params: Params) => {
                this.selectedId = +params['id'];
                return this.service.getCourses();
            });
    }

    isSelected(course: Course) { return course.id === this.selectedId; }


    onSelect(course: Course): void {
        this.router.navigate(['/course', course.id, { admin: 'admin' }]);
    }
}
