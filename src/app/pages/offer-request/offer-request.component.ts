import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { PoStepperItem, PoStepComponent, PoModalComponent, PoModalAction } from '@po-ui/ng-components';
import { NgForm } from '@angular/forms';
import { ITripRequest } from 'src/app/interfaces/trip-request.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-request',
  templateUrl: './offer-request.component.html',
  styleUrls: ['./offer-request.component.css']
})
export class OfferRequestComponent implements OnInit {
  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;
  tripRequest = {} as ITripRequest;
  currentActiveStep: PoStepComponent;
  validOffer = false;
  averagePrice = 300;
  fixedOffer = true;
  inputAverage = 0;
  qtPeople = 0;
  checkIn = new Date();
  checkOut = new Date();
  constructor() { }
  @ViewChild(PoModalComponent, { static: true }) modalOk: PoModalComponent;
  
  ngOnInit(): void {  
    this.checkIn.setDate(this.checkIn.getDate() + 1)  ;
    this.checkOut.setDate(this.checkIn.getDate() + 5)  ;
  }

  primaryAction: PoModalAction = {
    action: () => {
      window.location.reload();
      this.modalOk.close();
    },
    label: 'Ok'
  };

  canActiveNextStep(form: NgForm) {
    console.log(this.inputAverage)
    if(this.inputAverage === 0) {
      this.fixedOffer = false;
    }
    return true;
  }


  closeOk() {
    this.modalOk.open();
  }
 

}
