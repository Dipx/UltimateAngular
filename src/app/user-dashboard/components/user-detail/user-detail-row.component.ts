import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { User } from '../../containers/user-dashboard/models/user.interface'

@Component({
    selector: 'user-table',
    template: `
        <tr>
            <td>{{item.id}}</td>
            <td>
                <span *ngIf="!editing">{{item.fullName | uppercase}}</span>
                <span *ngIf="editing">
                    <input class="form-control" type="text" 
                        [value]="item.fullName"
                        (input)="onNameChange(name.value)"
                        #name
                    >
                </span>
            </td>
            <td (click)="switchState($event)" [ngClass]="{
                'table-success': item.happy,
                'table-danger': !item.happy
            }">{{item.happy}}</td>
            <td>{{item.hobbies}}</td>
            <td><button (click)="toggleEdit()" class="btn btn-primary">{{editing ? 'Done' : 'Edit'}}</button></td>
            <td><button (click)="onRemove()" class="btn btn-danger">Remove</button></td>
        </tr>
    `
})
export class UserDetailRowComponent implements OnChanges {
    editing: boolean = false;

    @Input()
    item: User;

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    constructor() {}

    onRemove() {
        this.remove.emit(this.item);
    }

    switchState(event) {
        this.item.happy = !this.item.happy;
        this.edit.emit(this.item);
    }
    toggleEdit() {
        if(this.editing) {
            this.edit.emit(this.item);
        }
        this.editing = !this.editing;
    }
    onNameChange(value: string) {
        this.item.fullName = value;
    }

    ngOnChanges(changes) {
        if(changes.item) {
            this.item = Object.assign({}, changes.item.currentValue);
        }
    }
}