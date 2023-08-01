import { Component, OnInit } from '@angular/core';
// import { roles } from './login/login.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'phoneorderingsystem';
  roles!: string 

  ngOnInit(): void {
      
    }

  constructor(){

  }

  login(role: string){
    this.roles = role
    if(this.roles === 'Admin'){
      alert("Login as Admin Successfully")
    }else if(this.roles === 'User'){
      alert("Login as User Admin Successfully")
    }else{
      alert("Please try again")
    }
  }

}