import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeJavascriptComponent } from './code-javascript.component';

describe('CodeJavascriptComponent', () => {
  let component: CodeJavascriptComponent;
  let fixture: ComponentFixture<CodeJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeJavascriptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
