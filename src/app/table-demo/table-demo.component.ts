import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GetusersService } from '../getusers.service';
import { Users } from '../users';
import { GettodosService } from '../getTodos.service';



@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.css'],
})
export class TableDemoComponent implements OnInit {
        users: Users[] | undefined;
  //tempUsers = [...this.users];
  @ViewChild('nameVar') nameVar: any = '';
  @ViewChild('classVar') classVar: any = '';
  @ViewChild('ageVar') ageVar: any = '';
  @ViewChild('emailVar') emailVar: any = '';
  @ViewChild('languageVar') languageVar: any = '';

  @Input() itemUsers = [];
  @Input() item = '';
  
  @Input() usersArray: any[] = [];
    
  usersResult: any;
  todosResult: any;
  allUsers: any;
  allTodos: any;

  constructor(private usersService: GetusersService,
    private todosService: GettodosService) {}

  

ngOnInit(): void {  
    this.usersResult = this.usersService.getUsers().subscribe(response => {
        this.allUsers = response;
      });

    this.todosResult = this.todosService.getTodos().subscribe(res => {
    this.allTodos = res;
    });

    console.log("users: " + this.usersArray + "");

}




  searchFilter() {
   
    //this.tempUsers = [];
    let filterObject: any = {
      name: this.nameVar.nativeElement.value,
      class: this.classVar.nativeElement.value,
      age: this.ageVar.nativeElement.value,
      email: this.emailVar.nativeElement.value,
      language: this.languageVar.nativeElement.value,
    };
    for (let i = 0; i < this.usersResult.length; i++) {
      let isStringExist;
      for (let key in filterObject) {
        if (key == 'age') {
          isStringExist =
            this.usersResult[i][key]
              .toString()
              .indexOf(filterObject[key]) > -1;
        } else {
          isStringExist =
            this.usersResult[i][key]
              .toUpperCase()
              .indexOf(filterObject[key].toUpperCase()) > -1;
        }
        if (isStringExist == false) {
          break;
        }
      }
      if (isStringExist) {
        //  this.tempUsers.push(this.users[i]);
      }
    }
  }
}