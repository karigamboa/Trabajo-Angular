import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetachuckComponent } from './tarjetachuck.component';

describe('TarjetachuckComponent', () => {
  let component: TarjetachuckComponent;
  let fixture: ComponentFixture<TarjetachuckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetachuckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetachuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
