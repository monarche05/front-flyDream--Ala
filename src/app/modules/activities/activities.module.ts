import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music/music.component';
import { FestivalComponent } from './festival/festival.component';

@NgModule({
  declarations: [MusicComponent, FestivalComponent],
  imports: [CommonModule],
  exports: [FestivalComponent, MusicComponent],
})
export class ActivitiesModule {}
