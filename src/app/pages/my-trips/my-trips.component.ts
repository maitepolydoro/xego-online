import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { MenuItem, MessageService } from 'primeng/api';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})
export class MyTripsComponent implements OnInit {

  columns: Array<PoTableColumn>;
  items: Array<any>;
  itemsStep: MenuItem[];
  activeIndex: number = 1;
  options: any;
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.getTableColumns();
    this.getCalendarOptions();
    this.items = [
      {
        id: 6521,
        actions: ['print','duplicate', 'cancel'],
        code: 1355,
        hotelDescription: 'HOTEL IBIS ',
        local: 'São Paulo',
        date: '08/10/2020',
        status: 'pending',
        activeIndex: 1,
        steps: [
          {label: 'Enviado'},
          {label: 'Em aprovação'},
          {label: 'Aprovado'},
          {label: 'Concluído'}
        ]
      },
      {
        id: 6500,
        actions: ['print','duplicate'],
        code: 1355,
        hotelDescription: 'HOTEL BLUE MOR ',
        local: 'Rio de Janeiro',
        date: '08/04/2020',
        status: 'approved',
        observation: "Aprovado por Roberto José em 01/08/2020.",
        activeIndex: 2,
        steps: [
          {label: 'Enviado'},
          {label: 'Em aprovação'},
          {label: 'Aprovado'},
          {label: 'Concluído'}
        ]
      },
      {
        id: 6458,
        actions: ['duplicate'],
        code: 1355,
        hotelDescription: 'HOTEL BLUE MOR ',
        local: 'Rio de Janeiro',
        date: '08/04/2020',
        status: 'cancelled',
        activeIndex: 2,
        observation: "Cancelado por Roberto José! Deixaremos para o próximo mês!",
        steps: [
          {label: 'Enviado'},
          {label: 'Em aprovação'},
          {label: 'Cancelado'},
          {label: 'Concluído'}
        ]
      },
      {
        id: 6440,
        actions: ['print','duplicate'],
        code: 1355,
        hotelDescription: 'HOTEL IBIS ',
        local: 'São Paulo',
        date: '08/10/2020',
        status: 'done',
        activeIndex: 3,
        steps: [
          {label: 'Enviado'},
          {label: 'Em aprovação'},
          {label: 'Aprovado'},
          {label: 'Concluído'}
        ]
      },
    ]
  }

   isNotApproved(row, index: number) {
     return row.status !== 'done';
   }

   getCalendarOptions() {
    this.options = {
        plugins:[ dayGridPlugin, timeGridPlugin, interactionPlugin ],
        defaultDate: '2017-02-01',
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        editable: true,
        today: 'Today'
    };
   }

   getTableColumns() {
    this.columns = [
      { property: 'id', width: "8%", label: 'Código', type: 'number' },
      { property: 'hotelDescription', label: 'Data', },
      { property: 'local', label: 'Local', },
      { property: 'date', label: 'Data', type: 'date' },
      {
        property: 'status',
        type: 'label',
        labels: [
          { value: 'approved', color: 'color-10', label: 'Aprovado' },
          { value: 'pending', color: 'color-02', label: 'Em aprovação' },
          { value: 'cancelled', color: 'color-07', label: 'Cancelado' },
          { value: 'done', color: 'color-05', label: 'Concluído' },
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
