import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsWidgetComponent } from './charts-widget.component';

describe('ChartsWidgetComponent', () => {
  let component: ChartsWidgetComponent;
  let fixture: ComponentFixture<ChartsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
