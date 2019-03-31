import { Component, Input } from '@angular/core';
import { User } from '../../models/user.interface'

@Component({
    selector: 'user-count',
    template: `
        <div>
            Il y a {{users?.length}} utilisateurs
        </div>
    `
})
export class UserCountComponent {
    @Input()
    users: User[];


    constructor() {}
}