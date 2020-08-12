import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddEditItemPage } from './add-edit-item.page';

describe('AddEditItemPage', () => {
  let component: AddEditItemPage;
  let fixture: ComponentFixture<AddEditItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
