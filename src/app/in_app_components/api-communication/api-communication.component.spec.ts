import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APICommunicationComponent } from './api-communication.component';

describe('APICommunicationComponent', () => {
  let component: APICommunicationComponent;
  let fixture: ComponentFixture<APICommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APICommunicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APICommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
