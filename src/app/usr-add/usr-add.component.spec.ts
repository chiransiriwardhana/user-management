import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrAddEditComponent } from './usr-add.component';

describe('UsrAddEditComponent', () => {
  let component: UsrAddEditComponent;
  let fixture: ComponentFixture<UsrAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsrAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsrAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
