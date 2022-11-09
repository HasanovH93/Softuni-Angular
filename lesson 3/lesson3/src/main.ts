// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  import { Observable }  from "rxjs"
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));


//   const _setInterval = window.setInterval;

//   (window as any).setInterval = function(...args: any[]): number {
//    console.log('setInterval was called', args)
//    return _setInterval.apply(this,args as any) as unknown as number
//   }


const o = new Observable(ob => {
  ob.next(100);
  ob.next(200);
  ob.next(300);
  ob.complete()
});


o.subscribe(console.log)