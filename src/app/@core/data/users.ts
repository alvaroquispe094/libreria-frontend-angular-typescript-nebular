import { Observable } from 'rxjs';

export interface User {
  name: string;
  picture: string;
}

//agregado para imagenes
export interface Images {
  name: string;
  picture: string;
}

//agregado para opciones del select
export interface Options {
  id: string;
  value: string;
}

export interface Contacts {
  user: User;
  type: string;
}

export interface RecentUsers extends Contacts {
  time: number;
}

export abstract class UserData {
  abstract getUsers(): Observable<User[]>;
  abstract getContacts(): Observable<Contacts[]>;
  abstract getRecentUsers(): Observable<RecentUsers[]>;
  abstract getImages(): Observable<Images[]>;
  abstract getOptions(): Observable<Options[]>;
}