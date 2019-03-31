import { Component, Input, Output, EventEmitter } from "@angular/core";
import { User } from '../../models/user.interface';

@Component({
    selector: 'user-form',
    templateUrl: 'user-form.component.html',
    styleUrls: ['user-form.component.scss']
})
export class UserFormComponent {
    @Input()
    detail: User;

    @Output()
    update: EventEmitter<User> = new EventEmitter<User>();

    constructor () {}

    handleSubmit(user: User, isValid: boolean) {
        console.log(user);
        if(isValid) {
            console.log(isValid);
            this.update.emit(user);
        }
    }
};