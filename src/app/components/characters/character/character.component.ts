import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  // recibimos los datos que vienen de characters..
  @Input() character: any;
  constructor() { }

  ngOnInit() {
  }



}
