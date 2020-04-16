import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CricketPageComponent } from './pages/cricket-page/cricket-page.component';
import { AddplayerComponent } from './pages/addplayer/addplayer.component';

const routes: Routes = [
  { path: '', redirectTo: '/cricket', pathMatch: 'full' },
  { path: 'cricket', component: CricketPageComponent },
  { path: 'cricket/add-cricket', component: AddplayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
