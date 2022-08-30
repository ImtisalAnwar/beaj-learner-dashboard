import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import {User} from './user'

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    profileEditForm: FormGroup;
    user = new User();

    /**
     *
     */
    constructor(private fb:FormBuilder) {
        
    }

    ngOnInit(){
        this.profileEditForm = this.fb.group({
            email : 'imtisalanwar@gmail.com',
            firstName : ['imtisal',Validators.required],
            lastName : ['anwar',Validators.required],
            oldPassword : '123qwe.', 
            newPassword : ['123qwE.',Validators.minLength(8)]
        });

    }

    // populateTestData():void{
    //     this.profileEditForm.setValue({
    //         email:'imtisalanwar@gmail.com',
    //         firstName:'imtisal',
    //         lastName:'anwar',
    //         oldPassword:'123qwe.',
    //         newPassword:'123qwE.',
    //     })
    // }

    save(){
        if (this.profileEditForm.invalid) return;
        else{
            console.log(this.profileEditForm);
            console.log("Saved: " + JSON.stringify(this.profileEditForm.value));
        }
    }
}
