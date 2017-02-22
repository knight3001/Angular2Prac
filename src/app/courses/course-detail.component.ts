import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { CourseService, Course } from './course.service';

@Component({
   moduleId: module.id,
   selector: 'app-course',
   templateUrl: 'course-detail.component.html',
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
export class CourseDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }

  course: Course;
  private admin: string;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => {
            this.admin = params['admin'];
            return this.courseService.getCourse(+params['id']);
        })
      .subscribe((course: Course) => this.course = course);
  }

  gotoCourses(): void {
      let courseId = this.course ? this.course.id : null;
      if (this.admin === 'admin') {
          this.router.navigate(['/admin/courses', { id: courseId }]);
      }
      else{
          this.router.navigate(['/courses', { id: courseId, foo: 'foo' }]);
      }
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/