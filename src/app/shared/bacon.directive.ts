import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: '[appBacon]' })
export class BaconDirective {
  ingredient = 'mayo';

  constructor(elem: ElementRef, renderer: Renderer2) {
    const bacon = renderer.createText('🥓🥓🥓');
    renderer.appendChild(elem.nativeElement, bacon);
  }
}
