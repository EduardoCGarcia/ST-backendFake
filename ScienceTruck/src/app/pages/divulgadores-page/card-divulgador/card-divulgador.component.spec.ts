import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDivulgadorComponent } from './card-divulgador.component';

describe('CardDivulgadorComponent', () => {
  let component: CardDivulgadorComponent;
  let fixture: ComponentFixture<CardDivulgadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDivulgadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDivulgadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
