import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

export interface ICustomEvent {
  test: number;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit, OnDestroy {
  @Input() user!: {
    firstName: string;
    lastName: string;
  };
  @Input() showLastName!: boolean;

  @Input() staticString!: String;

  @Output() customEvent = new EventEmitter<ICustomEvent>();

  constructor() {
    
    console.log(this.user);
  }

  ngOnInit(): void {
    console.log(this.user)
  }

  ngOnDestroy(): void {
    
  }

  selectClickHandler($event: MouseEvent) {
    $event.stopPropagation();
    this.customEvent.emit({ test: 123 });
  }
}


