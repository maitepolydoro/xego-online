import { Component, OnInit } from '@angular/core';
import { PoMenuItem, PoToolbarProfile, PoToolbarAction } from '@po-ui/ng-components';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  level = 1;
  profile: PoToolbarProfile = {
    avatar: 'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png',
    subtitle: 'carlos@empresa.com.br',
    title: 'Carlos José'
  };
  userLogged = JSON.parse(localStorage.getItem('user'));
  notificationActions: Array<PoToolbarAction> = this.getNotifications();

  menus: Array<PoMenuItem> = this.getMenus();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // actions: Array<PoToolbarAction> = [
  //   { label: 'Start cash register', action: item => this.showAction(item) },
  //   { label: 'Finalize cash register', action: item => this.showAction(item) },
  //   { label: 'Cash register options', action: item => this.showAction(item) }
  // ];

  getMenus() {    
    let menuOptions = [];
    switch (this.userLogged.role) {
      case 0:
        menuOptions = [
          { label: 'Dashboard', icon: 'po-icon po-icon-home', action: this.onClickMenu.bind(this)},    
          { label: 'Nova solicitação', icon: 'po-icon po-icon-touch', action: this.onClickMenu.bind(this)},
          { label: 'Minhas viagens', icon: 'po-icon po-icon-calendar-ok', action: this.onClickMenu.bind(this)},
          { label: 'Reservas', icon: 'po-icon po-icon-warehouse', action: this.onClickMenu.bind(this)},    
          { label: 'Colaboradores', icon: 'po-icon po-icon-users', action: this.onClickMenu.bind(this)},
          { label: 'Meus Créditos', icon: 'po-icon po-icon-money', action: this.onClickMenu.bind(this)}
        ];
        break;
      case 1:
        menuOptions = [
          { label: 'Dashboard', icon: 'po-icon po-icon-home', action: this.onClickMenu.bind(this)},  
          { label: 'Nova solicitação', icon: 'po-icon po-icon-touch', action: this.onClickMenu.bind(this)},  
          { label: 'Colaboradores', icon: 'po-icon po-icon-calendar-ok', action: this.onClickMenu.bind(this)},
          { label: 'Financeiro', icon: 'po-icon po-icon-money', action: this.onClickMenu.bind(this)}
        ];
        break;
      case 2:
          menuOptions = [
            { label: 'Nova solicitação', icon: 'po-icon po-icon-touch', action: this.onClickMenu.bind(this)},
            { label: 'Minhas viagens', icon: 'po-icon po-icon-calendar-ok', action: this.onClickMenu.bind(this)},  
          ];
          break;       
      case 3:
            menuOptions = [
              { label: 'Dashboard', icon: 'po-icon po-icon-home', action: this.onClickMenu.bind(this)},    
              { label: 'Reservas', icon: 'po-icon po-icon-home', action: this.onClickMenu.bind(this)},    
            ];
            break;            
      default:
        break;
    }
    menuOptions.push({ label: 'Meu Perfil', icon: 'po-icon po-icon-user', action: this.onClickMenu.bind(this)})
    menuOptions.push({ label: 'Sair', icon: 'po-icon po-icon-exit', action: this.onClickMenu.bind(this)})

    return menuOptions;
  }

  getNotifications() {    
    let notifications = [];
    switch (this.userLogged.role) {
      case 0:   
      notifications = [
        {
          icon: 'po-icon po-icon-exclamation',
          label: 'Sua solicitação foi atualizada!',
          type: 'danger'
        }
      ];
      case 1:  
      notifications = [
        {
          icon: 'po-icon po-icon-exclamation',
          label: 'Você tem novas solicitações de aprovação!',
          type: 'warning'
        }
      ];
      break;
      case 2:  
      notifications = [
        {
          icon: 'po-icon po-icon-exclamation',
          label: 'Sua solicitação #6521 foi atualizada!',
          type: 'warning'
        }
      ];
      break;
      case 3:  
      notifications = [
        {
          icon: 'po-icon po-icon-exclamation',
          label: 'Você recebeu novas propostas!',
          type: 'warning'
        }
      ];
      break;      
      default:
        break;
      }
    return notifications;
  }

  getNotificationNumber() {
    return 1;    
  }

  onClickMenu(menu: PoMenuItem) {
    console.log(menu.label);
    switch (menu.label) {
      case 'Nova solicitação':
        this.router.navigate(['/offer-request']);
      break;      
      case 'Financeiro':
        this.router.navigate(['/payments']);
      break;
      case 'Colaboradores':
          this.router.navigate(['/user-crud']);
        break;
      case 'Minhas viagens':
          this.router.navigate(['/my-trips']);
        break;
      case 'Meu Perfil':
        this.router.navigate(['user-profile']);
        break;
      case 'Reservas':
        this.router.navigate(['orders']);
        break;
      case 'Sair':
          this.logout();
        break;
      default:
          this.router.navigate(['/']);
        break;
    }   
  }

  logout() {
    localStorage.removeItem('user');
    location.reload();
  }

}
