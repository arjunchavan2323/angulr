import { Component, Input, OnInit } from '@angular/core';
import { iform } from '../models/model';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
 @Input()stdinfo!:Array<iform>
  constructor() { }

  ngOnInit(): void {
    console.log(this.stdinfo)
  }

}
