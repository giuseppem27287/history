import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloHistoryComponent } from './modulo-history.component';

describe('ModuloHistoryComponent', () => {
  let component: ModuloHistoryComponent;
  let fixture: ComponentFixture<ModuloHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
