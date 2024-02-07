
import userAndTodoData from '../../db.json';
import { RouterModule, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


interface User {
  // "id": 1,
  //     "name": "Leanne Graham",
  //     "username": "Bret",
  //     "email": "Sincere@april.biz",
  //     "address": {
  //       "street": "Kulas Light",
  //       "suite": "Apt. 556",
  //       "city": "Gwenborough",
  //       "zipcode": "92998-3874",
  //       "geo": {
  //         "lat": "-37.3159",
  //         "lng": "81.1496"
  //       }
  //     },
  //     "phone": "1-770-736-8031 x56442",
  //     "website": "hildegard.org",
  //     "company": {
  //       "name": "Romaguera-Crona",
  //       "catchPhrase": "Multi-layered client-server neural-net",
  //       "bs": "harness real-time e-markets"
  //     }
    id: Number;
    name: String;
    username: String;
    email: String;
    phone: String;
    website: String;
}

interface Todo {
    // {
    //   "userId": 1,
    //   "id": 1,
    //   "title": "delectus aut autem",
    //   "completed": false
    // },
    id: Number;
    userId: Number;
    title: String;
    completed: Boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup = new FormGroup({    
    title: new FormControl(''),    
    users: new FormControl(''),    
    todos: new FormControl(''),    
    completed: new FormControl(''),    
    name: new FormControl(''),
});

constructor(private formBuilder: FormBuilder) {
  
}
get f(): { 
  [key: string]: AbstractControl 
} {    
  return this.form.controls;  
}

onEdit(arg0: any,arg1: string) {
  throw new Error('Method not implemented.');
}
onRemove(arg0: any,arg1: string) {
  throw new Error('Method not implemented.');
}
  title = 'demo-frontend-v2';
 users: User[] = userAndTodoData.users;
 todos: Todo[] = userAndTodoData.todos;

 completed: string[] = ['Yes', 'No'];

 name: string = '';
 /*

  onRemove(id: String, type: String) {
    let model = type === 'users' ? this.users : this.todos
    model = model.filter((element) => element.id === id)

  }
*/

  todoItem = new FormGroup({
    userName: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    completed: new FormControl('', Validators.required)
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.todoItem.value);
  }

  
}

