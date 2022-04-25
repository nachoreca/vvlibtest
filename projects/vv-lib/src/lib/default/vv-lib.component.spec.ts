import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvLibComponent } from './vv-lib.component';

describe('VvLibComponent', () => {
  let component: VvLibComponent;
  let fixture: ComponentFixture<VvLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
