import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-position',
    templateUrl: './position.component.html',
    styleUrls: ['./position.style.css']
})

export class PositionComponent implements OnInit {
    public listName: string;
    public lstPosition: any = [];
    constructor(private router: Router) {
        
    }

    public ngOnInit() {
        this.listName = 'Position';
        this.lstPosition = [
            { Id: '1', DealName: 'Deal 1', Book: 'test', Position: '13000', WAC: '99', PNL: '200' },
            { Id: '2', DealName: 'Deal 2', Book: 'test2', Position: '14000', WAC: '95', PNL: '100' }
        ];
    }

    openPositionDetails = function (Id: any) {
        this.router.navigate(['/positionDetail/' + Id]);
    }
}
