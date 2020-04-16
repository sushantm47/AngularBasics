import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketPageComponent } from './cricket-page.component';

describe('CricketPageComponent', () => {
  let component: CricketPageComponent;
  let fixture: ComponentFixture<CricketPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
