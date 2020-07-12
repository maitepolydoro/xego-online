import { Component, OnInit } from '@angular/core';
import { PoChartType } from '@po-ui/ng-components/lib/components/po-chart';
import { IUser } from 'src/app/interfaces/user.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  users: Array<IUser> = [];
  constructor() {

    this.data = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
      datasets: [
            {
                label: "Viagens",
                backgroundColor: '#2c056a',
                borderColor: '#2c056a',
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    }

   }

  ngOnInit(): void {
    this.users = [
      { name: 'Carlos de Souza Filho', id: "1", imageSrc: "https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png", job_description: "Desenvolvedor Sr.", active: true},
      { name: 'Mariana de Jesus Carvalho Neves', id: "2", imageSrc: "https://www.shareicon.net/data/512x512/2015/04/01/16073_glasses_128x128.png", job_description: "Gerente", active: true},
      { name: 'Kléber Carvalho', id: "3", imageSrc: "https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png", job_description: "Scrum Master", active: false},
    ];
  }

  private onClick() {
    alert('Clicked in menu item')
  }

}
