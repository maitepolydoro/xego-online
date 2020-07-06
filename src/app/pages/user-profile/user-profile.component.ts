import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  columns: Array<PoTableColumn> = [];
  constructor() { 
    this.columns = [{ property: 'Local', width: '8%' },
      { property: 'Hotel' },
      { property: 'Período' },
      {
        property: 'status',
        type: 'label',
        width: '8%',
        labels: [
          { value: 'pendent', color: 'color-11', label: 'Em aprovação' },
          { value: 'approved', color: 'color-11', label: 'Aprovada' },
          { value: 'success', color: 'color-08', label: 'Concluída' },
          { value: 'cancelled', color: 'color-01', label: 'Cancelada' }
        ]
      }  
    ];

  }

  ngOnInit(): void {

  }
  }
