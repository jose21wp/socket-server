import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FichaPersonalPage } from './ficha-personal.page';

describe('FichaPersonalPage', () => {
  let component: FichaPersonalPage;
  let fixture: ComponentFixture<FichaPersonalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaPersonalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FichaPersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
