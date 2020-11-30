import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RentalContentComponent } from './rental-content.component';

describe('RentalContentComponent', () => {
  let component: RentalContentComponent;
  let fixture: ComponentFixture<RentalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RentalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
