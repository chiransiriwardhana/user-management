  import { Component, Input } from '@angular/core';
  import { FormControl, FormGroup, Validators, NonNullableFormBuilder } from '@angular/forms';
  import { UserService } from '../services/user.service';

  @Component({
    selector: 'app-usr-edit',
    templateUrl: './usr-edit.component.html',
    styleUrl: './usr-edit.component.css',
  })

  export class UsrEditComponent {
    @Input() ID: number;
    isVisible = false;
    isConfirmLoading = false;
    demoAgeValue = null
      
    usrForm: FormGroup<{
    id: FormControl<number>;
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    age: FormControl<number>;
    email: FormControl<string>;
  }>;

  constructor(private fb: NonNullableFormBuilder, private _usrService: UserService) {
    // validate user inputs of edit pop up window.
    this.usrForm = this.fb.group({
      id:[0, [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: [0,[Validators.required]],
      email: ['', [Validators.email, Validators.required]]
    });
    this.ID = 1
  }
  showModal(): void {
    // when user click edit button, pop up window become visible
    this.isVisible = true;
    console.log("editing...")
  }

  handleCancel(): void {
      // when user click cancel button, pop up window become invisible
      this.isVisible = false;
  }

  submitForm(id: number): void {
    if (this.usrForm.valid) {
        this.usrForm.value.id = id
        // when user click submit button of edit pop up window, user data is updated
        this._usrService.updateUser(id, this.usrForm.value).subscribe({
          next: (val: any) => {
              
            this.isConfirmLoading = true;
            // After 1 second pop window is closed
            setTimeout(() => {
              this.isVisible = false;
              this.isConfirmLoading = false;
            }, 1000);

            console.log('response from put: ', val);
              
          },
            // If there is error when updating user details, prints it into console.
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
