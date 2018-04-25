import { async, 
        ComponentFixture, 
        TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

fdescribe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render two elements", () => {
    let element = fixture.nativeElement;
    expect(element.querySelectorAll('ul').length)
    .toBe(1);
    expect(element.querySelectorAll('li').length)
                                      .toBe(2);

    component.show = false;
    fixture.detectChanges(); //apply changes to html

    expect(element.querySelectorAll('ul').length)
    .toBe(0);
    expect(element.querySelectorAll('li').length)
                                      .toBe(0);

  expect(element.querySelectorAll('p')[0].textContent)
  .toBe("List is hidden");

  component.show = true;
  component.addMember("New one");
  fixture.detectChanges();
  });

});
