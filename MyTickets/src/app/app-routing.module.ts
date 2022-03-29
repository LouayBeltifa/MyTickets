import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './shared/components/history/history.component';
import { ValidateComponent } from './shared/components/validate/validate.component';
import { UserDashboardComponent } from './shared/dashboard/user-dashboard/user-dashboard.component';
import {ServicesComponent} from "./shared/components/services/services.component";

const routes: Routes = [
  {path:'validate',component:ValidateComponent},
  {path:'history',component:HistoryComponent},
  {path:'dashboard',component:UserDashboardComponent,
    children: [
    {
      path: 'admin', // child route path
      component: UserDashboardComponent, 
    },
    {
      path: 'user',
      component: UserDashboardComponent, 
    },
  ]
},

  {path:'services',component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
