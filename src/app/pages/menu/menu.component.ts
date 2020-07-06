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

  profile: PoToolbarProfile = {
    avatar: 'https://img2.gratispng.com/20180408/zde/kisspng-computer-icons-google-map-maker-world-map-clip-art-location-logo-5ac9b7fd57a289.557040901523169277359.jpg',
    subtitle: 'admin@xego.com.br',
    title: 'Administrator'
  };

  profileActions: Array<PoToolbarAction> = [
  { icon: 'po-icon-user', label: 'Meu Perfil', type: 'danger', separator: true, action: item => this.userProfile() },
  { icon: 'po-icon-exit', label: 'Sair', type: 'danger', separator: true, action: item => this.logout() }
  ];

  notificationActions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon po-icon-exclamation',
      label: 'Sua solicitação foi atualizada!',
      type: 'danger'
    }
  ];

  menus: Array<PoMenuItem> = [
    { label: 'Dashboard', icon: 'po-icon po-icon-home', action: this.onClickMenu.bind(this)},    
    { label: 'Nova solicitação', icon: 'po-icon po-icon-touch', action: this.onClickMenu.bind(this)},
    { label: 'Minhas viagens', icon: 'po-icon po-icon-calendar-ok', action: this.onClickMenu.bind(this)}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // actions: Array<PoToolbarAction> = [
  //   { label: 'Start cash register', action: item => this.showAction(item) },
  //   { label: 'Finalize cash register', action: item => this.showAction(item) },
  //   { label: 'Cash register options', action: item => this.showAction(item) }
  // ];


  getNotificationNumber() {
    return 1;    
  }

  onClickMenu(menu: PoMenuItem) {
    console.log(menu.label);
    switch (menu.label) {
      case 'Nova solicitação':
        this.router.navigate(['/offer-request']);
      break;      
      case 'Minhas viagens':
          this.router.navigate(['/my-trips']);
        break;
      default:
          this.router.navigate(['/']);
        break;
    }   
  }

  userProfile() {
    this.router.navigate(['user-profile']);
  }

  logout() {
    localStorage.removeItem('user');
    location.reload();
  }

}
