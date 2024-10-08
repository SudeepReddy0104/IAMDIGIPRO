import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEngineOptimizationComponent } from './search-engine-optimization.component';

describe('SearchEngineOptimizationComponent', () => {
  let component: SearchEngineOptimizationComponent;
  let fixture: ComponentFixture<SearchEngineOptimizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchEngineOptimizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEngineOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
