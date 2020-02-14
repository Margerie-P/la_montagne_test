import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieLocaleComponent } from './vie-locale.component';

describe('VieLocaleComponent', () => {
  let component: VieLocaleComponent;
  let fixture: ComponentFixture<VieLocaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieLocaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieLocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
