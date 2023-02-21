import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguagemCComponent } from './linguagem-c.component';

describe('LinguagemCComponent', () => {
  let component: LinguagemCComponent;
  let fixture: ComponentFixture<LinguagemCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinguagemCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinguagemCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
