import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlogComponent } from './content-blog.component';

describe('ContentBlogComponent', () => {
  let component: ContentBlogComponent;
  let fixture: ComponentFixture<ContentBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentBlogComponent]
    });
    fixture = TestBed.createComponent(ContentBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
