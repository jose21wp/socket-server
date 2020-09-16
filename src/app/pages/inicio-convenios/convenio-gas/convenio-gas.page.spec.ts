import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConvenioGasPage } from './convenio-gas.page';

describe('ConvenioGasPage', () => {
  let component: ConvenioGasPage;
  let fixture: ComponentFixture<ConvenioGasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvenioGasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConvenioGasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
