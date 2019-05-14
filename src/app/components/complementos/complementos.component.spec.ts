import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementosComponent } from './complementos.component';

describe('ComplementosComponent', () => {
  let component: ComplementosComponent;
  let fixture: ComponentFixture<ComplementosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplementosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
