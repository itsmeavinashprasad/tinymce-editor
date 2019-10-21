import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitviewComponent } from './gitview.component';

describe('GitviewComponent', () => {
  let component: GitviewComponent;
  let fixture: ComponentFixture<GitviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
