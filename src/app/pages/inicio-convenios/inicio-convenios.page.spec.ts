import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicioConveniosPage } from './inicio-convenios.page';

describe('InicioConveniosPage', () => {
  let component: InicioConveniosPage;
  let fixture: ComponentFixture<InicioConveniosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioConveniosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioConveniosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
