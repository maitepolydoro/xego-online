import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { PoModule } from '@po-ui/ng-components';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { AgmCoreModule } from '@agm/core';
import { OfferRequestComponent } from './offer-request/offer-request.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [   
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    MyRequestsComponent,
    OfferRequestComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    PoModule,
    PoPageLoginModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLcASkIq0DdzNy5ctQujinvC7iDwNga2c'
    })
  ]
})
export class PagesModule { }
