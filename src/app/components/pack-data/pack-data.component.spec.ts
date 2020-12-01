import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PackDataComponent } from './pack-data.component';

describe('PackDataComponent', () => {
  let component: PackDataComponent;
  let fixture: ComponentFixture<PackDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackDataComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PackDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
