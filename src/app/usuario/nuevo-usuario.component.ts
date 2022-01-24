import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../service/usuario.service';
import { Usuario } from '../models/usuario';
import { Rol } from '../models/rol';
import { Router } from '@angular/router';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  constructor(
    private UsuarioService: UsuarioService,
    private router: Router
    ) { }

  nombre: string = '';
  rol: Rol=<Rol>{};
  activo: string = '';
  ngOnInit(): void {
  }

  onCreate(): void{
    const usuario = new Usuario(this.activo, this.nombre, this.rol);
    this.UsuarioService.save(usuario).subscribe(
      data => {
        Swal.fire({
          title: 'OK',
          text: 'Usuario creado',
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
        this.router.navigate(['/nuevo']);
      }
    )
  }
}
