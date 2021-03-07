import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import { ClassementComponent } from './components/classement/classement.component';
import { ShowroomComponent } from './components/showroom/showroom.component';

const routes: Routes = [
  {path: '', redirectTo: '/showroom', pathMatch: 'full'},
  {path: 'showroom', component: ShowroomComponent},
  {path: 'ranking', component: ClassementComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
