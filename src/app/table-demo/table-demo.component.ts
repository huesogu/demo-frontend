import { Component, ViewChild } from '@angular/core';
import { GetusersService } from '../getusers.service';


@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.css'],
})
export class TableDemoComponent {
  users: any = ;
  tempUsers = [...this.users];
  @ViewChild('nameVar') nameVar: any = '';
  @ViewChild('classVar') classVar: any = '';
  @ViewChild('ageVar') ageVar: any = '';
  @ViewChild('emailVar') emailVar: any = '';
  @ViewChild('languageVar') languageVar: any = '';
    
  userTemplate: any;

  constructor(private usersService: GetusersService) {}

  searchFilter() {
   this.userTemplate = this.usersService.getPosts().subscribe(response => {
        this.users = response;
      });
    this.tempUsers = [];
    let filterObject: any = {
      name: this.nameVar.nativeElement.value,
      class: this.classVar.nativeElement.value,
      age: this.ageVar.nativeElement.value,
      email: this.emailVar.nativeElement.value,
      language: this.languageVar.nativeElement.value,
    };
    for (let i = 0; i < this.userTemplate.length; i++) {
      let isStringExist;
      for (let key in filterObject) {
        if (key == 'age') {
          isStringExist =
            this.userTemplate[i][key]
              .toString()
              .indexOf(filterObject[key]) > -1;
        } else {
          isStringExist =
            this.userTemplate[i][key]
              .toUpperCase()
              .indexOf(filterObject[key].toUpperCase()) > -1;
        }
        if (isStringExist == false) {
          break;
        }
      }
      if (isStringExist) {
        this.tempUsers.push(this.users[i]);
      }
    }
  }
}