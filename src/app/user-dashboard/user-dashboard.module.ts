import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from "@angular/forms";

// containers
import { UserDashboardComponent } from './containers/user-dashboard/user-dashboard.component';
import { UserViewerComponent } from "./containers/user-dashview/user-dashview.component";

// components
import { UserCountComponent } from './components/user-count/user-count.component'
import { UserDetailRowComponent } from './components/user-detail/user-detail-row.component'
import { UserFormComponent } from "./components/user-form/user-form.component";

// services
import { UserDashboardService } from './user-dashboard.service'


@NgModule({
    declarations: [
        UserDashboardComponent,
        UserViewerComponent,
        UserCountComponent,
        UserDetailRowComponent,
        UserFormComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    exports: [
        UserDashboardComponent,
        UserViewerComponent
    ],
    providers: [
        UserDashboardService
    ]
})
export class UserDashboardModule {}