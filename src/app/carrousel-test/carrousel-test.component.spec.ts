import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselTestComponent } from './carrousel-test.component';

describe('CarrouselTestComponent', () => {
  let component: CarrouselTestComponent;
  let fixture: ComponentFixture<CarrouselTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
