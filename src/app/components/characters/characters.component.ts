import {CharactersApiService} from '../../services/characters/character/shared/characters-api.service';
import { Component, OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor( private characterSvc: CharactersApiService) { }
  allCharacters: Observable<any>;
  ngOnInit() {
    this.getCharacters();
  }
  getCharacters(){
    // no hago la Subscription porq lo hago en el html
    this.allCharacters = this.characterSvc.getAllCharacters();

  }
}
