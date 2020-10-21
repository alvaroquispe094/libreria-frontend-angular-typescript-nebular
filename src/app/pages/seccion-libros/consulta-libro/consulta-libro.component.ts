import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../../../@theme/components/message/mensaje.service';

@Component({
  selector: 'consulta-libro',
  templateUrl: './consulta-libro.component.html',
  styleUrls: ['./consulta-libro.component.scss']
})
export class ConsultaLibroComponent implements OnInit {

  constructor(private mensajeService:MensajeService) { 

  //   this.mensajeService.hideMessage();
  }

  ngOnInit() {
    // this.mensajeService.hideMessage();
  }

}
