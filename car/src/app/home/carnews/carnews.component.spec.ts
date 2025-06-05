import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnewsComponent } from './carnews.component';

describe('CarnewsComponent', () => {
  let component: CarnewsComponent;
  let fixture: ComponentFixture<CarnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarnewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
