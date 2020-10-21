import { Component, OnInit, Input } from '@angular/core';
import { MensajeService, MENSAJE } from './mensaje.service';
// import { MenuService, MENU_ITEMS } from './menu.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  public stateMessage: string;
  public message:string;
  public timeout:number;
  public edited = false;

  constructor(private mensajeService: MensajeService) {
    // setTimeout(function () {   
    //   debugger;
    //   this.stateMessage = '';
    //   this.message = '';
    // }, 3000);
  }

  ngOnInit() {
    debugger;
    this.mensajeService.message.subscribe(messageEmit => {
      this.message = messageEmit;
      debugger;
    });

    this.mensajeService.state.subscribe(stateEmit => {
      this.stateMessage = stateEmit;
      debugger;
    });

    // this.mensajeService.time.subscribe(timeEmit => {
    //   this.timeout = timeEmit;
    //   debugger;
    //   // this.clean();
    //   // setTimeout(function () {   
    //   //      this.mensajeService.error
    //   //      }, 3000);
    //   debugger;
    // });

    // this.limpiar();
    // setTimeout(function () {   
    //   this.cleanr();
    //         }, 3000);

    //  setTimeout(function () {   
    //   //  this.cleanr();
    //   alert("alerta de pruieba");
    //   this.clean();
    //   // this.mensajeService.hideMessage();
    //    debugger;
    //  }, 7000);
    
    // setTimeout(function() { $("#hideDiv").fadeOut(1500); }, 5000)}
  }


  // limpiar():void{
  //   setTimeout(function() {   
  //     this.message ="";
  //     this.stateMessage = "";
  //     this.mensajeService.success("","");
  //           }, 7000);
  // }  
   clean(){
    this.mensajeService.success("","");
    debugger;
   }

  setMessage(message:string){
    this.message = message;
  }

  setStateMessage(type:string){   
    this.stateMessage = type;
  }

  cleanr(){
    this.stateMessage = '';
    this.message = '';
  }

  onClose() {
   this.cleanr();
  }

}