import { Component, OnInit } from '@angular/core';
import { PoChartType } from '@po-ui/ng-components/lib/components/po-chart';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  type: PoChartType;
  constructor() { }

  ngOnInit(): void {
  }

  private onClick() {
    alert('Clicked in menu item')
  }

}
