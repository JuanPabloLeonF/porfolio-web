import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTypescriptComponent } from './code-typescript.component';

describe('CodeTypescriptComponent', () => {
  let component: CodeTypescriptComponent;
  let fixture: ComponentFixture<CodeTypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeTypescriptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
