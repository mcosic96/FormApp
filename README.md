# Form Submitting Application
**Frontend** - React with Redux and Typescript<br />
**Backend** - Express with Typescript and Prisma<br />

## App Features
- The application provides the user a way to enter data in a form in the browser. Initially, the form submit button is disabled until the user enters valid data into form inputs and clicks on a checkbox
- Validation rules are implemented for input values and appropriate validation error messages are displayed beneath input fields if the data user entered is not valid 
- When a button becomes enabled, user can click on it to save data from a form to the database

## Running App
To run this app you need Node.js installed on your machine.
1. Position yourself in the client folder and install the needed packages
```bash
  cd ./client
  npm install
```
2. Create a .env file and set the REACT_APP_POST_URL variable to the valid form post route (e.g. http://localhost:8000/formData)<br />
3. Position yourself in the backend folder and install the needed packages
```bash
  cd ../server
  npm install
```
4. You could create a .env file and set the PORT variable to the port value you want to use, but if you skip this step port value will default to 8000 (e.g. http://localhost:8000/formData)<br />
5. Run migrations to generate SQLite self-contained lightweight database from Prisma schema
```bash
npx prisma migrate dev --name initialize
```
**Note:** You can enter the name of your choice after the --name parameter. Keep in mind that the migration name is helpful to remember the changes you made.

6. To run both the server and the client in the browser, position yourself in the client folder and run the npm script that will run both the client and the server
```bash
  cd ../client
  npm start
```
