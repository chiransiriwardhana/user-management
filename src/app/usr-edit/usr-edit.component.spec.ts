import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrEditComponent } from './usr-edit.component';

describe('UsrEditComponent', () => {
  let component: UsrEditComponent;
  let fixture: ComponentFixture<UsrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsrEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
