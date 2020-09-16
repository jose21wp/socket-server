import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PruebaVideoPage } from './prueba-video.page';

describe('PruebaVideoPage', () => {
  let component: PruebaVideoPage;
  let fixture: ComponentFixture<PruebaVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PruebaVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
