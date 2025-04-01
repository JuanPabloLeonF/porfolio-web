import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCSSComponent } from './code-css.component';

describe('CodeCSSComponent', () => {
  let component: CodeCSSComponent;
  let fixture: ComponentFixture<CodeCSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeCSSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
