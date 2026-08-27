import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmBankingComponent } from './atm-banking.component';

describe('AtmBankingComponent', () => {
  let component: AtmBankingComponent;
  let fixture: ComponentFixture<AtmBankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtmBankingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtmBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
