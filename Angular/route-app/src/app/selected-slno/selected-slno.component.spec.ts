import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSlnoComponent } from './selected-slno.component';

describe('SelectedSlnoComponent', () => {
  let component: SelectedSlnoComponent;
  let fixture: ComponentFixture<SelectedSlnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedSlnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedSlnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
