import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSelectedProjectComponent } from './section-selected-project.component';

describe('SectionSelectedProjectComponent', () => {
  let component: SectionSelectedProjectComponent;
  let fixture: ComponentFixture<SectionSelectedProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSelectedProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSelectedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
