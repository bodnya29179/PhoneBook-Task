# Phone Book
This project was created using the Angular CLI (v. 8.3.12) and the Node.js (v. 10.15.3) server environment. The following packages (dependencies) are used for the server side: cors (v. 2.8.5), express (v. 4.17.1), mysql (v. 2.17.1), nodemon (v. 1.19.4). The following packages are used for the client part: bootstrap, jquery, font-awesome, angular-font-awesome.
The "PhoneBook" application allows the user to see and edit contact information. You can also add new contacts and delete them. All data is stored in the MySQL database "phone_numbers". The server interacts with the database using SQL queries (CRUD) and stored procedures.

## Requirements

* Node.js
* Angular CLI
* XAMPP-Control
* Git

## Common setup

### Clone the repository ###

```bash
git clone https://github.com/bodnya29179/PhoneBook-Task.git
```
Also you can download the repository as a `.zip` file.

### Install npm packages (dependencies) ###

```bash
cd back-end_nodejs
npm install
npm install express --save
npm install cors --save
npm install mysql --save
npm install nodemon --save
```

```bash
cd front-end_angular/phone-numbers
npm install
npm install bootstrap --save
npm install jquery --save
npm install font-awesome --save
npm install angular-font-awesome --save
```

Shut it down manually with `Ctrl-C`.

### Install XAMPP-Control ###
Install XAMPP-Control using this link https://www.apachefriends.org/ru/download.html.
Paste the `phone_numbers` folder in the following directory: `..\xampp\mysql\data`. In the end you will have the path `..\xampp\mysql\data\phone_numbers`. Three files should to be in the `phone_numbers` folder.

## Run

Run the program `XAMPP Control Panel`. Start `Apache` and `MySQL` modules.

Navigate to `back-end_nodejs` folder using `cd back-end_nodejs` in the terminal. Use `nodemon server.js` for a run back-end part.

Navigete to `front-end_angular\phone-numbers` folder using `cd front-end_angular\phone-numbers` in the terminal. Use `ng serve` for a run front-end part. Navigate to `http://localhost:4200/` in your browser. You can also use the `ng serve -o` in the terminal to automatically open a web page.

## ScreenShots

Note: All mobile numbers are invented.

### Table

<img src="https://i.ibb.co/zfD3NV9/pic1.png" alt="Table">

### Contact information editing form

<img src="https://i.ibb.co/bPsjvRk/pic2.png" alt="Update form">

### Contact information adding form

<img src="https://i.ibb.co/G0fsfvH/pic3.png" alt="Create form">
