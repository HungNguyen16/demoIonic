import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RechargeCardPage } from './recharge-card.page';

describe('RechargeCardPage', () => {
  let component: RechargeCardPage;
  let fixture: ComponentFixture<RechargeCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargeCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RechargeCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
