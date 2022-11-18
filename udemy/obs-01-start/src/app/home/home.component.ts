import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs'
import { map,filter } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private fistOBsSubscription : Subscription

  constructor() { }

  ngOnInit() {
    // this.fistOBsSubscription = interval(1000).subscribe( count => {
    //     console.log(count)
    // }) 
    
    const hello = new Observable(observer => {
      let count: number = 0;
      setInterval(() => {
        observer.next(count);
        if(count == 5){
          observer.complete()
        }
        if(count >= 3){
          observer.error(new Error('Count is greater 3'))
        }
        count++
      }, 1000)
    });

   

  this.fistOBsSubscription =  hello.pipe(filter(data => {
    return data > 0
  }), map((data: number) => {
    return 'Round: ' + (data + 1);

  })).subscribe(data => {
      console.log(data)
    },error => {
      console.log(error);
      alert(error.message)
    }, () => {
      console.log('Completed!')
    })
    
  }

  ngOnDestroy(): void {
    this.fistOBsSubscription.unsubscribe()
  }

}
