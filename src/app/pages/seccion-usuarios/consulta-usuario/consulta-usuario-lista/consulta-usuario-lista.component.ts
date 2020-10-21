import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Usuario } from '../../../../@core/model/usuario';
import { UsuarioService } from '../../../../@core/service/usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { LocalDataSource } from 'ng2-smart-table';
import { MensajeService } from '../../../../@theme/components/message/mensaje.service';

@Component({
  selector: 'consulta-usuario-lista',
  templateUrl: './consulta-usuario-lista.component.html',
  styleUrls: ['./consulta-usuario-lista.component.scss']
})
export class ConsultaUsuarioListaComponent implements OnInit {

  private destroy$: Subject<void> = new Subject<void>();
  usuarios: Observable< Usuario[]>;
  data = []; //data for ng2 smart Table
 
  
  constructor(private usuarioService: UsuarioService, private router: Router,private mensajeService: MensajeService, private activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this.getUsuarios();
    // debugger;
  this.mensajeService.hideMessage();
  }
  source: LocalDataSource = new LocalDataSource();
  
  settings = {    
    mode: 'external',
    hideSubHeader: true, // hide filter row
    pager: {
      display: true,
      perPage: 15
    },
    edit: {
      editButtonContent: "<i class='fas fa-edit'></i>",
      confirmEdit: true,
    },
    delete: {      
      deleteButtonContent: "<i class='fas fa-trash-alt' ></i>",
      confirmDelete: true,
    },
    actions: {
      position: 'right',
      add: false,
      edit: true,
      delete: true,
      
    },   
    columns: {
      
      nombre: {
        title: 'Nombre',
      },
      apellido: {
        title: 'Apellido',
      },
      email: {
        title: 'Email',
      },
      usuario: {
        title: 'Usuario',
      },
      // password: {
      //   title: 'Password',
      // },
      direccion: {
        title: 'Direccion',
      },
      fechaNacimiento: {
        title: 'Fecha nacimiento',
      },
      documento: {
        title: 'Documento',
      },
       rol: {
         title: 'Rol',
       },
      activo: {
        title: 'Activo',
      },
    },
  };
  
  getUsuarios(){
   this.usuarioService.getUsuarios()
   .pipe(takeUntil(this.destroy$))
   .subscribe(res => this.data = res, // add data to table
              err => console.error("error getUsuarios(): " +err) // muestra el error si falla
             );
  }
  
  onDeleteConfirm(event) {
    console.log("Delete Event In Console")
    console.log(event);
    
  }
  
  updateUsuario(id){
    console.log("Editing Event In Console")
    console.log(id);
    this.router.navigate([ '/pages/seccion-usuarios/edit', id ], { relativeTo: this.activatedRoute });
  }

}
