# Form Submitting Application
**Frontend** - React with Redux and Typescript<br />
**Backend** - Express with Typescript and Prisma<br />

## App Features
- Application provides user a way to enter data in a form in browser. Initially form submit button is disabled until user enters valid data into form inputs and clicks on a checkbox
- Validation rules are implemented for input values and appropriate validation error messages are displayed beneath input fields if the data user entered is not valid 
- When a button becomes enabled user can click on it to save data from a form to the database

## Running App
To run this app you need Node.js installe on your machine.
1. Position your self in client folder and install needed packages
```bash
  cd ./client
  npm install
```
2. Create .env file and set REACT_APP_POST_URL variable to the valid form post route (e.g. http://localhost:8000/formData)<br />
3. Position your self in backend folder and install needed packages
```bash
  cd ../server
  npm install
```
4. You coud create .env file and set PORT variable to the port value you want to use but if you skip this step port value will default to 8000 (e.g. http://localhost:8000/formData)<br />
5. Run migrations to generate SQLite self-cointained lightweight database from Prisma schema
```bash
npx prisma migrate dev --name initialize
```
**Note:** You can enter the name of your choice after the --name parameter. Keep in mind that the migration name is helpful to remember the changes you made.

6. To run both server and the client in the browser, position your self in client folder and run npm script that will run both the client and the server
```bash
  cd ../client
  npm start
```
