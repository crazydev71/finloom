import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flm-tree-view',
  templateUrl: './flm-tree-view.component.html',
  styleUrls: ['./flm-tree-view.component.css']
})
export class FlmTreeViewComponent implements OnInit {
  @Input() api: string;

  constructor() { }

  ngOnInit() {
    console.log(this.api);
  }

}
