import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'zone-lists/:id', loadChildren: './zone-lists/zone-lists.module#ZoneListsPageModule' },
  { path: 'playing-movie/:mid', loadChildren: './playing-movie/playing-movie.module#PlayingMoviePageModule' }
  //{ path: 'light', loadChildren: './light/light.module#LightPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
