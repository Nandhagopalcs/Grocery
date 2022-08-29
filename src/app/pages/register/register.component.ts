import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModel=new User();

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  onFormSubmit(){
    this.auth.register(this.userModel).subscribe((response)=>{
      console.log(response)
    })
  }

}
