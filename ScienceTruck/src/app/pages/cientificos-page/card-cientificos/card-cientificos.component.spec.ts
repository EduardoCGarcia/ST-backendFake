import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCientificosComponent } from './card-cientificos.component';

describe('CardCientificosComponent', () => {
  let component: CardCientificosComponent;
  let fixture: ComponentFixture<CardCientificosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCientificosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCientificosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
