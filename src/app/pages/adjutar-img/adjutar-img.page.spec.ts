import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdjutarImgPage } from './adjutar-img.page';

describe('AdjutarImgPage', () => {
  let component: AdjutarImgPage;
  let fixture: ComponentFixture<AdjutarImgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjutarImgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdjutarImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
