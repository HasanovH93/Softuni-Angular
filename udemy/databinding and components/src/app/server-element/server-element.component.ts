import { Component, Input, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
 @Input() element: { type: string, name: string, content: string};
 @Input() name: string;
 @ViewChild ('heading', {static: true}) header: ElementRef
 @ContentChild ('contentParagraph', {static: true}) paragraph : ElementRef

  constructor() {
    console.log('constructed called')
   }
  ngOnChanges(changes: SimpleChanges){
  console.log('ngOnChanges Called');
  console.log(changes)
  }

  ngOnInit(): void {
    console.log('Text Content ' + this.header.nativeElement.textContent);
    console.log('Paragraph ' + this.paragraph.nativeElement.textContent)
  }
  ngDoCheck(): void {
    console.log('ngDoCheck Called')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContent Init called !')
    console.log('Paragraph ' + this.paragraph.nativeElement.textContent)
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContent Checked called!')
  }
  ngAfterViewInit(): void {
    console.log('Text Content ' + this.header.nativeElement.textContent)
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called!')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy Called!')
  }
  
}
