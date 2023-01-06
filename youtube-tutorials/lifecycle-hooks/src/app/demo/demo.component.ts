import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges,  } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit, OnChanges, DoCheck {
  @Input() value: string = 'procademy';

  constructor() {
    console.log('Construrtor Called');
    // console.log(this.value);
  }

  ngOnChanges(change: SimpleChanges){
     console.log('ngOnChanges Called')
     console.log(change)
  }

  ngOnInit(): void {
    console.log('ngOnInit Called')
    // console.log(this.value)
  }

  ngDoCheck(): void {
    
  }
}
