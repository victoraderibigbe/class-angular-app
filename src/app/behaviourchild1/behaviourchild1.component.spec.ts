import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behaviourchild1Component } from './behaviourchild1.component';

describe('Behaviourchild1Component', () => {
  let component: Behaviourchild1Component;
  let fixture: ComponentFixture<Behaviourchild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Behaviourchild1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Behaviourchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
