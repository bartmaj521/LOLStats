import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { RealmsDto } from './DTOs/realmsDto';
import { ChampionsDto } from './DTOs/championsDto';
import { ChampionDto } from './DTOs/championDto';

@Injectable()
export class DDragonService {

  private realms: RealmsDto;

  constructor(private httpClient: HttpClient) {}

  getRealms(): Observable<RealmsDto> {
    const observable = this.httpClient.get<RealmsDto>('https://ddragon.leagueoflegends.com/realms/eune.json');
    return observable.pipe(map(
      (data) => {
        this.realms = data;
        return data;
      }
    ));
  }

  getChampions(): Observable<ChampionDto[]> {
    return this.httpClient.get<ChampionsDto>('http://ddragon.leagueoflegends.com/cdn/'
      + this.realms.n.champion
      + '/data/en_US/champion.json')
      .pipe(map(
        (data) => {
        const arr: ChampionDto[] = [];
        Object.keys(data.data).forEach(e => arr.push(data.data[e]));
        return arr;
      }));
  }
}
