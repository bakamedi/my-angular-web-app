import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHomeFooterComponent } from './blog-home-footer.component';

describe('BlogHomeFooterComponent', () => {
  let component: BlogHomeFooterComponent;
  let fixture: ComponentFixture<BlogHomeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogHomeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogHomeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
