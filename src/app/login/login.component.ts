import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  email: string = ''
  password: string = ''
  role: string = ''
  @Output() roles = new EventEmitter<string>

  user = {
    email : 'user@mail.com',
    password: '22446688'
  }
  admin = {
    email : 'admin@mail.com',
    password: '22446688'
  }

  ngOnInit(): void {
      
    }
  
  constructor(){}
  
  login(email: string , password: string){
    
    if(email === this.admin.email && password === this.admin.password){
      console.log('Log in as Admin')
      this.role = 'Admin'
      console.log(this.roles.emit(this.role))
    } 
    else if(email === this.user.email && password === this.user.password){
      console.log('Log in as User')
      this.role = 'User'
      this.roles.emit(this.role)
    }else{
      console.log('unidentify user')
      this.role = 'Unidentified'
      this.roles.emit(this.role)
    }

  }
}
