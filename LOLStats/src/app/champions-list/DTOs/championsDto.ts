import { ChampionsDataDto } from './championsDataDto';

export interface ChampionsDto {
  type: string;
  format: string;
  version: string;
  data: ChampionsDataDto;
}
