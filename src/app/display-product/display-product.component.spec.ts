import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProductComponent } from './display-product.component';

describe('DisplayProductComponent', () => {
  let component: DisplayProductComponent;
  let fixture: ComponentFixture<DisplayProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
