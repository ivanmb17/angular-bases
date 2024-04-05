import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;


  get capitallizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.capitallizedName} is ${this.age} years old.`;

  }

  cambiarEdad():void{
    this.age = 25;
  }

  cambiarNombre():void{
    this.name = 'spiderman';
  }

  resetForm():void{
    this.age = 45;
    this.name = 'ironman';
  }

}
