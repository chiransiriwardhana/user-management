import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrDeleteComponent } from './usr-delete.component';

describe('UsrDeleteComponent', () => {
  let component: UsrDeleteComponent;
  let fixture: ComponentFixture<UsrDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsrDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsrDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
