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
import { AgmCoreModule } from '@agm/core';
import { OfferRequestComponent } from './offer-request/offer-request.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { PaymentsComponent } from './payments/payments.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import {TableModule} from 'primeng/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PoTagModule } from '@po-ui/ng-components';
import {StepsModule} from 'primeng/steps';
import {ButtonModule} from 'primeng/button';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [   
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    OfferRequestComponent,
    UserProfileComponent,
    MyTripsComponent,
    UserCrudComponent,
    PaymentsComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ScrollingModule,
    PoTagModule,
    ChartModule,    
    TableModule,
    ButtonModule,
    StepsModule,
    BrowserAnimationsModule,
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
