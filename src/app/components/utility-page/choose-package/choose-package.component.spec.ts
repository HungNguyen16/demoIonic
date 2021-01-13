import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoosePackageComponent } from './choose-package.component';

describe('ChoosePackageComponent', () => {
  let component: ChoosePackageComponent;
  let fixture: ComponentFixture<ChoosePackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosePackageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoosePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
