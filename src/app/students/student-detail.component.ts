import {
  Component, OnInit, HostBinding,
  trigger, transition,
  animate, style, state
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Student } from './student.service';
import { DialogService } from '../dialog.service';
import { DateFormatString } from '../globals';

@Component({
  template: `
  <form class="form-horizontal" *ngIf="student" (ngSubmit)="save()" #studentForm="ngForm">
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
      <label class="col-sm-2 control-label">Gender:</label>
      <div class="col-sm-10">
            <button type="button" [ngClass]="(selectGender === 2 ? 'btn btn-success' : 'btn btn-default')" (click)="GenderSelect(2)">
              <span class="icon-extra icon-boy" aria-hidden="true"></span> Male
            </button>
            <button type="button" [ngClass]="(selectGender === 1 ? 'btn btn-success' : 'btn btn-default')" (click)="GenderSelect(1)">
              <span class="icon-extra icon-girl" aria-hidden="true"></span> Female
            </button>
            <div *ngIf="selectGender === 0 && this.student"
              class="alert alert-danger">
              <div>Gender is required</div>
          </div>
      </div>
    </div>

    <div class="form-group">
      <label class="col-sm-2 control-label">D.O.B:</label>
      <div class="col-sm-4">
          <input [(ngModel)]="editDOB" type="date" placeholder="Date of Birth" name="dob" class="form-control"
          #dob="ngModel" required />
          <div *ngIf="dob.errors && (dob.dirty || dob.touched)"
              class="alert alert-danger">
              <div [hidden]="!dob.errors.required">
                D.O.B is required
              </div>
          </div>
       </div>
    </div>

    <div class="form-group">
      <div class="col-sm-10 col-sm-offset-2">
        <button (click)="save()" type="button" [disabled]="!studentForm.form.valid || 
                 selectGender === 0" class="btn btn-primary">Save</button>
        <button (click)="cancel()" type="button" class="btn btn-default">Cancel</button>
      </div>
    </div>

  </form>
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
  selectGender: number;
  editDOB: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { student: Student }) => {
        this.editName = data.student.name;
        this.selectGender = data.student.gender;
        this.editDOB = DateFormatString(data.student.dob);
        this.student = data.student;
      });
  }

  cancel() {
    this.gotoStudents();
  }

  save() {
    this.student.name = this.editName;
    this.student.gender = this.selectGender;
    this.student.dob = new Date(this.editDOB);
    this.gotoStudents();
  }

  GenderSelect(Gender: number) {
    if (this.selectGender === Gender) {
      this.selectGender = 0;
    }
    else {
      this.selectGender = Gender;
    }
  }

  canDeactivate(): Promise<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.student || (this.student.name === this.editName && this.student.gender === this.selectGender
      && new Date(this.editDOB).getTime() === this.student.dob.getTime())) {
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
