import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkDirectivesComponent } from './homework-directives.component';

describe('HomeworkDirectivesComponent', () => {
  let component: HomeworkDirectivesComponent;
  let fixture: ComponentFixture<HomeworkDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworkDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
