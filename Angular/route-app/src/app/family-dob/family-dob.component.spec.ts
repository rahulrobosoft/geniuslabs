import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyDobComponent } from './family-dob.component';

describe('FamilyDobComponent', () => {
  let component: FamilyDobComponent;
  let fixture: ComponentFixture<FamilyDobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyDobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyDobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
