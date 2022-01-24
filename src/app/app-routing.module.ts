import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalUsuarioComponent } from './usuario/principal-usuario.component';
import { ListaUsuarioComponent } from './usuario/lista-usuario.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { NuevoUsuarioComponent } from './usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';

const routes: Routes = [
  {path: '', component: PrincipalUsuarioComponent},
  {path: 'lista', component: ListaUsuarioComponent},
  {path: 'detalle/:nombre', component: DetalleUsuarioComponent},
  {path: 'nuevo', component: NuevoUsuarioComponent},
  {path: 'editar/:id', component: EditarUsuarioComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
