import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactInfoPage } from './contact-info.page';

describe('ContactInfoPage', () => {
  let component: ContactInfoPage;
  let fixture: ComponentFixture<ContactInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
