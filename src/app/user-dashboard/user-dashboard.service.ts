import { User } from './models/user.interface'

export class UserDashboardService {
    constructor(){}

    getUsers(): User[] {
        return [{
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