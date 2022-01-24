import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-principal-usuario',
  templateUrl: './principal-usuario.component.html',
  styleUrls: ['./principal-usuario.component.css']
  /*template: `
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-4 mx-auto">
        <form>
            <div class="mb-3">
             <button class="btn btn-outline-success" (click)="mensaje()">Consultar</button>
             <button type="reset" class="btn btn-outline-success">Limpiar</button>
            </div>
            <div class="mb-3">
             <label for="nombre">Nombre</label>
             <input type="text" class="form-control" name="dato" (keyup)="onKey($event)">
            </div>
        </form>
      </div>
    </div>
  </div>
`*/
})
export class PrincipalUsuarioComponent implements OnInit {

  @Input() dato: String = '';

  constructor(

    private UsuarioService: UsuarioService,
    private router: Router
  ) { }




  ngOnInit(): void {
  }

  onKey(event: any) { // without type info
    this.dato = (event.target as HTMLInputElement).value;
  }

  mensaje(){
    if(this.dato == ''){
      this.router.navigate(['/lista']);
    }else{
      this.router.navigate(['/detalle/'+this.dato]);
    }
  }

}
