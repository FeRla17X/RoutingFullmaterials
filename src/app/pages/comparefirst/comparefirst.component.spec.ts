import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparefirstComponent } from './comparefirst.component';

describe('ComparefirstComponent', () => {
  let component: ComparefirstComponent;
  let fixture: ComponentFixture<ComparefirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparefirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparefirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
