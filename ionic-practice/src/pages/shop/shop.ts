import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {BuyoutPage} from "../buyout/buyout";

@Component({
    selector: 'page-shop',
    templateUrl: 'shop.html'
})

export class ShopPage {
    constructor(
        private _navCtrl: NavController
    ) { }

    onGoToBuyout(item: string) {
        this._navCtrl.push(BuyoutPage, {
            itemName: item
        });
    }
}
