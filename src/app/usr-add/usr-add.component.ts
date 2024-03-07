  import { Component } from '@angular/core';
  import { FormControl, FormGroup, Validators, NonNullableFormBuilder } from '@angular/forms';
  import { UserService } from '../services/user.service';

  @Component({
    selector: 'app-usr-add-edit',
    templateUrl: './usr-add.component.html',
    styleUrl: './usr-add.component.css',
  })


  export class UsrAddEditComponent {

    isVisible = false;
    isConfirmLoading = false;
    demoAgeValue = null
    usrForm: FormGroup<{
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    age: FormControl<number>;
    email: FormControl<string>;
  }>;

  constructor(private fb: NonNullableFormBuilder, private _usrService: UserService) {
    this.usrForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: [0, [Validators.required]],
      email: ['', [Validators.email, Validators.required]]
    });
  }
    showModal(): void {
      this.isVisible = true;
    }

    // handleOk(): void {
    //   this.isConfirmLoading = true;
    //   setTimeout(() => {
    //     this.isVisible = false;
    //     this.isConfirmLoading = false;
    //   }, 1000);
    // }

    handleCancel(): void {
      this.isVisible = false;
    }

    submitForm(): void {
      if (this.usrForm.valid) {
        this._usrService.addUser(this.usrForm.value).subscribe({
          next: (val: any) => {
            
            this.isConfirmLoading = true;
            setTimeout(() => {
              this.isVisible = false;
              this.isConfirmLoading = false;
            }, 1000);
            console.log('response from post: ', val);
          },
          error:(err: any) => {
            console.log("error", err)
          }
        })

      } else {
        Object.values(this.usrForm.controls).forEach(control => {
          if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
        });
      }
    } 
  }
