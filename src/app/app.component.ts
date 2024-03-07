  import { Component, OnInit } from '@angular/core';
  import { User } from './Model';
  import { UserService } from './services/user.service';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent implements OnInit{
    title = 'user-management-system';

    // resizing = false;
    // isVisible = false;

    ngOnInit(): void {
      this.getUserList()
    }

    constructor(private _usrService: UserService) {}

    public listOfData: User[] = []
    
    getUserList() {
      this._usrService.getUser().subscribe({
        next: (res) => {
          this.listOfData = res.users
          console.log("User", this.listOfData)
        }
      })
    }
  }
