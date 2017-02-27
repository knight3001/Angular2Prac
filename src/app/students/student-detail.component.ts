import {
  Component, OnInit, HostBinding,
  trigger, transition,
  animate, style, state
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Student } from './student.service';
import { DialogService } from '../dialog.service';

@Component({
  template: `
  <div class="form-horizontal" *ngIf="student">
    <h3 class="centerText">{{ editName }}</h3>
    <div class="form-group">
      <label class="col-sm-2 control-label">Id:</label>
      <div class="col-sm-10"><p class="form-control-static">{{ student.id }}</p></div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">Name:</label>
      <div class="col-sm-10">
          <input [(ngModel)]="editName" placeholder="name" name="name" class="form-control"
          #name="ngModel" required minlength="4" maxlength="24" />
          <div *ngIf="name.errors && (name.dirty || name.touched)"
              class="alert alert-danger">
              <div [hidden]="!name.errors.required">
                Name is required
              </div>
              <div [hidden]="!name.errors.minlength">
                Name must be at least 4 characters long.
              </div>
              <div [hidden]="!name.errors.maxlength">
                Name cannot be more than 24 characters long.
              </div>
          </div>
       </div>
    </div>
    <div class="form-group">
      <div class="col-sm-10 col-sm-offset-2">
        <button (click)="save()" type="button" class="btn btn-primary">Save</button>
        <button (click)="cancel()" type="button" class="btn btn-default">Cancel</button>
      </div>
    </div>
  </div>
  `,
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
export class StudentDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }

  student: Student;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    console.log(this.route.data)
    this.route.data
      .subscribe((data: { student: Student }) => {
        this.editName = data.student.name;
        this.student = data.student;
      });
  }

  cancel() {
    this.gotoStudents();
  }

  save() {
    this.student.name = this.editName;
    this.gotoStudents();
  }

  canDeactivate(): Promise<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.student || this.student.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }


  gotoStudents() {
    let studentId = this.student ? this.student.id : null;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: studentId, foo: 'foo' }], { relativeTo: this.route });
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
