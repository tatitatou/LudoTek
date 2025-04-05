import { Component } from '@angular/core';
import { game } from '../models/game.model'; 
import { GameService } from '../services/game.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule] 
})
export class ListGameComponent {
  listgame!: game[];
  searchTerm: string = ''; 
  selectedPlatform: string = ''; 

  constructor(private GameService: GameService) {}

  ngOnInit(): void {
    this.GameService.getGames().subscribe((data) => {
      this.listgame = data;
    });
  }


  get filteredGames(): game[] {
    let filtered = this.listgame;
    
    if (this.searchTerm) {
      filtered = filtered.filter(game =>
        (game.title && game.title.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (game.developper && game.developper.toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    }
    
    if (this.selectedPlatform) {
      filtered = filtered.filter(game =>
        game.plateform && game.plateform.toLowerCase() === this.selectedPlatform.toLowerCase()
      );
    }
    
    return filtered;
  }
}
