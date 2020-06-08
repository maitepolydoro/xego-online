import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { MenuComponent } from './pages/menu/menu.component';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { OfferRequestComponent } from './pages/offer-request/offer-request.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: '', component: MenuComponent, canActivate: [AuthGuardService], children: [
    { path: '', component: DashboardComponent, canActivate: [AuthGuardService]  },
    { path: 'offer-request', component: OfferRequestComponent, canActivate: [AuthGuardService]  },
    { path: 'my-requests', component: MyRequestsComponent, canActivate: [AuthGuardService]  }
  ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
