import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCritComponent } from './search-crit.component';

describe('SearchCritComponent', () => {
  let component: SearchCritComponent;
  let fixture: ComponentFixture<SearchCritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCritComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
