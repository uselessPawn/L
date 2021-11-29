import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferPanelComponent } from './transfer-panel.component';

describe('TransferPanelComponent', () => {
  let component: TransferPanelComponent;
  let fixture: ComponentFixture<TransferPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
