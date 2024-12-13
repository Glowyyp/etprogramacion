import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajesdispPage } from './viajesdisp.page';

describe('ViajesdispPage', () => {
  let component: ViajesdispPage;
  let fixture: ComponentFixture<ViajesdispPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesdispPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
