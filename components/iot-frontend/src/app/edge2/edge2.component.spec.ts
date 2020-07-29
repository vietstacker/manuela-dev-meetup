import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Edge2Component } from './edge2.component';

describe('Edge2Component', () => {
  let component: Edge2Component;
  let fixture: ComponentFixture<Edge2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edge2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Edge2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
