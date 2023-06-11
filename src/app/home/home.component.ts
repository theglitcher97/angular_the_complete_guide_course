import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public counter: any;

  private subscriptions: Subscription = new Subscription();

  constructor() {}

  ngOnInit() {
    // emitting event with Interval rxjs operator
    //! BE CAREFUL, Angular won't unsubscribe from this observable,
    //! if you don't unsubscribe from this observable, it will live FOREVER!!
    //! even if you leave (destroy) this component, and it gets worse, everytime
    //! this component is created, it creates a new Observable.
    //? this observable never completes by itself
    /*const intervalSubscription = interval(1000).subscribe((count) => {
      this.counter = count;
      console.log(count);
    });
    this.subscriptions.add(intervalSubscription);*/

    // Creating out custom intervalObservable
    const customIntervalObservable = Observable.create(
      (observer: Observer<number>) => {
        //? "observer" is a parameter pass by rxjs to our function
        let counter = 0;
        const interval = setInterval(() => {
          //? the "next" method is use to send data to anyone subscribed to this observable
          counter++;
          console.log(counter); // this will be logging while the setInterval is alive
          observer.next(counter); //? this will ONLY send data if the observer isn't completed
          if (counter === 3) {
            //? this completes our observable, thus it wont emit any other value;
            //? even if the setInterval keeps executing
            observer.complete();
            clearInterval(interval);
          }
          if (counter >= 3) {
            //? when we throw an Error, the observer automatically stops
            observer.error(new Error(`Counter surpass the limit: ${counter}`));
          }
        }, 1000);
      }
    );

    const customIntervalSubscription = customIntervalObservable.subscribe({
      //? This function gets triggered everytime new data is emitted from the observable
      next: (count: number) => {
        this.counter = count;
        console.log(count);
      },
      //? This function gets triggered when an Error is launch from the observable
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        //? this is only trigger when the observable completes, not when an Error or something else happens
        console.log('The observable has completed!');
      },
    });
    this.subscriptions.add(customIntervalSubscription);
  }

  ngOnDestroy() {
    //? this will unsubscribe the intervalSubscription just before the component is destroy
    //? and any other subscription we have store in "subscriptions"
    //? this prevent us from creating memory leaks in our program
    this.subscriptions.unsubscribe();
  }
}
