import { Component, Input } from "@angular/core";
import { User } from '../../models/user.interface';

@Component({
    selector: 'user-form',
    templateUrl: 'user-form.component.html',
    styleUrls: ['user-form.component.scss']
})
export class UserFormComponent {
    @Input()
    detail: User;

    constructor () {}
};