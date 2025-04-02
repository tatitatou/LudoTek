import { Component, Input } from '@angular/core';
import { game } from '../models/game.model';

@Component({
  selector: 'app-game',
  standalone: false,
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  @Input() game!: game;
  
}

