import { Component, OnInit } from '@angular/core';

import { DDragonService } from '../shared/services/ddragon/ddragon.service';
import { ChampionDto } from '../shared/services/ddragon/DTOs/championDto';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.css']
})
export class ChampionsListComponent implements OnInit {

  champions: ChampionDto[] = [];
  championsImagesUrl = '';

  constructor(private ddragon: DDragonService) {}

  ngOnInit() {
    if (this.ddragon.isChampionReady) {
      this.champions = this.ddragon.champions;
      this.championsImagesUrl = this.ddragon.championsImagesUrl;
    } else {
      this.ddragon.onChampionsReady.subscribe(
        () => {
          this.champions = this.ddragon.champions;
          this.championsImagesUrl = this.ddragon.championsImagesUrl;
        }
      );
    }
  }

}
