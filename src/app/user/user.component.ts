import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import {User} from './user.model';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  myForm: FormGroup;
  currentUser: User;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder) {
    this.getOneUser();
    this.myForm = this.formBuilder.group({
      email: this.currentUser.email,
      password: this.currentUser.password,
      firstName: this.currentUser.firstName,
      lastName: this.currentUser.lastName
    });
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }
  getOneUser() {
    this.userService.getUserById(14).subscribe(user => this.currentUser = user);
  }

  editUser(): void {
    const editUser = this.myForm.value;
    console.log(editUser);
    this.userService.editUserById(editUser);
    this.userService.getAllUsers().subscribe(users => this.users = users);
    console.log(this.users);
  }
}
