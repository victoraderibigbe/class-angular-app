import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestserviceComponent } from './testservice.component';

describe('TestserviceComponent', () => {
  let component: TestserviceComponent;
  let fixture: ComponentFixture<TestserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
