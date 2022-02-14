import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SportsComponent } from './sportsnews/sports.component';
import { ScienceComponent } from './sciencenews/science.component';
import { HealthComponent } from './healthnews/health.component';
import { EntertainmentComponent } from './entertainmentnews/entertainment.component';

const routes: Routes = [
  {path: '', component:TopheadingComponent}, //home
  {path: 'tech', component:TechnewsComponent}, //tech news
  {path: 'business', component:BusinessnewsComponent}, //business news
  {path: 'health', component:HealthComponent}, //health news
  {path: 'entertainment', component:EntertainmentComponent}, //entertainment news
  {path: 'sports', component:SportsComponent}, //sports news
  {path: 'science', component:ScienceComponent}, //science news
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
