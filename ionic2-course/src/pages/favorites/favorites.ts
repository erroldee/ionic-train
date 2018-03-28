import { Component } from '@angular/core';
import {QuotesService} from "../../services/quotes";
import {Quote} from "../../data/quote.interface";
import {ModalController} from "ionic-angular";
import {QuotePage} from "../quote/quote";

@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html',
})
export class FavoritesPage {
    quotes: Quote[];

    constructor(
        private _quotesService: QuotesService,
        private _modalCtrl: ModalController
    ) {}

    ionViewWillEnter() {
        this.quotes = this._quotesService.getFavoriteQuotes();
    }

    onViewQuote(quote: Quote) {
        const modal = this._modalCtrl.create(QuotePage, quote);
        modal.present();
        modal.onDidDismiss((remove: boolean) => {
            if (remove) {
                this._quotesService.removeQuoteFromFavorite(quote);
                this.quotes = this._quotesService.getFavoriteQuotes();
            }
        });
    }
}
