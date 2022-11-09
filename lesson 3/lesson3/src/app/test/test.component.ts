import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit, OnChanges {
  @Input() users!: { name: string }[];

  constructor(private cdRef: ChangeDetectorRef) {
    this.cdRef.detach();
  }
  ngOnChanges(): void {
    if (this.users.length > 4) {
      this.cdRef.detectChanges();
    }
  }

  ngOnInit(): void {
    this.cdRef.detectChanges();
  }
}

// const injector = {
//   collection : new Map(),
//   provide(key: any, value: any){
//    this.collection.set(key,value)
//   },
//   get(key: any, defaultValue?: any): any {
//   const result = this.collection.get(key);
//   if(!result){
//     if(defaultValue){ return defaultValue; }
//     throw new Error('Value not found in injector')
//   }
//   return result;
//   }
//  };

//  const Injectors = typeof injector;
 
//  const amount = Symbol('Amount')
//  class Walet {
//   private amount: number
//   constructor(injector:  Injectors) {
//     this.amount = injector.get(amount, 0)
//   }
// }

// class Person {
//   constructor(injector: typeof Injector) {}
// }

//  injector.provide(Walet,Walet);
//  injector.provide(amount, 200)

// const w = new Walet(injector);
// const p = new Person(injector)