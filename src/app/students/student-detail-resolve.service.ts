import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Student, StudentService } from './student.service';

@Injectable()
export class StudentDetailResolve implements Resolve<Student> {
  constructor(private cs: StudentService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Student> {
    let id = route.params['id'];

    return this.cs.getStudent(id).then(student => {
      if (student) {
        return student;
      } else { // id not found
        this.router.navigate(['/student-center']);
        return false;
      }
    });
  }
}
