import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-selected',
  templateUrl: './detail-selected.component.html',
  styleUrls: ['./detail-selected.component.css']
})
export class DetailSelectedComponent implements OnInit {
  @Input() newItem;
  constructor() { }

  ngOnInit() {
  }

}
