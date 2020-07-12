import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  columns: Array<PoTableColumn> = [];
  users: Array<IUser> = [];
  constructor() { 
  }

  ngOnInit(): void {
    this.users = [      
      { name: 'Mariana de Jesus Carvalho Neves', id: "2", imageSrc: "https://www.shareicon.net/data/512x512/2015/04/01/16073_glasses_128x128.png", job_description: "Gerente"},
      { name: 'Kléber Carvalho', id: "3", imageSrc: "https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png", job_description: "Scrum Master"},
    ];

    this.columns = [{ property: 'Local' },
      { property: 'Hotel' },
      { property: 'Período' },
      {
        property: 'status',
        type: 'label',
        labels: [
          { value: 'pendent', color: 'color-11', label: 'Em aprovação' },
          { value: 'approved', color: 'color-11', label: 'Aprovada' },
          { value: 'success', color: 'color-08', label: 'Concluída' },
          { value: 'cancelled', color: 'color-01', label: 'Cancelada' }
        ]
      }  
    ];
  }
  }
