import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSelectedComponent } from './detail-selected.component';

describe('DetailSelectedComponent', () => {
  let component: DetailSelectedComponent;
  let fixture: ComponentFixture<DetailSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
