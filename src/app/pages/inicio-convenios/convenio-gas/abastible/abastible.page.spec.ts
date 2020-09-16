import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbastiblePage } from './abastible.page';

describe('AbastiblePage', () => {
  let component: AbastiblePage;
  let fixture: ComponentFixture<AbastiblePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbastiblePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbastiblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
