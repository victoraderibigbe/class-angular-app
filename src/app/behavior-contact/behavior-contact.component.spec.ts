import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorContactComponent } from './behavior-contact.component';

describe('BehaviorContactComponent', () => {
  let component: BehaviorContactComponent;
  let fixture: ComponentFixture<BehaviorContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviorContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
