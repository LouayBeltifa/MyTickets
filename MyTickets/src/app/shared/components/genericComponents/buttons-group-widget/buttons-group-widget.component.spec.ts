import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonsGroupWidgetComponent } from './buttons-group-widget.component';


describe('ChartWidgetComponent', () => {
  let component: ButtonsGroupWidgetComponent;
  let fixture: ComponentFixture<ButtonsGroupWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsGroupWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsGroupWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
