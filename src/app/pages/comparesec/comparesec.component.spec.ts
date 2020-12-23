import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparesecComponent } from './comparesec.component';

describe('ComparesecComponent', () => {
  let component: ComparesecComponent;
  let fixture: ComponentFixture<ComparesecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparesecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparesecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
