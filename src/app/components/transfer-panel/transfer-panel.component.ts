import { Component, OnInit } from '@angular/core';
import { TransfetItem } from './transferItem';

@Component({
  selector: 'app-transfer-panel',
  templateUrl: './transfer-panel.component.html',
  styleUrls: ['./transfer-panel.component.css']
})
export class TransferPanelComponent implements OnInit {
  list: Set<TransfetItem> = new Set();
  selected: Set<TransfetItem> = new Set();
  constructor() {
    this.setList();
  }

  ngOnInit(): void {

  }

  private setList() {
    this.list = new Set();
    this.selected = new Set();

    const prefix = 'item' + Date.now().toString().slice(-3)
    for (let i = 0; i < 10; i++) {
      this.list.add({
        key: prefix + '_' + i,
        value: `${prefix}${i + 1}`,
        checked: i % 6 === 0
      })
    }
  }


  trackByItem() {

  }

  clickItem(item: TransfetItem) {
    if(this.selected.has(item)) {
      this.selected.delete(item)
    } else {
      this.selected.add(item)
    }
  }
}
