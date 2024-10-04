import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperToolListComponent } from './developer-tool-list.component';

describe('DeveloperToolListComponent', () => {
  let component: DeveloperToolListComponent;
  let fixture: ComponentFixture<DeveloperToolListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperToolListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperToolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
