import { Component, EventEmitter, Input, OnInit, Output, HostListener, ElementRef,  } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() items: string[] = [];
  @Input() selected: string = '';
  @Output() selectedChange = new EventEmitter<string>();

  opened = false;

  constructor(private hostRef: ElementRef) {
    console.log('constructor', this.items);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.items);
    if (!this.items.length) {
      throw new Error('items is required');
    }

    if (!this.selected) {
      this.selected = this.items[0];
    }
  }

  handleClickItem(item: string) {
    this.selectedChange.emit(item);
    this.opened = false;
  }

  handleSelectedClick() {
    this.opened = !this.opened;
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent) {
    // si le click est en dehors de la balise hote (app-select)
    // on referme la popup
    if (!this.hostRef.nativeElement.contains(event.target)) {
      this.opened = false;
    }
  }
}
