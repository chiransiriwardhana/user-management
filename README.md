# UserManagementSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.3.

## Setup project
1. First you need to have node js and npm in your local machine as the pre-requiest. If you have installed node.js and npm in your machine you can check its version by following command
   ### node --version
   ### npm --version
2. Then you need to install angular cli. To do this you can use the following command
   ### npm install -g @angular/cli
   you can check the angular cli version by following command
   ### ng version
3. Create new folder called "User Management System" and go into that folder using
   ### cd "User Management System"
4. Clone the github project into that folder using
   ### git clone
5. Go into project folder using
   ### cd user-management
6. Now you're in project folder. Then you need to install project dependencies using.
   ### npm install
7. Build the project and start the server using
   ### ng serve -o
   This command cause to open your default browser on http://localhost:4200/

## Application beahvior for user events.
 In this project I used the https://dummyjson.com/users as data source and use https://dummyjson.com/docs/users documentation. According to the documentation server doesn't allow to create new entry or delete existing entries. Instead it simulates the post, delete, and update methods. For example if you use 
 {
    firstName: 'Muhammad',
    lastName: 'Ovi',
    age: 250,
    /* other user data */
  }
  json payload for adding new user then server will response with output 
  {
  "id": 101,
  "firstName": "Muhammad",
  "lastName": "Ovi",
  "age": 250,
  /* other user data */
}
But server doesn't create new entry. For all new user create events server reterns json payload with id: 101. Hence, it only simulates the http methods. Therefore, In my application you can't see increase of table entries or reduction of table entries. Due to this reason, I print the server response of each HTTP method to identify whether the request is successful or not. 

### For example, Post method outcome is similar to below images.
<img width="1428" alt="Screenshot 2024-03-08 at 12 24 59 PM" src="https://github.com/chiransiriwardhana/user-management/assets/47823522/ff4642b0-8926-4d84-b5eb-0689777d24dd">
<img width="1435" alt="Screenshot 2024-03-08 at 12 25 36 PM" src="https://github.com/chiransiriwardhana/user-management/assets/47823522/6d9419c2-f96f-4755-80ab-273db1c7d047">

### Update method outcome is similar to below images.
<img width="1433" alt="Screenshot 2024-03-08 at 12 27 11 PM" src="https://github.com/chiransiriwardhana/user-management/assets/47823522/6532d81c-2324-4bcb-9852-7d755bab6a86">
<img width="1435" alt="Screenshot 2024-03-08 at 12 27 57 PM" src="https://github.com/chiransiriwardhana/user-management/assets/47823522/420249ee-f283-41e0-aa84-14ab22a4a9c2">

### Delete method outcome is similar to below images.
<img width="1440" alt="Screenshot 2024-03-08 at 12 29 27 PM" src="https://github.com/chiransiriwardhana/user-management/assets/47823522/ab0168d6-0d35-45a4-b831-e506232eead7">
<img width="1440" alt="Screenshot 2024-03-08 at 12 30 00 PM" src="https://github.com/chiransiriwardhana/user-management/assets/47823522/78ca35a0-da94-4194-9625-d8d15228e64b">

### When application is loading it automatically fetch data from the server. Hence, there is not special user event(button click, etc.) for fetching data
<img width="1440" alt="Screenshot 2024-03-08 at 12 33 20 PM" src="https://github.com/chiransiriwardhana/user-management/assets/47823522/8892b779-c5b6-4051-a8a3-94a761f94c61">



