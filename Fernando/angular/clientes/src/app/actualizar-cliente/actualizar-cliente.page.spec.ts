import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualizarClientePage } from './actualizar-cliente.page';

describe('ActualizarClientePage', () => {
  let component: ActualizarClientePage;
  let fixture: ComponentFixture<ActualizarClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
