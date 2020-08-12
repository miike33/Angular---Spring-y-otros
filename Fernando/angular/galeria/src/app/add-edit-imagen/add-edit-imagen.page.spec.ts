import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddEditImagenPage } from './add-edit-imagen.page';

describe('AddEditImagenPage', () => {
  let component: AddEditImagenPage;
  let fixture: ComponentFixture<AddEditImagenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditImagenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditImagenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
