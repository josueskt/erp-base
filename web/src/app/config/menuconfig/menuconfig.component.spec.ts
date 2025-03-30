import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuconfigComponent } from './menuconfig.component';

describe('MenuconfigComponent', () => {
  let component: MenuconfigComponent;
  let fixture: ComponentFixture<MenuconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuconfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
