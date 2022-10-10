import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyAgeComponent } from './family-age.component';

describe('FamilyAgeComponent', () => {
  let component: FamilyAgeComponent;
  let fixture: ComponentFixture<FamilyAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
