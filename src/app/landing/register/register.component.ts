import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioDto } from '../../@core/dto/usuarioDto';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public usuarioForm: FormGroup;  // Define FormGroup to student's form
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
      id : 2,
      rol_nombre : 'USER_ROLE',
      activo : true,
    },
    activo: true,
  };

  constructor(public fb: FormBuilder/*, private usuarioService: UsuarioService*/) {} 

  ngOnInit() {

      this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      usuario: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
      direccion: ['', [Validators.required, Validators.minLength(2)]],
      fechaNacimiento: ['', [Validators.required, Validators.minLength(2)]],
      documento: ['', [Validators.required, Validators.minLength(2)]]
    })  
    
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

  // Reset student form's values
  ResetForm() {
    this.usuarioForm.reset();
  }  
  submitStudentData() {
    // this.user = this.usuarioForm.value;
    debugger;
    // this.usuarioService.registrarUsuario(this.user)
    // .subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => console.error("error getBooks(): " +err)
      
    // );
    debugger;
    // this.crudApi.AddStudent(this.studentForm.value); // Submit student data using CRUD API
    // this.toastr.success(this.studentForm.controls['firstName'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.ResetForm();  // Reset form when clicked on reset button
   };

}
