import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-popup-options',
  templateUrl: './popup-options.component.html',
  styleUrls: ['./popup-options.component.css']
})
export class PopupOptionsComponent {
  @Output() close = new EventEmitter<void>();

  constructor(private eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.close.emit();
    }
  }

  onModifier() {
    console.log('Modifier cliqué');
    this.close.emit();
  }

  onSupprimer() {
    console.log('Supprimer cliqué');
    this.close.emit();
  }
}
