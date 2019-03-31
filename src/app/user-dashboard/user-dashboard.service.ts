import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { User } from './models/user.interface';

const USER_API: string = './assets/data/api/db.json';

@Injectable()
export class UserDashboardService {
    constructor(private http: HttpClient){}

    getUsers(): Observable<any> {
        return this.http
            .get(USER_API)
            .pipe(
                map((response: HttpResponse<User[]>) => {
                    return response;
                })
            );
    }
}