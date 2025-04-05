import { Component, Input, NgModule } from '@angular/core';
import { game } from '../models/game.model'; 
import { GameService } from '../services/game.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrl: './list-game.component.scss',
  standalone: true,
  imports: [CommonModule] 
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
