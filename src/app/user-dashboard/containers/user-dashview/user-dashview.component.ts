import { Component, OnInit } from '@angular/core';

import { UserDashboardService } from "../../user-dashboard.service";

import { User } from "../../models/user.interface";

@Component({
    selector: 'user-viewer',
    templateUrl: 'user-dashview.component.html',
    styleUrls: ['user-dashview.component.scss']
})
export class UserViewerComponent implements OnInit {
    user: User;

    constructor(private userDashboardService: UserDashboardService) {}

    onUpdateUser(event: User) {
        console.log("update:", event)
        this.userDashboardService
            .updateUser(event)
            .subscribe((data: User) => this.user = Object.assign({}, this.user, data), (error: any) => console.log(error));
    }

    ngOnInit () {
        this.userDashboardService
            .getUser(3)
            .subscribe((data: User) => this.user = data, (error: any) => console.log(error));
    }
}