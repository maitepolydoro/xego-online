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
  averagePrice = 0;
  constructor() { }
  @ViewChild(PoModalComponent, { static: true }) modalOk: PoModalComponent;
  
  ngOnInit(): void {    
  }

  primaryAction: PoModalAction = {
    action: () => {
      window.location.reload();
      this.modalOk.close();
    },
    label: 'Ok'
  };

  canActiveNextStep(form: NgForm) {
    console.log(form.valid);

    //return form.valid;
    return true;
  }

  closeOk() {
    this.modalOk.open();
  }
 

}
