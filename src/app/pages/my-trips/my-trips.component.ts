import { Component, OnInit } from '@angular/core';
import { PoSelectOption, PoTableColumn, PoTableAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css']
})
export class MyTripsComponent implements OnInit {

  columns: Array<PoTableColumn>;
  items: Array<any>;

  constructor() {}

  ngOnInit() {
    this.columns = [
      { property: 'code', type: 'number', width: '8%', visible: false },
      { property: 'hotelDescription', label: 'Data', },
      { property: 'local', label: 'Local', },
      { property: 'date', label: 'Data', type: 'dateTime' },
      {
        property: 'status',
        type: 'label',
        width: '8%',
        labels: [
          { value: 'approved', color: 'color-10', label: 'Aprovado' },
          { value: 'pending', color: 'color-02', label: 'Em aprovação' },
          { value: 'cancelled', color: 'color-07', label: 'Cancelado' }
        ]
      },
      {
        property: 'actions',
        label: '',
        type: 'icon',
        icons: [
          {
            icon: 'po-icon-star',
            tooltip: 'Duplicar',
            value: 'duplicate'
          },
          {
            icon: 'po-icon-export',
            tooltip: 'Cancelar',
            value: 'cancel'
          }
        ]
      }
    ];
    this.items = [
      {
        actions: ['duplicate', 'cancel'],
        code: 1355,
        hotelDescription: 'HOTEL IBIS ',
        local: 'São Paulo',
        date: '08/10/2020',
        status: 'pending'
      },
      {
        actions: [],
        code: 1355,
        hotelDescription: 'HOTEL IBIS ',
        local: 'São Paulo',
        date: '08/10/2020',
        status: 'approved'
      },
    ]
  }

   isNotApproved(row, index: number) {
     return row.status !== 'approved';
   }
}
