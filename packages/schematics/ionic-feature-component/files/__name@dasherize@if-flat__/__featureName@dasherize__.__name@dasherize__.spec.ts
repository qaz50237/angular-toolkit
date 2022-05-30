import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { <%= classify(featureName) %><%= classify(name) %> } from './<%= dasherize(name) %>.component';

describe('<%= classify(featureName) %><%= classify(name) %>', () => {
  let component: <%= classify(featureName) %><%= classify(name) %>;
  let fixture: ComponentFixture<<%= classify(featureName) %><%= classify(name) %>>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= classify(featureName) %><%= classify(name) %> ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(<%= classify(featureName) %><%= classify(name) %>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
