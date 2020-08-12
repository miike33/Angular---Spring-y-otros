import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarClientePage } from './mostrar-cliente.page';

describe('MostrarClientePage', () => {
  let component: MostrarClientePage;
  let fixture: ComponentFixture<MostrarClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
