import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeHTMLComponent } from './code-html.component';

describe('CodeHTMLComponent', () => {
  let component: CodeHTMLComponent;
  let fixture: ComponentFixture<CodeHTMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeHTMLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
