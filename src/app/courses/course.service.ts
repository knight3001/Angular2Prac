import { Injectable } from '@angular/core';

export class Course {
  constructor(public id: number, public name: string, public description: string, public score: number, public students: number[]) { }
}

let COURSES = [
  new Course(11, 'PHP Introduction', 'PHP is the best programming Language.', 3, []),
  new Course(12, 'Python Language', 'No! Pythin is the real BEST!', 4, []),
  new Course(13, 'Algorithm Design', 'This is taught by a university professor.', 5, []),
  new Course(14, 'Senior Web Framework', 'The only Senior Course.', 1, []),
  new Course(15, 'Web Socket Analyse', 'I have not learned this one.', 2, [] )
];

let coursesPromise = Promise.resolve(COURSES);

@Injectable()
export class CourseService {

  getCourses() { return coursesPromise; }

  getCourse(id: number | string) {
    return coursesPromise
      .then(courses => courses.find(course => course.id === +id));
  }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
