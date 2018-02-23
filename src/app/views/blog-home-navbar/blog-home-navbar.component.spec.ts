import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHomeNavbarComponent } from './blog-home-navbar.component';

describe('BlogHomeNavbarComponent', () => {
  let component: BlogHomeNavbarComponent;
  let fixture: ComponentFixture<BlogHomeNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogHomeNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogHomeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
