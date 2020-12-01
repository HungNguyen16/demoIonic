import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacksPage } from './packs.page';

describe('PacksPage', () => {
  let component: PacksPage;
  let fixture: ComponentFixture<PacksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
