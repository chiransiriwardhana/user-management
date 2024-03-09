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
   ### git clone https://github.com/chiransiriwardhana/user-management.git
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

## Responsiveness

<img width="1429" alt="Screenshot 2024-03-09 at 9 32 58 AM" src="https://github.com/chiransiriwardhana/user-management/assets/47823522/1ee7cb1d-35be-4269-bbe7-ef96676b3daa">
<img width="1436" alt="Screenshot 2024-03-09 at 9 33 28 AM" src="https://github.com/chiransiriwardhana/user-management/assets/47823522/022f76ef-74f0-4057-b148-b0e63ae7517b">
<img width="1427" alt="Screenshot 2024-03-09 at 9 33 58 AM" src="https://github.com/chiransiriwardhana/user-management/assets/47823522/443ccc52-ed14-4893-a2cb-69bd1502c76c">
<img width="1430" alt="Screenshot 2024-03-09 at 9 34 24 AM" src="https://github.com/chiransiriwardhana/user-management/assets/47823522/bba16719-a989-4c5e-b4f8-a7bd058bec74">
<img width="1436" alt="Screenshot 2024-03-09 at 9 34 57 AM" src="https://github.com/chiransiriwardhana/user-management/assets/47823522/f8828c13-c7fc-4c22-82dc-72c1f0a494d6">
<img width="1440" alt="Screenshot 2024-03-09 at 9 35 25 AM" src="https://github.com/chiransiriwardhana/user-management/assets/47823522/cc3b1edb-8076-4c70-b571-b017b2cf43a8">
<img width="1439" alt="Screenshot 2024-03-09 at 9 35 48 AM" src="https://github.com/chiransiriwardhana/user-management/assets/47823522/dc8bd0bf-790b-4b19-a26b-6ec1635caa66">
<img width="1052" alt="Screenshot 2024-03-09 at 9 36 16 AM" src="https://github.com/chiransiriwardhana/user-management/assets/47823522/4f4d4bcd-244d-416e-8a65-c33c4114a6ca">

