import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
   constructor(
    public dialogRef: MatDialogRef<AddContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]); 
  firstnameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z]+$/)
  ]);
  lastnameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z]+$/)
  ]);
  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/(\(?[0-9]{3}\)?-?\s?[0-9]{3}-?[0-9]{4})/)
  ]);
  statusControl = new FormControl();
  idControl = new FormControl();
  contactForm: FormGroup = new FormGroup({
    firstname: this.firstnameFormControl,
    email: this.emailFormControl,
    lastname: this.lastnameFormControl,
    phone: this.phoneFormControl,
    status:this.statusControl,
    id:this.idControl
  });


  getRequiredErrorMessage(field) {
    return this.contactForm.get(field).hasError('required') ? 'You must enter a value' : 
    this.contactForm.get(field).hasError('pattern') ? 'Name must be in alphabets only' : '';
  }

  getEmailErrorMessage() {
    return this.emailFormControl.hasError('required') ? 'You must enter a value' :
      this.emailFormControl.hasError('email') ? 'Not a valid email' : '';
  }

  getPhoneErrorMessage() {
    return this.phoneFormControl.hasError('required') ? 'You must enter a value' :
      this.phoneFormControl.hasError('pattern') ? 'Format must be (xxx) xxx-xxxx' : '';
  }

  ngOnInit() {}

}
