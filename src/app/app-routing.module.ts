import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LayoutComponent } from './core/layout/layout.component';
import { LoginModule } from './features/login/login.module';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)
      },
      {
        path: 'login',
        loadChildren: () => import("./features/login/login.module").then(m => LoginModule)
      },
      {
        path: 'info',
        loadChildren: () => import("./features/info/info.module").then(m => m.InfoModule)
      }
    ]  
  }
=======
import {LayoutComponent} from "./core/layout/layout.component";

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
      {
        path:'', loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)
      },
      {
        path:'login', loadChildren: ()=> import("./features/login/login.module").then(m => m.LoginModule)
      },
      {
        path:'info', loadChildren: ()=> import("./features/info/info.module").then(m => m.InfoModule)
      }
    ]

    }
>>>>>>> features/ale
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
