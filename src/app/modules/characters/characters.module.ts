import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharactersRoutingModule } from './characters.routing';
import { CharactersComponent } from './pages/characters/characters.component';
import { ProfileCharacterComponent } from './pages/character/profile-character.component';

@NgModule({
  declarations: [
    CharactersComponent,
    ProfileCharacterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CharactersRoutingModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: []
})
export class CharactersModule { }
