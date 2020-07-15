import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  columns: Array<PoTableColumn>;
  constructor() { }

  ngOnInit(): void {
    this.columns = [
      { property: 'id', width: "8%", label: 'Código', type: 'number' },
      { property: 'name', label: 'Nome', },
      { property: 'document', label: 'Documento', },
      { property: 'date', label: 'Data', type: 'date' },
      {
        property: 'status',
        type: 'label',
        labels: [
          { value: 'approved', color: 'color-10', label: 'Reservado' },
          { value: 'pending', color: 'color-02', label: 'Em aprovação' },
          { value: 'cancelled', color: 'color-07', label: 'Cancelado' },
          { value: 'done', color: 'color-05', label: 'Reservado' },
        ]
      },
      {
        property: 'actions',
        label: ' ',
        type: 'icon',
        icons: [          
          {
          icon: 'po-icon-print',
          tooltip: 'Imprimir',
          value: 'print'
        },
          {
            icon: 'po-icon-copy',
            tooltip: 'Duplicar',
            value: 'duplicate'
          },
          {
            icon: 'po-icon-delete',
            tooltip: 'Cancelar',
            value: 'cancel'
          }
        ]
      }
    ];
  }

}
