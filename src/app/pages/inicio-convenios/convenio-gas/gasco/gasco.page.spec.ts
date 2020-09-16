import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GascoPage } from './gasco.page';

describe('GascoPage', () => {
  let component: GascoPage;
  let fixture: ComponentFixture<GascoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GascoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GascoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
