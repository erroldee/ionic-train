import {Component, OnInit} from '@angular/core';
import {AlertController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

@Component({
    selector: 'page-quotes',
    templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
    quoteGroup: {
        category: string,
        quotes: Quote[],
        icon: string
    };

    constructor(
        public _navParams: NavParams,
        private _alertCtrl: AlertController,
        private _quotesService: QuotesService
    ) {
    }

    ngOnInit() {
        this.quoteGroup = this._navParams.data;
    }

    onAddToFavorite(selectedQuote: Quote) {
        console.log('clicked');
        const alert = this._alertCtrl.create({
            title: 'Add Quote',
            subTitle: 'Are you sure?',
            message: 'Are you sure you want to add the Quote?',
            buttons: [
                {
                    text: 'Yes, go ahead',
                    handler: () => {
                        this._quotesService.addQuoteToFavorite(selectedQuote);
                    }
                },
                {
                    text: 'No, I changed my mind!',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancelled!');
                    }
                }
            ]
        });

        alert.present();
    }
}
