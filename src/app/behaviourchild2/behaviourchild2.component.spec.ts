import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behaviourchild2Component } from './behaviourchild2.component';

describe('Behaviourchild2Component', () => {
  let component: Behaviourchild2Component;
  let fixture: ComponentFixture<Behaviourchild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Behaviourchild2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Behaviourchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
