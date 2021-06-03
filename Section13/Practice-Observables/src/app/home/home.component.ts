import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    //building a new OBSERVABLE
    //1st import PARAMS
    //this.firstObsSubscription = interval(1000).subscribe(count => {
    //  console.log(count);
    //});
    const customIntervalObservable: any = Observable.create(observer => {
      let count = 0;
      setInterval( () => { 
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          //whenever an Observable throws an error, it's done, it dies.
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    //the error does not complete the Observale, it does no complete it, it cancels the error!
    this.firstObsSubscription = customIntervalObservable.pipe(filter(data => {
      return data > 0;
    }), map( (data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Completed!');
    });
  }

  ngOnDestroy():void {
    this.firstObsSubscription.unsubscribe();
  }

}
 