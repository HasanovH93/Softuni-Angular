import { Observable } from 'rxjs'


function getValue(){
 return new Promise((res) => {
    setTimeout(() => {
     res("TEST")
    }, 2000)
 })
}


function getValue2(cb: (...args: any[]) => void) {
    setTimeout(() => {
        cb('TEST');
    }, 2000)
}



//cps
getValue2(function (value) {
    console.log(value)
});

[1]
.map(function(x){ return x + 1})
.map(function(x){return x * x})


//promise chain


Promise.resolve(1)
.then(function(value) {console.log(value)})
.then();



[1,2,3,4]
.map(function(x){ return x + 1})
.map(function(x){return x * x})

const o = new Observable(ob => {
    ob.next(100);
    ob.next(200;
    ob.next(300);
    ob.complete()
});


o.subscribe(console.log)