import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeReactComponent } from './code-react.component';

describe('CodeReactComponent', () => {
  let component: CodeReactComponent;
  let fixture: ComponentFixture<CodeReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeReactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
