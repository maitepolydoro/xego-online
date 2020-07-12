import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  paymentHistory = [];
  constructor() { }

  ngOnInit(): void {
    this.paymentHistory = [
      { property: 'Tipo', type: 'string' },
      { property: 'Valor', type: 'string' },
      { property: 'Data', type: 'string' },
    ]
  }

}
