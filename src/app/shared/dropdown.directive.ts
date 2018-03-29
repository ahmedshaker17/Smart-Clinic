import { Directive, HostListener, HostBinding ,Input} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  constructor() { }
  @HostBinding('class.open') isOpened: boolean = false;
  @HostListener('click') mouseClick(eventData: Event) {
    this.isOpened = !this.isOpened;
  }

}
