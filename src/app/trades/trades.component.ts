import { Component, OnInit, AfterViewInit, ViewChild, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { WjGridModule, WjFlexGrid } from 'wijmo/wijmo.angular2.grid';
import * as wjcCore from 'wijmo/wijmo';
import * as wjGrid from "wijmo/wijmo.grid";
import * as wjInput from "wijmo/wijmo.input"
import { Book } from './book';
import { Currency } from './currency';
import { Trade } from './trade';
import { Broker } from './broker';
import { SalesPerson } from './salesPerson';
import { Router } from '@angular/router';
declare const $: any;
declare var swal: any;

@Component({
    selector: 'app-trades',
    templateUrl: './trades.component.html',
    styleUrls: ['./trades.style.css']
})

@Injectable()
export class TradesComponent implements OnInit, AfterViewInit {

    private dataSource: any = [];
    data: wjcCore.CollectionView;
    private newTradeData: wjcCore.CollectionView;
    @ViewChild('flex') flex: wjGrid.FlexGrid;
    private filter: any;
    private model: any = null;
    //private books = [
    //    new Book(1, 'Book 1'),
    //    new Book(2, 'Book 2'),
    //    new Book(3, 'Book 3'),
    //    new Book(4, 'Book 4'),
    //    new Book(5, 'Book 5'),
    //    new Book(6, 'Book 6'),
    //    new Book(7, 'Book 7'),
    //    new Book(8, 'Book 8'),
    //    new Book(9, 'Book 9'),
    //];
    //private salesPersons = [
    //    new SalesPerson(1, 'Sales Person 1'),
    //    new SalesPerson(2, 'Sales Person 2'),
    //    new SalesPerson(3, 'Sales Person 3'),
    //    new SalesPerson(4, 'Sales Person 4'),
    //    new SalesPerson(5, 'Sales Person 5'),
    //    new SalesPerson(6, 'Sales Person 6'),
    //    new SalesPerson(7, 'Sales Person 7'),
    //    new SalesPerson(8, 'Sales Person 8'),
    //    new SalesPerson(9, 'Sales Person 9'),
    //];
    //private brokers = [
    //    new Broker(1, 'Broker 1'),
    //    new Broker(2, 'Broker 2'),
    //    new Broker(3, 'Broker 3'),
    //    new Broker(4, 'Broker 4'),
    //    new Broker(5, 'Broker 5'),
    //    new Broker(6, 'Broker 6'),
    //    new Broker(7, 'Broker 7'),
    //    new Broker(8, 'Broker 8'),
    //    new Broker(9, 'Broker 9'),
    //];
    //private currency = [
    //    new Currency(1, 'USD'),
    //    new Currency(2, 'INR'),
    //    new Currency(3, 'EUR'),
    //    new Currency(4, 'GBP'),
    //    new Currency(5, 'CAD')
    //];
    private newSelectedCurrencyId: number;
    private newSelectedSalesPersonId: number;
    newSelectedBrokerId: number;
    private newRowCnt = -1;
    private bookName: string = "--All--";
    private newSelectedBookId: number;
    private tempRows;
    private flag: boolean = false;
    public dataMapBooks: wjGrid.DataMap;
    public dataMapSalesperson: wjGrid.DataMap;
    public dataMapBroker: wjGrid.DataMap;
    public dataMapCurrency: wjGrid.DataMap;
    private Books = 'Book 1,Book 2,Book 3,Book 4,Book 5,Book 6'.split(',');
    private SalesPerson = 'Sales Person 1,Sales Person 2,Sales Person 3,Sales Person 4,Sales Person 5,Sales Person 6'.split(',');
    private Broker = 'Broker 1,Broker 2,Broker 3,Broker 4,Broker 5,Broker 6'.split(',');
    private Currency = 'USD,INR,EUR,GBP,CAD'.split(',');
    private TradeEdit: any;
    private fd: boolean = false;
    tradeForm: NgForm;
    BrokerArray = [{ 'id': 0, 'name':"Broker1"}]

    constructor(private router: Router, public datepipe: DatePipe) {
        this.router.navigateByUrl('/trades/input');
        this.dataSource = this.getData(10);
        this.getCollectionViewData(this.dataSource);
        this.createNewRowData();
        this.dataMapBooks = new wjGrid.DataMap(this.getBooks(), 'id', 'name');
        this.dataMapSalesperson = new wjGrid.DataMap(this.getSalesperson(), 'id', 'name');
        this.dataMapBroker = new wjGrid.DataMap(this.getBroker(), 'id', 'name');
        this.dataMapCurrency = new wjGrid.DataMap(this.getCurrency(), 'id', 'name');
        this.filter = { 'TradeDate': this.model };
    }

    ngOnInit() {
    }

    createNewRowData() {
        this.newTradeData = new wjcCore.CollectionView(this.getNewTrade(1), {
            getError(item, prop) {
                if (prop == 'ShortCode' && item.ShortCode === "") {
                    return true;
                }
                if (prop == 'FacilityCode' && item.FacilityCode === "") {
                    return true;
                }
                if (prop == 'CptyCode' && item.CptyCode === "") {
                    return true;
                }
                if (prop == 'Amount' && item.Amount === null) {
                    return true;
                }
                if (prop == 'Price' && item.Price === null) {
                    return true;
                }
                if (prop == 'Book' && item.Book === "") {
                    return true;
                }
            }
        });
    }

    ngAfterViewInit() {
        this.tempRows = new Array();
        this.flex.rowHeaders.hostElement.addEventListener("click", (e) => {
            let ht = this.flex.hitTest(e);
            let obj = JSON.parse(JSON.stringify(this.flex.rows[ht.row].dataItem));
            let index = this.tempRows.findIndex(d => d.id === obj.id);
            if (index != -1) {
                this.tempRows.splice(index, 1);
            } else {
                this.tempRows.push(obj);
            }
        });
    }

    //onRowSelect() {
    //    this.tempRows = new Array();
    //    this.flex.rowHeaders.hostElement.addEventListener("click", (e) => {
    //        let ht = this.flex.hitTest(e);
    //        let obj = JSON.parse(JSON.stringify(this.flex.rows[ht.row].dataItem));
    //        this.tempRows[ht.row] = obj;
    //    });
    //}

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
                ShortCode: "ShortCode" + i,
                FacilityCode: "FacilityCode" + i,
                CptyCode: "Cpty Code" +i,
                Amount: 200 + i,
                Currency: this.Currency[i % this.Currency.length],
                Price: i,
                TradeDate: date,
                SalesCom: i,
                Book: this.Books[i % this.Books.length],
                SalesPerson: this.SalesPerson[i % this.SalesPerson.length],
                Broker: this.Broker[i % this.Broker.length],
                LastUpdateTs: new Date(2014, i % 12, i % 28),
                Notes: "Notes" + i,
            });
        }
        return data;
    }

    getNewTrade(count: number): wjcCore.ObservableArray {
        let data = new wjcCore.ObservableArray();
        for (var i = 0; i < count; i++) {
            data.push({
                ShortCode: "",
                FacilityCode: "",
                CptyCode: "",
                Amount: 0,
                Currency: this.Currency[i],
                Price: 0,
                TradeDate: new Date(),
                SalesCom: 0,
                Book: this.Books[0],
                SalesPerson: this.SalesPerson[i],
                Broker: this.Broker[i],
                LastUpdareTs: new Date().toLocaleString(),
                Notes: "",
            });
        }
        return data;
    }

    getBooks() {
        let data = [];
        for (let i = 0; i < this.Books.length; i++) {
            data.push({
                id: i,
                name: this.Books[i]
            });
        }
        return data;
    } 

    getSalesperson() {
        let data = [];
        for (let i = 0; i < this.SalesPerson.length; i++) {
            data.push({
                id: i,
                name: this.SalesPerson[i]
            });
        }
        return data;
    }

    getBroker() {
        let data = [];
        for (let i = 0; i < this.Broker.length; i++) {
            data.push({
                id: i,
                name: this.Broker[i]
            });
        }
        return data;
    }

    getCurrency() {
        let data = [];
        for (let i = 0; i < this.Currency.length; i++) {
            data.push({
                id: i,
                name: this.Currency[i]
            });
        }
        return data;
    }

    cellEditEnded(s, e) {

    }

    saveNewTrade(item: any) {
        let prop = ['ShortCode', 'FacilityCode', 'Amount', 'Price', 'CptyCode'];
        for (let val of prop) {
            let isError = this.newTradeData.getError(item, val);
            if (isError == true) {
                this.flag = true;
                alert("Please fill all required fields.")
                break;
            }
            else {
                this.flag = false;
            }
        }
        if (!this.flag) {
            this.dataSource.push(item);
            this.createNewRowData();
            this.showNotification('top', 'right', "Trade added successfully.");
        }
    }

    clearNewTrade() {
        this.createNewRowData();
    }

    onSelectBook(data: any) {
        this.dataSource = this.getData(10);
        this.bookName = data.name;
        this.dataSource = this.dataSource.filter(
            b => b.Book === data.id);
        this.getCollectionViewData(this.dataSource);
    }

    onDateChanged(event: any) {
        let date = this.convertDate(event.value);
        this.dataSource = this.getData(10);
        this.dataSource = this.dataSource.filter(
            b => this.convertDate(b.TradeDate) === date);
        this.getCollectionViewData(this.dataSource);
    }

    convertDate(str) {
        var date = new Date(str),
            mnth = ((date.getMonth() + 1)),
            day = (date.getDate());
        return [mnth, day, date.getFullYear()].join("/");
    }

    //onChange(bookId, tradeId) {
    //    console.log(bookId, tradeId);
    //}

    clearFilter() {
        this.bookName = "--All--";
        this.dataSource = this.getData(10);
        this.getCollectionViewData(this.dataSource);
    }

    onEdit(data: any) {
       // let date = new Date(data.TradeDate.toISOString());
        data.TradeDate = this.datepipe.transform(data.TradeDate, 'yyyy-MM-dd');
        this.TradeEdit = data;
        console.log(this.TradeEdit);
        $("#myModal").modal('show');
        //let itemIndex = this.dataSource.findIndex(item => item.id == data.id);
        //this.dataSource[itemIndex] = data;
        //this.showNotification('top', 'right', "Trade updated successfully.");
        //this.router.navigateByUrl('/trades/blotter');
    }
    saveTrade(f: NgForm) {
        $("#myModal").modal('hide');
        this.router.navigateByUrl('/trades/blotter');
    }
    onDelete(data: any) {
        var that = this;
        console.log(that.tempRows);
        swal({
            title: 'Are you sure? Do you want to delete this trade?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (that.tempRows.length > 0) {
                for (var _i = 0; _i < that.tempRows.length; _i++) {
                    let index = that.dataSource.findIndex(d => d.id === that.tempRows[_i].id);
                    that.dataSource.splice(index, 1);
                }
                that.tempRows = [];
            }
            else {
                let index = that.dataSource.findIndex(d => d.id === data.id);
                that.dataSource.splice(index, 1);
            }
            that.showNotification('top', 'right', "Trade deleted successfully.");
        })
    }

    showNotification(from, align, message) {
        $.notify({
            icon: "add_alert",
            message: message

        }, {
                type: 'success',
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                }
            });
    }
}
