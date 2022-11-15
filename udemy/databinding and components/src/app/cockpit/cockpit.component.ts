import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  @Output() bluePrintAdded = new EventEmitter<{serverName: string, serverContent: string}>()
  
 @ViewChild('serverContent', {static: true}) serverContent : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  
  onAddServer(name: HTMLInputElement){

    this.bluePrintAdded.emit({serverName: name.value, serverContent: this.serverContent.nativeElement.value});
  }

  onAddBlueprint(name: HTMLInputElement){
    this.serverCreated.emit({serverName: name.value, serverContent: this.serverContent.nativeElement.value});
  }
  
}
