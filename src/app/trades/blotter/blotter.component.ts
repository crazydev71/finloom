import { Component, OnInit, AfterViewInit, ViewChild, Injectable } from '@angular/core';
import { WjGridModule, WjFlexGrid } from 'wijmo/wijmo.angular2.grid';
import * as wjcCore from 'wijmo/wijmo';
import * as wjGrid from "wijmo/wijmo.grid";
import { Book } from '../book';
import { Currency } from '../currency';
import { Trade } from '../trade';
import { Broker } from '../broker';
import { SalesPerson } from '../salesPerson';
declare const $: any;
declare var swal: any;

@Component({
    selector: 'app-blotters',
    templateUrl: './blotter.component.html',
    styleUrls: ['./blotter.style.css']
})

@Injectable()
export class BlottersComponent implements OnInit, AfterViewInit {

    private dataSource: any = [];
    data: wjcCore.CollectionView;
    private newTradeData: wjcCore.CollectionView;
    @ViewChild('flex') flex: wjGrid.FlexGrid;
    private filter: any;
    private model: any = null;
    private books = [
        new Book(1, 'Book 1'),
        new Book(2, 'Book 2'),
        new Book(3, 'Book 3'),
        new Book(4, 'Book 4'),
        new Book(5, 'Book 5'),
        new Book(6, 'Book 6'),
        new Book(7, 'Book 7'),
        new Book(8, 'Book 8'),
        new Book(9, 'Book 9'),
    ];
    private salesPersons = [
        new SalesPerson(1, 'Sales Person 1'),
        new SalesPerson(2, 'Sales Person 2'),
        new SalesPerson(3, 'Sales Person 3'),
        new SalesPerson(4, 'Sales Person 4'),
        new SalesPerson(5, 'Sales Person 5'),
        new SalesPerson(6, 'Sales Person 6'),
        new SalesPerson(7, 'Sales Person 7'),
        new SalesPerson(8, 'Sales Person 8'),
        new SalesPerson(9, 'Sales Person 9'),
    ];
    private brokers = [
        new Broker(1, 'Broker 1'),
        new Broker(2, 'Broker 2'),
        new Broker(3, 'Broker 3'),
        new Broker(4, 'Broker 4'),
        new Broker(5, 'Broker 5'),
        new Broker(6, 'Broker 6'),
        new Broker(7, 'Broker 7'),
        new Broker(8, 'Broker 8'),
        new Broker(9, 'Broker 9'),
    ];
    private currency = [
        new Currency(1, 'USD'),
        new Currency(2, 'INR'),
        new Currency(3, 'EUR'),
        new Currency(4, 'GBP'),
        new Currency(5, 'CAD')
    ];
    public dataMap: wjGrid.DataMap;
    private bookName: string = "--All--";
    private TradeDate = new Date().toLocaleDateString();
    private defaultDate = new Date();
    countries = 'US,UK,China,Germany,India'.split(',');


    constructor() {
        this.dataSource = this.getData(10);
        this.getCollectionViewData(this.dataSource);
        this.filter = { 'TradeDate': this.model };
        this.dataMap = new wjGrid.DataMap(this.getCountry(), 'id', 'country');
    }

    ngOnInit() {
    }

    ngAfterViewInit() {

    }
    getCountry() {
        let data = [];
        for (let i = 0; i < this.countries.length; i++) {
            data.push({
                id: i,
                country: this.countries[i]
            });
        }
        return data;
    }

    getCollectionViewData(data: any) {
        this.data = new wjcCore.CollectionView(data);
    }

    getData(count: number): wjcCore.ObservableArray {
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
            data = new wjcCore.ObservableArray();
        for (var i = 1; i < count; i++) {
            var date = new Date(2014, i % 12, i % 28);
            var tradeDate = this.convertDate(date);
            data.push({
                id: i,
                TradeTicket: 1000 + i,
                DealName: "Deal" + i,
                FacilityName: "Facility" + i,
                CPC: "Cpty Code" + i,
                Amount: 200 + i,
                Currency: "USD",
                Price:  i,
                TradeDate: tradeDate,
                SalesCom: 100 + i,
                Book: this.countries[i % this.countries.length],
                SalesPerson: i,
                Broker: i,
                LastUpdateTs: new Date(2014, i % 12, i % 28),
                Notes: "Notes" + i,
            });
        }
        return data;
    }
    convertDate(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [mnth, day, date.getFullYear()].join("/");
    }
    onSelectBook(data: any) {
        this.dataSource = this.getData(10);
        this.bookName = data.name;
        this.dataSource = this.dataSource.filter(
            b => b.Book === data.id);
        this.getCollectionViewData(this.dataSource);
    }

    clearFilter() {
        this.bookName = "--All--";
        this.dataSource = this.getData(10);
        this.getCollectionViewData(this.dataSource);
        this.TradeDate = new Date().toLocaleDateString();
    }

    onDateChanged(event: any) {
        let date = this.convertDate(this.TradeDate);
        this.dataSource = this.getData(10);
        this.dataSource = this.dataSource.filter(
            b => b.TradeDate === date);
        this.getCollectionViewData(this.dataSource);
    }
}
