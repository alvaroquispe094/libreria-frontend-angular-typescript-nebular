import { Injectable, Output, EventEmitter } from '@angular/core';
import { Mensaje } from '../../../@core/model/mensaje';
import { Subject } from 'rxjs';

export const MENSAJE: Mensaje = {}; //mensaje transactional

var poll = function() {
  setTimeout(function() {   
    this.message.emit("");
    this.state.emit("");
    // this.time.emit(5000);
          }, 7000);
}



@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  public mensaje:string;
  public status:string;

   // Observable string sources
   private missionAnnouncedSource = new Subject<string>();
   private missionConfirmedSource = new Subject<string>();
 
   // Observable string streams
   missionAnnounced$ = this.missionAnnouncedSource.asObservable();
   missionConfirmed$ = this.missionConfirmedSource.asObservable();
 
   // Service message commands
   announceMission(mission: string) {
     this.missionAnnouncedSource.next(mission);
   }
 
   confirmMission(astronaut: string) {
     this.missionConfirmedSource.next(astronaut);
   }


  constructor() { }

  @Output() message: EventEmitter<string> = new EventEmitter();
  @Output() state: EventEmitter<string> = new EventEmitter();
  // @Output() time: EventEmitter<number> = new EventEmitter();

  private timeout:number = 3000;
  // toggle() {
  //   // this.isOpen = !this.isOpen;
  //   this.change.emit(this.isOpen);
  // }
  
  ngOnChanges(){
    // MENSAJE=this.mensaje;
    // MENSAJE=this.status;
    debugger;

  }

  private myFunc: () => void;
  onSomethingHappended(fn: () => void) {
    this.myFunc = fn;
    // from now on, call myFunc wherever you want inside this service
  }
  // enable subscribing to alerts observable
  // onAlert(id = this.defaultId): Observable<Alert> {
  //   return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  // }


  
  hideMessage() {   
    this.message.emit("");
    this.state.emit("");
    debugger;
  }

  // convenience methods
  success(text: string, type: string) {
    this.message.emit(text);
    this.state.emit(type);
    // this.time.emit(7000);
    // this.time.emit(this.timeout);
      // this.alert(new Alert({ ...options, type: AlertType.Success, message }));
  }

  error(text: string, type: string) {
    // this.mensaje = text;
    // this.status = type;
    this.message.emit(text);
    this.state.emit(type);
    // this.time.emit(7000);
    // this.time.emit(this.timeout);
    debugger;
      // this.alert(new Alert({ ...options, type: AlertType.Error, message }));
  }

  info(text: string, type: string) {
    MENSAJE.message = text;
      // this.alert(new Alert({ ...options, type: AlertType.Info, message }));
  }

  warn(text: string, type: string) {
    MENSAJE.message = text;
      // this.alert(new Alert({ ...options, type: AlertType.Warning, message }));
  }

  // main alert method    
  // alert(alert: Alert) {
  //     alert.id = alert.id || this.defaultId;
  //     this.subject.next(alert);
  // }

  // clear alerts
  clear() {
    MENSAJE.message = '';
    MENSAJE.type = '';
  }

}
