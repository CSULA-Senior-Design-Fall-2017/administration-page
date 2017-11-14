import {Component, OnInit, Input} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../model/user.model';
import {propertyNames} from '@angular/language-service/src/html_info';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Input() name: string; // Added Input annotation
  counter = 20;

  constructor(private userService: UserService,
              private router: Router) {

  }

  ngOnInit() {
  }

  // Add user function that saves input
  addUser(firstName: HTMLInputElement, lastName: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement): void {
    // console.log(`Adding firstname: ${firstName.value}, lastname: ${lastName.value}, Email: ${email.value}, Password: ${password.value}`);
    const newUser = new User({
      id: this.counter,
      firstName: `${firstName.value}`,
      lastName: `${lastName.value}`,
      email: `${email.value}`,
      password: `${password.value}`
    });
    // console.log(newUser);
    this.counter++;
    this.userService.addUser(newUser);
    this.router.navigate(['/demo']);
  }
}
