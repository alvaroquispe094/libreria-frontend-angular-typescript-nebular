import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto } from '../../@core/model/contacto';

@Component({
  selector: 'ngx-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  public contactoForm: FormGroup;  // Define FormGroup to contact's form
  contacto: Contacto = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
   
  };
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      telefono: ['', [Validators.required, Validators.minLength(2)]],
      mensaje: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
     

  // Accessing form control using getters
  get nombre() {
    return this.contactoForm.get('nombre');
  }

  get email() {
   return this.contactoForm.get('email');
  }

  get telefono() {
    return this.contactoForm.get('telefono');
  }

  get mensaje() {
    return this.contactoForm.get('mensaje');
  }

   // Reset student form's values
  resetForm() {
    this.contactoForm.reset();
  } 

  sendMessage() {
    //    // this.user = this.usuarioForm.value;
    //    debugger;
    //    this.usuarioService.registrarUsuario(this.user)
    //    .subscribe(
    //      res => {
    //        console.log(res);
    //      },
    //      err => console.error("error getBooks(): " +err)
         
    //    );
    //    debugger;
    //    // this.crudApi.AddStudent(this.studentForm.value); // Submit student data using CRUD API
    //    // this.toastr.success(this.studentForm.controls['firstName'].value + ' successfully added!'); // Show success message when data is successfully submited
    //    this.ResetForm();  // Reset form when clicked on reset button
      };

}
