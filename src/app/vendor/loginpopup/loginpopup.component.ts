import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpopup',
  templateUrl: './loginpopup.component.html',
  styleUrls: ['./loginpopup.component.scss']
})
export class LoginpopupComponent implements OnInit {

  formGroup:FormGroup

  constructor(
              private fb:FormBuilder, 
              public dialogRef: MatDialogRef<LoginpopupComponent>,
              private router:Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.formGroup = this.fb.group({
      'mobilenumber':['', [Validators.required, Validators.minLength(10)]],
      'password':['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
      'validate':['']
    })
  }

  getErrorMobileno(){
    return this.formGroup.get('mobilenumber').hasError('required') ? 'Mobile Number is required':
      this.formGroup.get('mobilenumber').hasError('minlength') ? 'Mobile number is required exactly 10 digit.':'';
  }
  getErrorPassword(){
    return this.formGroup.get('password').hasError('required') ? 'Password is required.':
      this.formGroup.get('password').hasError('minlength') ? 'Password is required at least 6 digit.':
      this.formGroup.get('password').hasError('maxlength') ? 'Password cannot be longer than 50 digit.' :'';
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}

  // getError(el) {
  //   switch (el) {
  //     case 'user':
  //       if (this.formGroup.get('username').hasError('required')) {
  //         return 'Mobile Number is required' : this.formGroup.get('username').hasError('maxlength');
  //       }
  //       break;
  //     case 'pass':
  //       if (this.formGroup.get('password').hasError('required')) {
  //         return 'Password is required';
  //       }
  //       break;
  //     default:
  //       return '';
  //   }
  // }

  onSubmit(post) {
    console.log("clicked");
    this.router.navigate(['/dashboard']);
  }

}
