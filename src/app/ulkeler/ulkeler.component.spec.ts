import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlkelerComponent } from './ulkeler.component';

describe('UlkelerComponent', () => {
  let component: UlkelerComponent;
  let fixture: ComponentFixture<UlkelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlkelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlkelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
