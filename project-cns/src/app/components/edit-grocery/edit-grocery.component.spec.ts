import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroceryComponent } from './edit-grocery.component';

describe('EditGroceryComponent', () => {
  let component: EditGroceryComponent;
  let fixture: ComponentFixture<EditGroceryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGroceryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
