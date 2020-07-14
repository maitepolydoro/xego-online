import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.scss']
})
export class UserCrudComponent implements OnInit {
  columns: Array<PoTableColumn>;
  users: Array<IUser>;

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        id: "625745",
        name: "Carlos José da Silva",
        imageSrc: "https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png",
        job_description: "Desenvolvedor de Software",
        active: true,
      }

    ];
  }

}
