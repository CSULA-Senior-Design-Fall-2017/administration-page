import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Input() name: string; //Added Input annotation

  constructor() {

  }

  ngOnInit() {
  }

  //Add user function that saves input
  addUser(firstName: HTMLInputElement, lastName: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement): boolean{
  	console.log(`Adding firstname: ${firstName.value}, lastname: ${lastName.value}, Email: ${email.value}, Password: ${password.value}`);
	return false;
	}
}
