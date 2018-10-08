import { Component, OnInit } from '@angular/core';
import { DDragonService, ChampionDto, RealmsDto } from './ddragon.service';

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
