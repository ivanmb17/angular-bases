import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
        <h1>Contador</h1>
        <button class="btn btn-primary mx-2" (click)="decrement()">-</button>
        <span>{{count}}</span>
        <button class="btn btn-primary mx-2" (click)="increment()">+</button>
          <hr>
    `,

})

export class counterComponent{

  public count = 0;

    constructor(){
        this.count = 0;
    }

    increment(){
        this.count++;
    }

    decrement(){
        this.count--;
    }
}
