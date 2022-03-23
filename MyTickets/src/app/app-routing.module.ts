import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './shared/components/history/history.component';
import { ValidateComponent } from './shared/components/validate/validate.component';

const routes: Routes = [
  {path:'validate',component:ValidateComponent},
  {path:'history',component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
