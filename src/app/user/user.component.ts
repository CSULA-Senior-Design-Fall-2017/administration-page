import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../model/user.model';
import {UserService} from '../services/user.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myForm: FormGroup;
  currentUser: User;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
    this.getUser();
    this.myForm = this.formBuilder.group({
      email: this.currentUser.email,
      password: this.currentUser.password,
      firstName: this.currentUser.firstName,
      lastName: this.currentUser.lastName
    });
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.route.paramMap.switchMap((params: ParamMap) => this.userService.getUserById(+params.get('id')))
      .subscribe(user => this.currentUser = user);
  }

  editUser(): void {
    const editUser = this.myForm.value;
    editUser.id = this.currentUser.id;
    // console.log(editUser);
    this.userService.editUserById(editUser);
    this.router.navigate(['/demo']);
  }
}
