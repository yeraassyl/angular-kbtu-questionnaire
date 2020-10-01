import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilloutComponent } from './fillout.component';

describe('FilloutComponent', () => {
  let component: FilloutComponent;
  let fixture: ComponentFixture<FilloutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilloutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
