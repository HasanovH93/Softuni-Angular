import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-stand-alone',
  templateUrl: './stand-alone.component.html',
  styleUrls: ['./stand-alone.component.scss']
})
export class StandAloneComponent {

  @Input() showValue = false
}
