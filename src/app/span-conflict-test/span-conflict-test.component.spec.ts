import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanConflictTestComponent } from './span-conflict-test.component';

describe('SpanConflictTestComponent', () => {
  let component: SpanConflictTestComponent;
  let fixture: ComponentFixture<SpanConflictTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanConflictTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpanConflictTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
