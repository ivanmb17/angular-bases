import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  public heroes: string[] = ['Hulk','Thor','Spiderman','Black Panther','Black Widow','Doctor Strange'];
  public deletedHero?: string = '';


  removeLastHero(): void {
    this.deletedHero = this.heroes.pop();

  }
  reestablecer():void{
    this.heroes = ['Hulk','Thor','Spiderman','Black Panther','Black Widow','Doctor Strange'];
  }


}
