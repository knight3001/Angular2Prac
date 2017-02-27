export class Student {
  constructor(public id: number, public name: string, public gender: number, public dob: Date) { }
}

const STUDENTS = [
  new Student(10001, 'Terry White', 2, new Date('1988-11-16')),
  new Student(10002, 'Sky Rain', 1, new Date('1985-01-06')),
  new Student(10003, 'Giant Booth', 1, new Date('1987-12-01')),
  new Student(10004, 'Smith Jack', 2, new Date('1988-02-26')),
];

let studentsPromise = Promise.resolve(STUDENTS);

import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  static nextStudentId = 11000;

  getStudents() { return studentsPromise; }

  getStudent(id: number | string) {
    return studentsPromise
      .then(students => students.find(student => student.id === +id));
  }


  addStudent(name: string, gender: number, dob: Date) {
    name = name.trim();
    if (name) {
      let student = new Student(StudentService.nextStudentId++, name, gender, dob);
      studentsPromise.then(students => students.push(student));
    }
  }
}

