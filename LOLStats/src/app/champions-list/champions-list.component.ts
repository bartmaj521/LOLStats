import { Component, OnInit } from '@angular/core';

import { DDragonService } from '../shared/services/ddragon/ddragon.service';
import { ChampionDto } from '../shared/services/ddragon/DTOs/ChampionListResponse';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.css']
})
export class ChampionsListComponent implements OnInit {

  champions: ChampionDto[] = [];
  championsImagesUrl = '';
  lastChampionClicked = -1;
  desiredChampionInfoBoxPosition = -1;

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

  championClicked(index: number) {
    if (this.lastChampionClicked === index) {
      this.lastChampionClicked = -1;
      this.desiredChampionInfoBoxPosition = -1;
    } else {
      this.lastChampionClicked = index;
      const flexContainerWidth = document.getElementsByClassName('flex-container')[0].clientWidth;
      const elementsInRow = Math.floor(flexContainerWidth / 110);
      const row = Math.floor(index / elementsInRow) + 1;
      this.desiredChampionInfoBoxPosition = row * elementsInRow - 1;
    }
  }

  onResize(event) {
    const flexContainerWidth = document.getElementsByClassName('flex-container')[0].clientWidth;
    const elementsInRow = Math.floor(flexContainerWidth / 110);
    const row = Math.floor(this.lastChampionClicked / elementsInRow) + 1;
    this.desiredChampionInfoBoxPosition = row * elementsInRow - 1;
  }
}
