import { Component, OnInit } from '@angular/core';
import { User } from './models/user.interface'

@Component({
    selector: 'user-dashboard',
    styleUrls: ['user-dashboard.component.scss'],
    templateUrl: 'user-dashboard.component.html'
})
export class UserDashboardComponent implements OnInit {
	users: User[];

	constructor() {	}

	ngOnInit() {
		this.users = [{
			id: 1,
			fullName: "Quentin Gille",
			happy: true,
			hobbies: ["Hiking", "Camping"]
		}, {
			id: 2,
			fullName: "Emmy Gze",
			happy: true,
			hobbies: ["Knitting", "Camping", "Swimming"]
		}, {
			id: 3,
			fullName: "Lew dark angel",
			happy: false,
			hobbies: []
		}]
	}
}