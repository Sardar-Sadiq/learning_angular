import { Component } from '@angular/core';

@Component({
  selector: 'app-atm-banking',
  standalone: true,
  imports: [],
  templateUrl: './atm-banking.component.html',
  styleUrl: './atm-banking.component.css'
})
export class AtmBankingComponent {
  //state variables
  accountHolder: string = 'Sarah';
  balance: number = 500;
  isAccountLocked:boolean = false;

  //method triggered when user clicks withdraw
  withdrawCash(){
    if (this.balance >= 20){
      this.balance -= 20;
    }
  }

  toggleLock(){
    this.isAccountLocked = !this.isAccountLocked;
  }
}
