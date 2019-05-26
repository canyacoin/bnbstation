import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainnetComponent } from './mainnet.component';

describe('MainnetComponent', () => {
  let component: MainnetComponent;
  let fixture: ComponentFixture<MainnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
