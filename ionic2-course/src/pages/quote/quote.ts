import { Component } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

@Component({
    selector: 'page-quote',
    templateUrl: 'quote.html',
})
export class QuotePage {
    person: string;
    text: string;

    constructor(
        private _viewCtrl: ViewController,
        private _navParam: NavParams
    ) {}

    ionViewDidLoad() {
        this.person = this._navParam.get('person');
        this.text = this._navParam.get('text');
    }

    onClose(remove: boolean = false) {
        this._viewCtrl.dismiss(remove);
    }
}
