import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// containers
import { UserDashboardComponent } from './containers/user-dashboard/user-dashboard.component';

// components
import { UserCountComponent } from './components/user-count/user-count.component'
import { UserDetailRowComponent } from './components/user-detail/user-detail-row.component'


@NgModule({
    declarations: [
        UserDashboardComponent,
        UserCountComponent,
        UserDetailRowComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        UserDashboardComponent
    ]
})
export class UserDashboardModule {}