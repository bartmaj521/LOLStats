import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

export interface RealmsDto {
  n: {
    item: string;
    rune: string;
    mastery: string;
    summoner: string;
    champion: string;
    profileicon: string;
    map: string;
    language: string;
    sticker: string;
  };
  v: string;
  l: string;
  cdn: string;
  dd: string;
  lg: string;
  css: string;
  profileiconmax: number;
  store?: any;
}

export interface ChampionsDto {
  type: string;
  format: string;
  version: string;
  data: Data;
}
export interface Data {
  Aatrox: ChampionDto;
  Ahri: ChampionDto;
  Akali: ChampionDto;
  Alistar: ChampionDto;
  Amumu: ChampionDto;
  Anivia: ChampionDto;
  Annie: ChampionDto;
  Ashe: ChampionDto;
  AurelionSol: ChampionDto;
  Azir: ChampionDto;
  Bard: ChampionDto;
  Blitzcrank: ChampionDto;
  Brand: ChampionDto;
  Braum: ChampionDto;
  Caitlyn: ChampionDto;
  Camille: ChampionDto;
  Cassiopeia: ChampionDto;
  Chogath: ChampionDto;
  Corki: ChampionDto;
  Darius: ChampionDto;
  Diana: ChampionDto;
  Draven: ChampionDto;
  DrMundo: ChampionDto;
  Ekko: ChampionDto;
  Elise: ChampionDto;
  Evelynn: ChampionDto;
  Ezreal: ChampionDto;
  FiddleSticks: ChampionDto;
  Fiora: ChampionDto;
  Fizz: ChampionDto;
  Galio: ChampionDto;
  Gangplank: ChampionDto;
  Garen: ChampionDto;
  Gnar: ChampionDto;
  Gragas: ChampionDto;
  Graves: ChampionDto;
  Hecarim: ChampionDto;
  Heimerdinger: ChampionDto;
  Illaoi: ChampionDto;
  Irelia: ChampionDto;
  Ivern: ChampionDto;
  Janna: ChampionDto;
  JarvanIV: ChampionDto;
  Jax: ChampionDto;
  Jayce: ChampionDto;
  Jhin: ChampionDto;
  Jinx: ChampionDto;
  Kalista: ChampionDto;
  Karma: ChampionDto;
  Karthus: ChampionDto;
  Kassadin: ChampionDto;
  Katarina: ChampionDto;
  Kayle: ChampionDto;
  Kennen: ChampionDto;
  Khazix: ChampionDto;
  Kindred: ChampionDto;
  Kled: ChampionDto;
  KogMaw: ChampionDto;
  Leblanc: ChampionDto;
  LeeSin: ChampionDto;
  Leona: ChampionDto;
  Lissandra: ChampionDto;
  Lucian: ChampionDto;
  Lulu: ChampionDto;
  Lux: ChampionDto;
  Malphite: ChampionDto;
  Malzahar: ChampionDto;
  Maokai: ChampionDto;
  MasterYi: ChampionDto;
  MissFortune: ChampionDto;
  MonkeyKing: ChampionDto;
  Mordekaiser: ChampionDto;
  Morgana: ChampionDto;
  Nami: ChampionDto;
  Nasus: ChampionDto;
  Nautilus: ChampionDto;
  Nidalee: ChampionDto;
  Nocturne: ChampionDto;
  Nunu: ChampionDto;
  Olaf: ChampionDto;
  Orianna: ChampionDto;
  Pantheon: ChampionDto;
  Poppy: ChampionDto;
  Quinn: ChampionDto;
  Rammus: ChampionDto;
  RekSai: ChampionDto;
  Renekton: ChampionDto;
  Rengar: ChampionDto;
  Riven: ChampionDto;
  Rumble: ChampionDto;
  Ryze: ChampionDto;
  Sejuani: ChampionDto;
  Shaco: ChampionDto;
  Shen: ChampionDto;
  Shyvana: ChampionDto;
  Singed: ChampionDto;
  Sion: ChampionDto;
  Sivir: ChampionDto;
  Skarner: ChampionDto;
  Sona: ChampionDto;
  Soraka: ChampionDto;
  Swain: ChampionDto;
  Syndra: ChampionDto;
  TahmKench: ChampionDto;
  Taliyah: ChampionDto;
  Talon: ChampionDto;
  Taric: ChampionDto;
  Teemo: ChampionDto;
  Thresh: ChampionDto;
  Tristana: ChampionDto;
  Trundle: ChampionDto;
  Tryndamere: ChampionDto;
  TwistedFate: ChampionDto;
  Twitch: ChampionDto;
  Udyr: ChampionDto;
  Urgot: ChampionDto;
  Varus: ChampionDto;
  Vayne: ChampionDto;
  Veigar: ChampionDto;
  Velkoz: ChampionDto;
  Vi: ChampionDto;
  Viktor: ChampionDto;
  Vladimir: ChampionDto;
  Volibear: ChampionDto;
  Warwick: ChampionDto;
  Xerath: ChampionDto;
  XinZhao: ChampionDto;
  Yasuo: ChampionDto;
  Yorick: ChampionDto;
  Zac: ChampionDto;
  Zed: ChampionDto;
  Ziggs: ChampionDto;
  Zilean: ChampionDto;
  Zyra: ChampionDto;
}
export interface ChampionDto {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: Info;
  image: Image;
  tags?: (string)[] | null;
  partype: string;
  stats: Stats;
}
export interface Info {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}
export interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}
export interface Stats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedoffset: number;
  attackspeedperlevel: number;
}
