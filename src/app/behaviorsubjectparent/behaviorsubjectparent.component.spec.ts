import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorsubjectparentComponent } from './behaviorsubjectparent.component';

describe('BehaviorsubjectparentComponent', () => {
  let component: BehaviorsubjectparentComponent;
  let fixture: ComponentFixture<BehaviorsubjectparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorsubjectparentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviorsubjectparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
