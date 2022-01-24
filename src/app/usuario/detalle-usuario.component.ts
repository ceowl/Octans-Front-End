import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Rol } from '../models/rol';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  usuario: Usuario = {
    id: 0,
    activo: '',
    nombre: '',
    rol: <Rol>{}
    };

  constructor(
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const name = this.activatedRoute.snapshot.params.nombre;
    this.usuarioService.detailName(name).subscribe(
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
    )
  }

}
