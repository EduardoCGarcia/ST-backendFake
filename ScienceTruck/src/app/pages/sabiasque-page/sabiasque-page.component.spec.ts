import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiasquePageComponent } from './sabiasque-page.component';

describe('SabiasquePageComponent', () => {
  let component: SabiasquePageComponent;
  let fixture: ComponentFixture<SabiasquePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiasquePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabiasquePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
