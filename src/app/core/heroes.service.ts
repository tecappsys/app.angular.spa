
import { Injectable } from '@angular/core';
import { Hero } from '../shared/interface/Hero.interface';

@Injectable()
export class HeroesService {

  private heroes:Hero[] = [
    {
      name: "Aquaman",
      bio: "Aquaman's most recognized power is his telepathic ability to communicate with sea life, which he can summon from great distances.",
      img: "assets/img/aquaman.png",
      appearance: "1941-11-01",
      house:"DC"
    },
    {
      name: "Batman",
      bio: "Batman's main traits are summarized as physical prowess, deductive skills and obsession. Most of the basic characteristics of the comics have varied because of the different interpretations given to the character.",
      img: "assets/img/batman.png",
      appearance: "1939-05-01",
      house:"DC"
    },
    {
      name: "Daredevil",
      bio: "Having lost his sight, Daredevil's four remaining senses were enhanced by radiation to superhuman levels in the accident he had as a child. Despite his blindness, he can see through a sixth sense that serves as a bat-like radar.",
      img: "assets/img/daredevil.png",
      appearance: "1964-01-01",
      house: "Marvel"
    },
    {
      name: "Hulk",
      bio: "His main power is his ability to increase his strength to virtually unlimited levels while increasing his fury. Depending on which Hulk personality is in charge at the time (the Hulk Banner is the weakest, but compensates with his intelligence).",
      img: "assets/img/hulk.png",
      appearance: "1962-05-01",
      house:"Marvel"
    },
    {
      name: "Green Lantern",
      bio: "Possessor of the ring of power possessing the ability to create manifestations of solid light through the use of thought. Is powered by the Green Flame (reviewed by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which was found by a lamp maker named Chang).",
      img: "assets/img/linterna-verde.png",
      appearance: "1940-06-01",
      house: "DC"
    },
    {
      name: "Spider-Man",
      bio: "After being bitten by a radioactive spider, he gained the following superhuman powers, great strength, agility, and the ability to climb walls. Spider-Man's strength allows him to lift 10 tons or more. Thanks to this great strength Spider-Man can perform incredible jumps. A spider-sense, which allows him to know if a danger is looming over him, before it happens. Sometimes this can lead Spider-Man to the source of the danger.",
      img: "assets/img/spiderman.png",
      appearance: "1962-08-01",
      house: "Marvel"
    },
    {
      name: "Wolverine",
      bio: "In Marvel's fictional universe, Wolverine possesses regenerative powers that can heal any wound, no matter how mortal it may be, and this same power makes him immune to any disease existing on Earth and some extraterrestrials. He also possesses superhuman strength, which although it does not compare to that of other superheroes such as the Hulk, it surpasses that of any human.",
      img: "assets/img/wolverine.png",
      appearance: "1974-11-01",
      house: "Marvel"
    }
  ];

  public constructor() {}


  public getHeroes():Hero[]{
    return this.heroes;
  }

  public getHeroById( idx: number ){
    return this.heroes[idx];
  }

  public searchHeroes( word:string ):Hero[]{

    let heroesArr:Hero[] = [];
    word = word.toLowerCase();

    for( let i = 0; i < this.heroes.length; i ++ ){

      let heroe = this.heroes[i];

      let name = heroe.name.toLowerCase();

      if( name.indexOf( word ) >= 0  ){
        heroe.idx = i;
        heroesArr.push( heroe )
      }

    }

    return heroesArr;

  }
}