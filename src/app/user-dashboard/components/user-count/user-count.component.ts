import { Component, Input } from '@angular/core';
import { User } from '../../models/user.interface'

@Component({
    selector: 'user-count',
    template: `
        <div>
            Il y a {{items.length}} utilisateurs
        </div>
    `
})
export class UserCountComponent {
    @Input()
    items: User[];

    constructor() {}
}