import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingInfoComponent } from './listing-info.component';

describe('ListingInfoComponent', () => {
  let component: ListingInfoComponent;
  let fixture: ComponentFixture<ListingInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListingInfoComponent]
    });
    fixture = TestBed.createComponent(ListingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
