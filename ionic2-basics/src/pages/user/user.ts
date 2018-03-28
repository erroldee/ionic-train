import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})

export class UserPage implements OnInit {
    name: string;

    constructor(
        private _navParams: NavParams,
        private _navCtrl: NavController
    ) { }

    ngOnInit() {
        this.name = this._navParams.get('userName');
    }

    onGoBack() {
        //this._navCtrl.pop();
        this._navCtrl.popToRoot();
    }
}
