import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './login/auth/auth.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full' },
  { path:'login', component: AuthComponent },
  { path: 'dashboard',
      children: [
        { path:'usuario', component : UsuarioComponent,
          loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)   
        }
      ]
     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
