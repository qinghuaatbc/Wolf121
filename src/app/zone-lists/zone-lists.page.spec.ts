import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneListsPage } from './zone-lists.page';

describe('ZoneListsPage', () => {
  let component: ZoneListsPage;
  let fixture: ComponentFixture<ZoneListsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneListsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
