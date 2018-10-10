import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

import { RealmsDto } from './DTOs/realmsDto';
import { ChampionsDto } from './DTOs/championsDto';
import { ChampionDto } from './DTOs/championDto';

@Injectable()
export class DDragonService {

  isChampionReady = false;
  onChampionsReady = new EventEmitter<{}>();

  realms: RealmsDto;
  champions: ChampionDto[] = [];

  championsImagesUrl = '';

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<RealmsDto>('https://ddragon.leagueoflegends.com/realms/eune.json')
      .subscribe(
        (data) => {
          this.realms = data;
          this.setChampionsImagesUrlVersion(this.realms.n.champion);
          this.httpClient.get<ChampionsDto>('http://ddragon.leagueoflegends.com/cdn/'
          + this.realms.n.champion
          + '/data/en_US/champion.json')
            .subscribe(
              (champions) => {
              Object.keys(champions.data).forEach(e => this.champions.push(champions.data[e]));
              this.isChampionReady = true;
              this.onChampionsReady.emit();
          });
        }
      );
  }

  private setChampionsImagesUrlVersion(version: String) {
    this.championsImagesUrl = 'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/champion/';
  }
}
