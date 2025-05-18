import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimamicformComponent } from './dimamicform.component';

describe('DimamicformComponent', () => {
  let component: DimamicformComponent;
  let fixture: ComponentFixture<DimamicformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DimamicformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimamicformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
