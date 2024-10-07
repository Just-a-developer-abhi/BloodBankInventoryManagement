import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsDataComponent } from './donors-data.component';

describe('DonorsDataComponent', () => {
  let component: DonorsDataComponent;
  let fixture: ComponentFixture<DonorsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonorsDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
