import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestorDetailsComponent } from './requestor-details.component';

describe('RequestorDetailsComponent', () => {
  let component: RequestorDetailsComponent;
  let fixture: ComponentFixture<RequestorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
