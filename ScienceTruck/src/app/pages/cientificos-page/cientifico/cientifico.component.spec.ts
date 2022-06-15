import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CientificoComponent } from './cientifico.component';

describe('CientificoComponent', () => {
  let component: CientificoComponent;
  let fixture: ComponentFixture<CientificoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CientificoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CientificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
