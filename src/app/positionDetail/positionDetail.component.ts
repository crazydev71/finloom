import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
@Component({
    selector: 'app-position',
    templateUrl: './positionDetail.component.html',
    styleUrls: ['./positionDetail.style.css']
})

export class PositionDetailComponent implements OnInit {
    
    showDetail: boolean = false;
    selectedData: any;
    positionDetailData: any = [];
    date: Date;
    selectedId: number = 0;
    collId: any;
    filter: any;
    selectedDealId: number = 0;
    selectedDealName: string = '';    
    listName: string;
    lstPosition: any = [];
    private selectedPositionIndex: number = -1;
    public isCollapsed: boolean = false;
    public myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
    };
    public model: any = null;
    private sub: any;

    constructor(private router: Router, private route: ActivatedRoute) {
        this.sub = this.route.params.subscribe(params => {
            this.selectedDealId = params['id'];
        });
        this.date = new Date();
        this.filter = { 'PostDate': this.model };
    }


    ngOnInit() {
        this.getDetail();
        this.selectedDealName = 'Deal1';
    }

    openPositionDetails = function (Id: any) {
        this.router.navigate(['/positionDetails/' + Id]);
    }


    getDetail() {
        this.selectedPositionIndex = -1;
        this.isCollapsed = true;
        this.showDetail = true;
        this.selectedId = 1;       
        this.positionDetailData = [
            { Amount: 500, Description: "Paid-off", EffectiveDate: "04/01/2017", Id: 1, PostDate: "09/08/2017", Price: 200, Status: "Settled", positionId: 1 },
            { Amount: 400, Description: "Paid", EffectiveDate: "01/01/2017", Id: 2, PostDate: "09/08/2017", Price: 55, Status: "Settled", positionId: 1 }
        ];
        
    }

    setCollId(Idx: any) {
        if (this.selectedPositionIndex != -1 && this.selectedPositionIndex == Idx) {
            this.isCollapsed = !this.isCollapsed;
        }
        else {
            this.isCollapsed = false;
            this.selectedPositionIndex = Idx;
        }
    }
}
