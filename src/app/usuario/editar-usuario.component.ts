import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Rol } from '../models/rol';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
  /*template: `
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-4 mx-auto">


        <button class="btn btn-outline-success" (click)="onDelete()">Eliminar</button>
        <form (ngSubmit)="onUpdate()">
          <div class="mb-3">
            <button type="submit" class="btn btn-outline-success" disabled="disabled">Guardar</button>
            <button type="submit" class="btn btn-outline-success">Editar</button>
          </div>
          <div class="mb-3">
            <label for="id">Id</label>
            <input type="text" class="form-control" id="id" name="id" [(ngModel)]='usuario.id' disabled="disabled" (keyup)="onKey($event)">
          </div>
          <div class="mb-3">
            <label for="nombre">Nombre</label>
            <input type="text" class="form-control" id="nombre" name="nombre" [(ngModel)]="usuario.nombre" required>
          </div>
          <div>
            <label for="rol">Rol</label>
            <select class="form-select form-select-sm mb-3" id="rol" name="rol" aria-label=".form-select-sm example" [(ngModel)]="usuario.rol" required>
              <option value="1" selected>Administrador</option>
              <option value="2">Auditor</option>
              <option value="3">Auxiliar</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1">Activo</label><br/>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Si" [(ngModel)]="usuario.activo" required>
              <label class="form-check-label" for="exampleRadios1">Si</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="No" [(ngModel)]="usuario.activo" required>
              <label class="form-check-label" for="exampleRadios2">No</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
`*/
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Usuario = {
    id: 0,
    activo: '',
    nombre: '',
    rol: <Rol>{}
  };

  idUser = 0;

  constructor(
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.idUser = id;
    this.usuarioService.detail(id).subscribe(
      data => {
        this.usuario = data;
      },
      err => {
        Swal.fire({
          title: 'Error',
          text: err.error.mensaje,
          icon: 'error',
          confirmButtonText: 'OK'
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params.id;
    this.usuarioService.update(id, this.usuario).subscribe(
      data => {
        Swal.fire({
          title: 'OK',
          text: 'Usuario editado',
          icon: 'success',
          confirmButtonText: 'Entendido'
        });
        this.router.navigate(['/lista']);
      },
      err => {
        Swal.fire({
          title: 'Error',
          text: err.error.mensaje,
          icon: 'error',
          confirmButtonText: 'OK'
        });
        //this.router.navigate(['/nuevo']);
      }
    );
  }

  onKey(event: any) { // without type info
    this.idUser = event.target.value;
  }

  onDelete(): void{
    const id = this.activatedRoute.snapshot.params.id;
    this.usuarioService.delete(id).subscribe(
      data =>{
        Swal.fire({
          title: 'OK',
          text: 'Usuario eliminado',
          icon: 'success',
          confirmButtonText: 'Entendido'
        });
        this.router.navigate(['/lista']);
      },
      err =>{
        Swal.fire({
          title: 'Error',
          text: err.error.mensaje,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    )
  }

  mostrarId(){
    alert(this.idUser);
  }
  /*funcionCualquiera(){
    prompt("Llamado funcion");
  }*/
}
