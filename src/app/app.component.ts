import { Component } from '@angular/core';
import userAndTodoData from '../../db.json';


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
  title = 'demo-frontend-v2';
 users: User[] = userAndTodoData.users;
 todos: Todo[] = userAndTodoData.todos;

 completed: string[] = ['Yes', 'No'];

 name: string = '';

  onRemove(id, type) {
    let type = type === 'users' ? users : todos
    type = type.filter((element) => element.id === id)

  }
}

