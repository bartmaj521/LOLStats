import { Component, OnInit } from '@angular/core';

import { DDragonService } from './ddragon.service';
import { RealmsDto } from './DTOs/realmsDto';
import { ChampionDto } from './DTOs/championDto';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.css']
})
export class ChampionsListComponent implements OnInit {

  champions: ChampionDto[] = [];
  championsImagesUrl: string;

  constructor(private ddragon: DDragonService) {
    ddragon.getRealms()
    .subscribe(
      (data: RealmsDto) => {
        console.log(data);
        this.championsImagesUrl = 'http://ddragon.leagueoflegends.com/cdn/' + data.n.champion + '/img/champion/';
        console.log(this.championsImagesUrl);
        ddragon.getChampions()
        .subscribe(
          (champions: ChampionDto[]) => {
            this.champions = champions;
            console.log(this.champions);
          }
        );
      }
    );
  }

  ngOnInit() {
  }

}
