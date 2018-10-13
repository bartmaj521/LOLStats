import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

import { RealmsResponse } from './DTOs/RealmsResponse';
import { ChampionListResponse } from './DTOs/ChampionListResponse';
import { ChampionDto } from './DTOs/ChampionListResponse';
import { IndividualChampionResponse } from './DTOs/IndividualChampionResponse';

@Injectable()
export class DDragonService {

  isChampionReady = false;
  onChampionsReady = new EventEmitter<{}>();

  realms: RealmsResponse;
  champions: ChampionDto[] = [];

  championsDetailedInfoUrl = '';

  championsImagesUrl = '';
  championLoadingImageUrl = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/';

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<RealmsResponse>('https://ddragon.leagueoflegends.com/realms/eune.json')
      .subscribe(
        (data) => {
          this.realms = data;
          this.setChampionsImagesUrlsVersion(this.realms.n.champion);
          this.downloadChampions();
        }
      );
  }

  downloadDetailedChampion(id: string) {
    return this.httpClient
      .get<IndividualChampionResponse>('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/' + id + '.json');
  }

  private downloadChampions() {
    this.httpClient.get<ChampionListResponse>('http://ddragon.leagueoflegends.com/cdn/'
          + this.realms.n.champion
          + '/data/en_US/champion.json')
            .subscribe(
              (champions) => {
              Object.keys(champions.data).forEach(e => this.champions.push(champions.data[e]));
              this.isChampionReady = true;
              this.onChampionsReady.emit();
          });
  }

  private setChampionsImagesUrlsVersion(version: String) {
    this.championsImagesUrl = 'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/champion/';
  }

}
