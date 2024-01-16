import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/common/home/home.component';
import { SignupComponent } from 'src/app/common/signup/signup.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {path: '',
  component: LayoutComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
