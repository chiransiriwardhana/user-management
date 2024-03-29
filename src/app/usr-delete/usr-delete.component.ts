  import { Component, Input } from '@angular/core';
  import { NzModalService } from 'ng-zorro-antd/modal';
  import { UserService } from '../services/user.service';

  @Component({
    selector: 'app-usr-delete',
    templateUrl: './usr-delete.component.html',
    styleUrl: './usr-delete.component.css'
  })

  export class UsrDeleteComponent {
    isVisible = false;
    @Input() ID: number;
    @Input() name: string;
    constructor(private nzModalService: NzModalService, private _usrService: UserService) {
      this.ID = 1
      this.name = ''
    }

    handleCancel(): void {
      // when user click cancel button of pop up windo it become invisible
      this.isVisible = false;
    }

    showConfirm(id:number, name: string): void {
      this.nzModalService.confirm({
        nzTitle: `Do you want to delete user: ${name} ?`,
        nzContent: '',
        nzOkText: 'OK',
        nzCancelText: 'Cancel',
        nzOnOk: () => {
          // when user click ok button of confirmation pop up box, user is deleted
          this._usrService.deleteUser(id).subscribe({
            next:(res) => {
              console.log("response from delete: ", res)
            },
            error:console.log,
          })
        }
      });
    }
  }
