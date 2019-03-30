import { Component } from '@angular/core';

interface User {
	id: number,
	fullName: string,
	hobbies: string[],
	happy: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	users: User[] = [{
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
