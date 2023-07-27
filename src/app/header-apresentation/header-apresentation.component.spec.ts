import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderApresentationComponent } from './header-apresentation.component';

describe('HeaderApresentationComponent', () => {
  let component: HeaderApresentationComponent;
  let fixture: ComponentFixture<HeaderApresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderApresentationComponent]
    });
    fixture = TestBed.createComponent(HeaderApresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
