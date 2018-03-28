import { UsersPage } from '../users/users';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    constructor(
        private _navCtrl: NavController
    ) { }

    onGoToUsers() {
        this._navCtrl.push(UsersPage)
            .then((res) => {
                console.log(res);
                if (!res) {
                    console.log('Access Denied, Argument was ' + res)
                }
            });
    }
}
