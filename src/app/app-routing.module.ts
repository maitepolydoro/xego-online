import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { MenuComponent } from './pages/menu/menu.component';
import { OfferRequestComponent } from './pages/offer-request/offer-request.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { MyTripsComponent } from './pages/my-trips/my-trips.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: '', component: MenuComponent, canActivate: [AuthGuardService], children: [
    { path: '', component: DashboardComponent, canActivate: [AuthGuardService]  },
    { path: 'offer-request', component: OfferRequestComponent, canActivate: [AuthGuardService]  },
    { path: 'my-trips', component: MyTripsComponent, canActivate: [AuthGuardService]  },
    { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuardService]  }
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
