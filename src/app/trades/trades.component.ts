import { Component, OnInit, AfterViewInit, ViewChild, Injectable } from '@angular/core';
import { WjGridModule, WjFlexGrid } from 'wijmo/wijmo.angular2.grid';
import * as wjcCore from 'wijmo/wijmo';
import * as wjGrid from "wijmo/wijmo.grid";
import { Book } from './book';
declare const $: any;

@Component({
    selector: 'app-trades',
    templateUrl: './trades.component.html',
    styleUrls: ['./trades.style.css']
})

@Injectable()
export class TradesComponent implements OnInit, AfterViewInit {
    data: wjcCore.CollectionView;
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
    private newRowCnt = -1;
    private bookName: string = "Book";
    public tempRows: any = [];
    public isEditing = false;
    selectionMode = 'Row';


    constructor() {
        this.data = new wjcCore.CollectionView(this.getData(10));
        this.filter = { 'TradeDate': this.model };
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.flex.rowHeaders.hostElement.addEventListener("click", (e) => {
            let ht = this.flex.hitTest(e);
            let obj = JSON.parse(JSON.stringify(this.flex.rows[ht.row].dataItem));
            this.tempRows[ht.row] = obj;
        });
    }

    startEditing() {
        if (this.tempRows.length > 0) {
            this.isEditing = true;
            this.flex.autoSizeRows();
        }

    }
    initGrid(s: wjGrid.FlexGrid, e: wjcCore.EventArgs) {
        for (var i = 0; i < s.rows.length; i++) {
            s.rows[i].isReadOnly = true;
        }
    }

    getData(count: number): wjcCore.ObservableArray {
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
            data = new wjcCore.ObservableArray();
        for (var i = 1; i < count; i++) {
            data.push({
                id: i,
                ShortCode: "ShortCode" + i,
                FacilityCode: "FacilityCode" + i,
                Amount: 200 + i,
                Currency: "USD",
                Price: 100 + i,
                TradeDate: new Date(2014, i % 12, i % 28),
                SalesCom: 100 + i,
                Book: "Book " + i,
                SalesPerson: "SalesPerson" + i,
                Broker: "Broker" + i,
                LastUpdateTs: new Date(2014, i % 12, i % 28),
                Notes: "Notes" + i,
            });
        }
        return data;
    }

    onSelectBook(data: any) {
        this.bookName = data.name;
    }

    addRow() {
        this.newRowCnt++;
        let row = new wjGrid.Row({});
        this.flex.rows.splice(0, 0, row);
    }

    onChange(bookId, tradeId) {
        console.log(bookId, tradeId);
    }

    onEdit(data: any) {
        console.log(data)
    }

    onDelete(data: any) {
        console.log(data)
    }
}
