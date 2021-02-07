import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFilesComponent } from './banner-files.component';

describe('BannerFilesComponent', () => {
  let component: BannerFilesComponent;
  let fixture: ComponentFixture<BannerFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
