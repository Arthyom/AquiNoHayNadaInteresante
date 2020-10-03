import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIncruster]'
})
export class IncrusterDirective {

  constructor( public viewContainerRef: ViewContainerRef ) { }

}
