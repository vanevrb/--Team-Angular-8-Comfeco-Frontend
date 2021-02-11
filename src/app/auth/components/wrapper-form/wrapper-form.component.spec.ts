import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperFormComponent } from './wrapper-form.component';

describe('WrapperFormComponent', () => {
  let component: WrapperFormComponent;
  let fixture: ComponentFixture<WrapperFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
