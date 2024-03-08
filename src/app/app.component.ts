  import { Component, OnInit } from '@angular/core';
  import { User } from './Model';
  import { UserService } from './services/user.service';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent implements OnInit {
    title = 'user-management-system';
    // When application is loading this function is triggered to load data from the server. Then data is shown in table view
    ngOnInit(): void {
      this.getUserList()
    }

    constructor(private _usrService: UserService) {}

    public listOfData: User[] = []
    // When application is loading this function is triggered to load data from the server. Then data is shown in table view
    getUserList() {
      this._usrService.getUser().subscribe({
        next: (res) => {
          this.listOfData = res.users
          console.log("User", this.listOfData)
        }
      })
    }
  }
