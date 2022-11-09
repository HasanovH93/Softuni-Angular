import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//   import { Observable, map, interval }  from "rxjs"
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  const _setInterval = window.setInterval;

  (window as any).setInterval = function(...args: any[]): number {
   console.log('setInterval was called', args)
   return _setInterval.apply(this,args as any) as unknown as number
  }


// function interval(intervalValue: number = 0) {
//  return new Observable<number>(ob => {
//     let counter = 0;
//     setInterval(() => {
//       ob.next(counter++) 
//     }, intervalValue)
//   });
// }

  // ob.next(100);
  // ob.next(200);
  // ob.next(300);
  // ob.complete()



// interval(5000).pipe(map(x => x+ 3))
// .subscribe(console.log)