import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantBot } from './plant-bot';

describe('PlantBot', () => {
  let component: PlantBot;
  let fixture: ComponentFixture<PlantBot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantBot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantBot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
