import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BamboosComponent } from './bamboos.component';

describe('BamboosComponent', () => {
  let component: BamboosComponent;
  let fixture: ComponentFixture<BamboosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BamboosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BamboosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
