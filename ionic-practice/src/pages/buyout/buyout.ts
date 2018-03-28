import {Component, OnInit} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

@Component({
    selector: 'page-buyout',
    templateUrl: 'buyout.html'
})
export class BuyoutPage implements OnInit {
    itemName: string

    constructor(
        private _navParams: NavParams,
        private _navCtrl: NavController
    ) { }

    ngOnInit() {
        this.itemName = this._navParams.get('itemName');
    }

    onBackToHome() {
        this._navCtrl.popToRoot();
    }
}
