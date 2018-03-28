import { UserPage } from '../user/user';
import { Component } from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
    selector: 'page-users',
    templateUrl: 'users.html',
})
export class UsersPage {
    userPage: object = UserPage;

    ionViewCanEnter(): boolean | Promise<boolean> {
        console.log('ionViewCanEnter');
        const rnd = Math.random();
        return rnd > 0.1;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad');
    }

    ionViewWillEnter() {
        console.log('ionViewDidEnter');
    }

    ionViewCanLeave(): boolean | Promise<void> {
        console.log('ionViewCanLeave');
        const promise = new Promise<void>((resolve, reject) => {
            setTimeout(resolve, 1000);
        });

        return promise;
    }

    ionViewWillLeave() {
        console.log('ionViewWillLeave');
    }

    ionViewDidLeave() {
        console.log('ionViewDidLeave');
    }

    ionViewWillUnload() {
        console.log('ionViewWillUnload');
    }

    constructor(
        private _navCtrl: NavController
    ) { }

    onLoadUser(name: string) {
        this._navCtrl.push(UserPage, {
            userName: name
        });
    }
}
