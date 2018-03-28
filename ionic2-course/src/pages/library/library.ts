import {Component, OnInit} from '@angular/core';
import {Quote} from "../../data/quote.interface";
import quotes from "../../data/quotes";
import {QuotesPage} from "../quotes/quotes";
import {NavController} from "ionic-angular";

@Component({
    selector: 'page-library',
    templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
    quoteCollection: {
        category: string,
        quotes: Quote[],
        icon: string
    }[];

    constructor(
        private _navCtrl: NavController
    ) { }

    ngOnInit() {
        this.quoteCollection = quotes;
    }

    showQuotes(quoteGroup) {
        this._navCtrl.push(QuotesPage, quoteGroup);
    }
}
