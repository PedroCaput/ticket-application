import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarshopPageComponent } from './carshop-page.component';

describe('CarshopPageComponent', () => {
  let component: CarshopPageComponent;
  let fixture: ComponentFixture<CarshopPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarshopPageComponent]
    });
    fixture = TestBed.createComponent(CarshopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
