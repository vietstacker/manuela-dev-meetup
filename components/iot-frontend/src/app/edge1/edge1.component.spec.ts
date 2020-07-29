import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Edge1Component } from './edge1.component';

describe('Edge1Component', () => {
  let component: Edge1Component;
  let fixture: ComponentFixture<Edge1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edge1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Edge1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
