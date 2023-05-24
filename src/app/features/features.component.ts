import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  controlJson = [
    {
      'label': 'Name',
      'controlName': 'name',
      'type': 'text',
      'validators': [
        {
          'name': 'required',
          'value': true
        }
      ],
      'errorMessages': {
        required: 'Name is required.',
        email: ''
      }
    },
    {
      'label': 'Password',
      'controlName': 'password',
      'type': 'password',
      'validators': [
        {
          'name': 'required',
          'value': true
        }
      ],
      'errorMessages': {
        required: 'Password is required.',
        email: ''
      }
    },
    {
      'label': 'Email',
      'controlName': 'email',
      'type': 'email',
      'validators': [
        {
          'name': 'required',
          'value': true
        },
        {
          'name': 'email',
          'value': true
        }
      ],
      'errorMessages': {
        required: 'Email is required.',
        email: 'Invalid email address.'
      }
    },
    {
      'label': 'Date of Birth',
      'controlName': 'dob',
      'type': 'date',
      'validators': [
        {
          'name': 'required',
          'value': true
        }
      ],
      'errorMessages': {
        required: 'Date is required.',
        email: ''
      }
    }
  ];
  /*testControl: FormControl = new FormControl(undefined);
  testControl1: FormControl = new FormControl(undefined, Validators.required);
  testControl2: FormControl = new FormControl(undefined, Validators.required);*/
  constructor(private router: Router) {
  }
  getFormControls() {
    return this.form.controls;
  }
  ngOnInit(): void {
    this.initializeForm();
  }
  submit() {
    console.log(this.form.value);
  }

//   for PopUp modal
/*  openPopup() {
    console.log('here')
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }*/

  navigate() {
    this.router.navigate(['/input']);
  }

  private initializeForm() {
    this.controlJson.forEach(control => {
      let validators: any[] = [];
      control.validators.forEach(validator => {
        switch (validator?.name) {
          case 'required':
            validators.push(Validators.required);
            break;
          case 'email':
            validators.push(Validators.email);
            break;
        }
      });
      this.form.addControl(control.controlName, new FormControl('', validators));
    });
  }
}
