import { Injectable } from '@angular/core';

/// Model ///
export class Teacher {
  name = 'ALbert Einstein';
  constructor(public university: University, public degree: Degree) { }

  get description() {
    return `graduated from ` + `${this.university.name}\n` +
           `with a ${this.degree.title} degree\n` +
           `paid with $${this.degree.salary} per year.`;
  }
}

export class University {
  name = 'University of Queensland';
}

export class Degree {
  title  = 'Assistant Professor';
  salary = 90000;
}

//// University services ///
@Injectable()
export class UniversityService {
  id = 'U1';
  getUniversity() { return new University(); }
}

@Injectable()
export class UniversityService2 {
  id = 'U2';
  getUniversity() {
    const uni = new University();
    uni.name = 'Griffith University';
    return uni;
  }
}

//// Degree services ///
@Injectable()
export class DegreeService {
  id = 'D1';
  getDegree() { return new Degree(); }
}

/// Car Services ///
@Injectable()
export class TeacherService {
  id = 'T1';
  constructor(
    protected uniService: UniversityService,
    protected degreeService: DegreeService) { }

  getTeacher() {
    return new Teacher(
      this.uniService.getUniversity(),
      this.degreeService.getDegree());
  }

  get name() {
    return `${this.id}-${this.uniService.id}-${this.degreeService.id}`;
  }
}

@Injectable()
export class TeacherService2 extends TeacherService {
  id = 'T2';
  constructor(
    protected uniService: UniversityService,
    protected degreeService: DegreeService) {
    super(uniService, degreeService);
  }
  getTeacher() {
    const teacher = super.getTeacher();
    teacher.name = 'Stephen Hawking';
    return teacher;
  }
}

@Injectable()
export class TeacherService3 extends TeacherService2 {
  id = 'T3';
  constructor(
    protected uniService: UniversityService,
    protected degreeService: DegreeService) {
    super(uniService, degreeService);
  }
  getTeacher() {
    const teacher = super.getTeacher();
    teacher.name = 'Isaac Newton';
    return teacher;
  }
}
