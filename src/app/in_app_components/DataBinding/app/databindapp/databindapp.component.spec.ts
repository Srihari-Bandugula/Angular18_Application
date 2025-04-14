import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindappComponent } from './databindapp.component';

describe('DatabindappComponent', () => {
  let component: DatabindappComponent;
  let fixture: ComponentFixture<DatabindappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabindappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
