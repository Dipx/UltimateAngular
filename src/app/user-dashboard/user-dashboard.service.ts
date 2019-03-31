import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

import { User } from './models/user.interface';

const USER_API: string = 'http://localhost:3000/users';

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
            ).pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    updateUser(user: User): Observable<any> {

        // CUSTOM HEADERS/OPTIONS
        // let headers = new HttpHeaders({
        //     'Content-Type': 'application/json'
        // });
        // let options = new HttpRequest("PUT", USER_API, {
        //     headers: headers
        // });
        return this.http
            .put(`${USER_API}/${user.id}`, user)
            .pipe(
                map((response: HttpResponse<User>) => {
                    return response;
                })
            ).pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    removeUser(user: User): Observable<any> {
        return this.http
            .delete(`${USER_API}/${user.id}`)
            .pipe(
                map((response: HttpResponse<User>) => {
                    return response;
                })
            ).pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }
}