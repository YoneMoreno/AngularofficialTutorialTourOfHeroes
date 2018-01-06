import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';

export class AppRoutingModule {
  const;
  routes: Routes = [
    {path: 'heroes', component: HeroesComponent}
  ];
}

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
