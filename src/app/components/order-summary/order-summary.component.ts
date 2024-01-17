import { Component } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {

  displayCard = true;
  isModalOpen = false;

  plan: string = 'Annual Plan';
  price: string = '$59.99/year';

  viewCard() {
    this.displayCard = true;
  }

  closeCard() {
    this.displayCard = false;
  }

  
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  setPlan(plan:string, price: string) {
    this.plan = plan;
    this.price = price;
    this.closeModal();
  }
}
