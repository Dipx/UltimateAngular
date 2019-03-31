import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

// containers
import { UserDashboardComponent } from './containers/user-dashboard/user-dashboard.component';

// components
import { UserCountComponent } from './components/user-count/user-count.component'
import { UserDetailRowComponent } from './components/user-detail/user-detail-row.component'

// services
import { UserDashboardService } from './user-dashboard.service'


@NgModule({
    declarations: [
        UserDashboardComponent,
        UserCountComponent,
        UserDetailRowComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        UserDashboardComponent
    ],
    providers: [
        UserDashboardService
    ]
})
export class UserDashboardModule {}