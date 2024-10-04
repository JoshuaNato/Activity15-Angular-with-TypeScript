import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopSpecsListComponent } from './laptop-specs-list.component';

describe('LaptopSpecsListComponent', () => {
  let component: LaptopSpecsListComponent;
  let fixture: ComponentFixture<LaptopSpecsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopSpecsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopSpecsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
