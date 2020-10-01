import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilloutComponent } from './fillout/fillout.component';
import { QuestionnarieComponent } from './questionnarie/questionnarie.component';

const routes: Routes = [
  {
    path: 'create',
    component: QuestionnarieComponent,
  },
  {
    path: 'quiz',
    component: FilloutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
