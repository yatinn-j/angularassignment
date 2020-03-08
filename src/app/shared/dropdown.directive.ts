import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding("class.open") isOpen = false; // 'open' is bootstrap class here, which is toggling list dropdown
  // @HostListener("click") toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }
  @HostListener("document: click", ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) { }

}
