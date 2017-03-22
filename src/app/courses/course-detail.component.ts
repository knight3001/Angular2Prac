import 'rxjs/add/operator/switchMap';
import {
  Component, OnInit, HostBinding,
  trigger, transition, animate,
  style, state,
  OnChanges, Input
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { CustomValidators } from 'ng2-validation';
import { forbiddenNameValidator } from '../forbidden-name.directive';

import { CourseService, Course } from './course.service';
import { Student, StudentService } from '../students/student.service';

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
export class CourseDetailComponent implements OnChanges, OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }

  @Input() course: Course;
  private admin: string;
  courseForm: FormGroup;
  studentList: Promise<Student[]>;

  constructor(
    private courseService: CourseService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnChanges() {
    this.courseForm.reset({
        name: this.course.name,
        description: this.course.description,
        score: this.course.score,
        students: this.course.students
    });
  }

  ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => {
            this.admin = params['admin'];
            return this.courseService.getCourse(+params['id']);
        })
      .subscribe((course: Course) => {
        this.course = course;
        this.ngOnChanges();
        this.studentList = this.studentService.getStudents();
      });
  };

  createForm() {
    this.courseForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24),
        forbiddenNameValidator(/java/i)],
      ],
      description: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(255)]
        ],
      score: ['', [
        Validators.required,
        CustomValidators.range([1, 5])]
      ],
      students: [[], [
        Validators.required]
      ]
    });

    this.courseForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.courseForm) { return; }
    const form = this.courseForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'name': '',
    'description': '',
    'score': '',
    'students': []
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 24 characters long.',
      'forbiddenName': '"JAVA" course is out of date.'
    },
    'description': {
      'required': 'Description is required.',
      'minlength': 'Name must be at least 10 characters long.',
      'maxlength': 'Name cannot be more than 255 characters long.'
    },
    'score': {
      'required': 'Score is required.',
      'range': 'Score range is from 1 to 5'
    },
    'students': {
      'required': 'Student is required.'
    }
  };

  onSubmit() {
    this.course.name = this.courseForm.get('name').value;
    this.course.description = this.courseForm.get('description').value;
    this.course.score = this.courseForm.get('score').value;
    this.gotoCourses();
  }

  revert() { this.ngOnChanges(); }

  gotoCourses(): void {
    let courseId = this.course ? this.course.id : null;
    if (this.admin === 'admin') {
      this.router.navigate(['/admin/courses', { id: courseId }]);
    }
    else {
      this.router.navigate(['/courses', { id: courseId, foo: 'foo' }]);
    }
  }
}
