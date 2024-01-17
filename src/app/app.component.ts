import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'order-summary-component';

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
