import { Directive,
         ElementRef, 
         Input, 
         OnInit, 
         OnDestroy,
         Renderer2, // wrapper for dom APIs
         HostListener
} from '@angular/core';

// Attribute level

// <div appHighlight />
// <p appHighlight

//p, dive etc are host elements

@Directive({
  selector: '[appHighlight]',
  // help to get instance of directive
  exportAs: 'appHighlight'
})
export class HighlightDirective implements OnInit, OnDestroy {

  @Input()
  color: string = "lightgreen";

  constructor(private hostElement: ElementRef, 
              private renderer: Renderer2) { 

                console.log("Directive created")

              }

  ngOnInit() {
    console.log("Directive init");
  }

  ngOnDestroy() {
    console.log("Directive destroy");
  }

  @HostListener('click')
  onClick() {
    alert("host click");
  }

  @HostListener('mouseenter')
  onEnter() {
      // nativeElement is real DOM
      // elementRef is Angular wrapper for dom
     this.renderer.setStyle(
            this.hostElement.nativeElement,
            "background",
            this.color
     )
  }


  @HostListener('mouseleave')
  onLeave() {
    this.renderer.removeStyle(
              this.hostElement.nativeElement,
              "background"
    )
  }

  setColor(color: string) {
    console.log("set color called");
    this.color = color;
  }

}