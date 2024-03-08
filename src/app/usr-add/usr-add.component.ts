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

    handleCancel(): void {
      this.isVisible = false;
    }
    // When submit button is clicked new user is added by calling service method
    submitForm(): void {
      if (this.usrForm.valid) {
        this._usrService.addUser(this.usrForm.value).subscribe({
          next: (val: any) => {
            
            this.isConfirmLoading = true;
            // Set timeout. Due to this pop up message box close after 1 second
            setTimeout(() => {  
              this.isVisible = false;
              this.isConfirmLoading = false;
            }, 1000);
            console.log('response from post: ', val);
          },

          // If there is error when adding new user print error into console.
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
