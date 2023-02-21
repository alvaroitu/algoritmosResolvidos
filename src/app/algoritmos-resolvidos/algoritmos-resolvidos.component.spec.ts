import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoritmosResolvidosComponent } from './algoritmos-resolvidos.component';

describe('AlgoritmosResolvidosComponent', () => {
  let component: AlgoritmosResolvidosComponent;
  let fixture: ComponentFixture<AlgoritmosResolvidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoritmosResolvidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoritmosResolvidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
