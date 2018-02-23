import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHomePostComponent } from './blog-home-post.component';

describe('BlogHomePostComponent', () => {
  let component: BlogHomePostComponent;
  let fixture: ComponentFixture<BlogHomePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogHomePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogHomePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
