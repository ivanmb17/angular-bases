import { NgModule } from "@angular/core";
import { counterComponent } from "./counter/counter.components";

@NgModule({
    declarations: [counterComponent],
    exports: [counterComponent],
    imports: [],
    providers: [],
    bootstrap: []
 })

 export class CounterModule { }
