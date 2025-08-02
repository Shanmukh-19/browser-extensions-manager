import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionList } from './extension-list';

describe('ExtensionList', () => {
  let component: ExtensionList;
  let fixture: ComponentFixture<ExtensionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
