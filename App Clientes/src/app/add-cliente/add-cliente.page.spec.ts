import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddClientePage } from './add-cliente.page';

describe('AddClientePage', () => {
  let component: AddClientePage;
  let fixture: ComponentFixture<AddClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
