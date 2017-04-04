import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { CourseService, Course } from './course.service';

@Component({
   moduleId: module.id,
   selector: 'app-courses',
   templateUrl: 'course-list.component.html',
   styleUrls: []
})
export class CourseListComponent implements OnInit {
  errorMessage: string;
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
    this.router.navigate(['/course', course.id]);
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
