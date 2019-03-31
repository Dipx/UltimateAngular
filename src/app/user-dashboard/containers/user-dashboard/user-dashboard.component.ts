import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.interface'

import { UserDashboardService } from '../../user-dashboard.service'

@Component({
    selector: 'user-dashboard',
    styleUrls: ['user-dashboard.component.scss'],
    templateUrl: 'user-dashboard.component.html'
})
export class UserDashboardComponent implements OnInit {
	users: User[];

	constructor(private userService: UserDashboardService) {	}

	ngOnInit() {
		this.userService.getUsers().subscribe((data: User[]) => this.users = data["users"]);
	}

	handleRemove(event: User) {
		this.users = this.users.filter((user : User) => {
			return user.id !== event.id;
		})
	}
	handleEdit(event: User) {
		this.users = this.users.map((user: User) => {
			if(user.id === event.id) {
				user = Object.assign({}, user, event);
			}
			return user;
		})
		console.log(event);
	}
}