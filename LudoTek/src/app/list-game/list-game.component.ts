import { Component } from '@angular/core';
import { game } from '../models/game.model'; 
import { GameService } from '../services/game.service';




@Component({
  selector: 'app-list-game',
  standalone: false,
  templateUrl: './list-game.component.html',
  styleUrl: './list-game.component.scss'
})
export class ListGameComponent {

  listgame!: game[];
  
  constructor(private GameService: GameService) {}

  ngOnInit(): void {
    this.GameService.getGames().subscribe((data) => {
      this.listgame = data;
    });
  }

}
