import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingFormComponent } from './loading-form.component';

describe('LoadingFormComponent', () => {
  let component: LoadingFormComponent;
  let fixture: ComponentFixture<LoadingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
