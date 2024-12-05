import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortRequestComponent } from './port-request.component';

describe('PortRequestComponent', () => {
  let component: PortRequestComponent;
  let fixture: ComponentFixture<PortRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
