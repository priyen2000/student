import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CataComponent } from './cata.component';

describe('CataComponent', () => {
  let component: CataComponent;
  let fixture: ComponentFixture<CataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
