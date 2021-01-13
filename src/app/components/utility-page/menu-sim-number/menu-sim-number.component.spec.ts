import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuSimNumberComponent } from './menu-sim-number.component';

describe('MenuSimNumberComponent', () => {
  let component: MenuSimNumberComponent;
  let fixture: ComponentFixture<MenuSimNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSimNumberComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuSimNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
