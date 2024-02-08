import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { GetusersService } from './getusers.service';
import { GettodosService } from './getTodos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  users: any | undefined;
  todos: any | undefined;

  form: FormGroup = new FormGroup({    
    name: new FormControl(''),    
    title: new FormControl(''),    
    Completed: new FormControl('') });  
    submitted = false;
  constructor(private formBuilder: FormBuilder, private getUsersService:GetusersService, private gettodosService:GettodosService) {}
  ngOnInit(): void {    
    this.form = this.formBuilder.group(      
      {        
        name: ['', Validators.required],        
        title: ['', Validators.required],
        Completed: [false, Validators.requiredTrue]
      }
    );


    this.getUsersService.getUsers()
        .subscribe(response => {
          this.users = response;
          console.log("this.users: " + JSON.stringify(this.users));
        });
    this.gettodosService.getTodos()
        .subscribe(res => {
          this.todos = res;
          console.log("this.todos: " +  JSON.stringify(this.todos) );
        })    

        let results: any;
        this.users.forEach((user: any) => {
          const rowTb = this.todos.find((todos: any) => todos.userId  === user.id);
          if (rowTb) {
            results.push({
              ...user,
              ...rowTb
            });
          }
        });
        
        console.log("results: " + JSON.stringify(results));
  }

  
  get f(): { [key: string]: AbstractControl } {    
    return this.form.controls;  
  }
  onSubmit(): void {    
    this.submitted = true;
    if (this.form.invalid) {      
      return;    
    }
    console.log(JSON.stringify(this.form.value, null, 2));  
  }

  onReset(): void {    
    this.submitted = false;    
    this.form.reset();
  }

  

}