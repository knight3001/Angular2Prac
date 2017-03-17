import { Component } from '@angular/core';

import {
  TeacherService, TeacherService2, TeacherService3,
  UniversityService, UniversityService2, DegreeService
} from './teacher.service';

////////// CTeacherComponent ////////////
@Component({
  selector: 'c-teacher',
  template: `<li><span class="flashRow">{{name}}</span><br />{{description}}</li>`,
  providers: [
    { provide: TeacherService, useClass: TeacherService3 }
  ]
})
export class CTeacherComponent {
  description: string;
  name: string;
  constructor(teacherService: TeacherService) {
    this.name = `${teacherService.getTeacher().name}`;
    this.description = `${teacherService.getTeacher().description}\n` + `(${teacherService.name})`;
  }
}

////////// BTeacherComponent ////////////
@Component({
  selector: 'b-teacher',
  template: `
    <li><span class="flashRow">{{name}}</span><br />{{description}}</li>
    <c-teacher></c-teacher>
  `,
  providers: [
    { provide: TeacherService,    useClass: TeacherService2 },
    { provide: UniversityService, useClass: UniversityService2 }
  ]
})
export class BTeacherComponent {
  description: string;
  name: string;
  constructor(teacherService: TeacherService) {
    this.name = `${teacherService.getTeacher().name}`;
    this.description = `${teacherService.getTeacher().description}\n` + `(${teacherService.name})`;
  }
}

////////// ATeacherComponent ////////////
@Component({
  selector: 'a-teacher',
  template: `
  <li><span class="flashRow">{{name}}</span><br />{{description}}</li>
  <b-teacher></b-teacher>`
})
export class ATeacherComponent {
  description: string;
  name: string;
  constructor(teacherService: TeacherService) {
    this.name = `${teacherService.getTeacher().name}`;
    this.description = `${teacherService.getTeacher().description}\n` + `(${teacherService.name})`;
  }
}
////////// TeachersComponent ////////////
@Component({
  selector: 'app-teachers',
  template: `
  <ol class="rounded-list">
    <a-teacher></a-teacher>
  </ol>
  `
})
export class TeachersComponent { }

////////////////

export const teacherComponents = [
  TeachersComponent,
  ATeacherComponent, BTeacherComponent, CTeacherComponent
];

// generic teacher-related services
export const teacherServices = [
 TeacherService, UniversityService, DegreeService
];
