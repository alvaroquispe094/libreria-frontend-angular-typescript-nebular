import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsuarioService } from '../../../@core/service/usuario/usuario.service';
import { Usuario } from '../../../@core/model/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { RolService } from '../../../@core/service/rol/rol.service';
import { Rol } from '../../../@core/model/rol';
import { UsuarioDto } from '../../../@core/dto/usuarioDto';
import { MensajeService } from '../../../@theme/components/message/mensaje.service';

@Component({
  selector: 'crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {
  
  public usuarioForm: FormGroup;  // Define FormGroup to student's form
  
  private destroy$: Subject<void> = new Subject<void>();

  user: UsuarioDto = {
    id:'',
    nombre: '',
    apellido: '',
    email: '',
    usuario: '',
    password: '',
    direccion: '',
    fechaNacimiento: '',
    documento:'',
    rol:{
      id : '',
      rol_nombre : '',
      activo : true,
    },
    activo: true,
  };
  edit: boolean;
  roles: any[];

  constructor(public fb: FormBuilder, private rolService: RolService,private mensajeService: MensajeService, private usuarioService: UsuarioService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.edit = false; //por defecto falso
  } 

  ngOnInit() {
    debugger;
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      debugger;
      this.edit = true; 
      this.usuarioService.getUsuario(params.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        	res => {
            this.user = res; //setea el usuario
            debugger;
          },
          err => console.error("error getUsuario(): " +err)
      );
    }

    this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      usuario: ['', [Validators.required, Validators.minLength(2)]],
      password: [{value: 'password', disabled : this.edit}, [Validators.required, Validators.minLength(2)]],
      direccion: ['', [Validators.required, Validators.minLength(2)]],
      fechaNacimiento: ['', [Validators.required, Validators.minLength(2)]],
      documento: ['', [Validators.required, Validators.minLength(2)]],
      rol: ['', [Validators.required, Validators.minLength(1)]],
      activo: ['']
    })  

    //setea los roles disponibles
    this.rolService.getRoles()
    .pipe(takeUntil(this.destroy$))
    .subscribe(res =>{ this.roles = res, console.log(res)}, // add data to roles
               err => console.error("error getRoles(): " +err) // muestra el error si falla
              );

     // debugger;
  this.mensajeService.hideMessage();             
  }  

  // Accessing form control using getters
  get nombre() {
    return this.usuarioForm.get('nombre');
  }

  get apellido() {
   return this.usuarioForm.get('apellido');
  }

  get email() {
    return this.usuarioForm.get('email');
  }

  get usuario() {
    return this.usuarioForm.get('usuario');
  }

  get password() {
    return this.usuarioForm.get('password');
  }

  get direccion() {
    return this.usuarioForm.get('direccion');
  }

  get fechaNacimiento() {
    return this.usuarioForm.get('fechaNacimiento');
  }

  get documento() {
    return this.usuarioForm.get('documento');
  }

  get rol() {
    return this.usuarioForm.get('rol');
  }

  get activo() {
    return this.usuarioForm.get('activo');
  }

  // Reset student form's values
  resetForm() {
    this.usuarioForm.reset();
  }  

  saveUsuario(){
    console.log(this.user);
    debugger;
    this.usuarioService.saveUsuario(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/pages/seccion-usuarios/consulta'], { relativeTo: this.activatedRoute });
        },
        err => console.error(err)
      )
  }

  updateUsuario() {
    this.usuarioService.updateUsuario(this.user.id, this.user)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/pages/seccion-usuarios/consulta'], { relativeTo: this.activatedRoute });
        },
        err => console.error(err)
      )
  }

 
}
