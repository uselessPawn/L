import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() show = false
  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onClose(event: MouseEvent) {
    event.stopPropagation();
    this.close.emit();
  }
}
