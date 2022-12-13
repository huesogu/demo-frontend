# Prerequisites

Install node.js (make sure to use the LTS version)

Retrieve the project on Github https://github.com/huesogu/demo-frontend-v2

Install dependencies with the command `npm install`


## Start the application

npm run start (it may take some times to build)

Application endpoint url: 
	http://localhost:4200

Api url:
	http://localhost:3000/todos
	http://localhost:3000/users


## Exercice

Extend the project `demo-frontend-v2` to implement an application able to manage (create , edit and delete) a list of todos
Use the diagrams join to source code

## Rules

- Two filters must be implemented (name of the user and completed todo)
- By default, no filter are selected and all rows of the table are displayed (no pagination needed)

- The table should be filtered by the name of the user and also by completed todos (Yes/No)

- Display a table with the following columns:
	- name of the user
	- title of todo
	- status of completed (Yes or No)
	- action buttons (edit and delete) 

- Below the table, implement a form to create/edit a todo item with save button (use Reactive Form) 
	- Name of the user (Mandatory)
	- Tiltle of the todo (max length 500 chararcters and mandatory)
	- Completed (mandatory)

Note: 
	- Bootstrap is already installed and can be used but not mandatory....
	- Use of Reactive Form is mandatory


## Result

Send your source code (src folder) to the project manager.

