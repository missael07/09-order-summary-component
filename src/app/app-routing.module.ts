import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';

const routes: Routes = [
  {
    path: 'order-summary', component: OrderSummaryComponent
  },
  {
    path: '**', redirectTo: 'order-summary'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
