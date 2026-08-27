import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtmBankingComponent } from './atm-banking/atm-banking.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AtmBankingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'banking-app';
  username: string = 'sardar';
}
