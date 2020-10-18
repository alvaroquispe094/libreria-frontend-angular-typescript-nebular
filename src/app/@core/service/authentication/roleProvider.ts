import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { NbRoleProvider } from '@nebular/security';
import { AuthenticationService } from './authentication.service';
import { of as observableOf } from 'rxjs/observable/of';

@Injectable()
export class RoleProvider implements NbRoleProvider {

  constructor(private authenticationService: AuthenticationService) {
  }

  getRole(): Observable<string> {
    return this.authenticationService.leerRol() !='' ? observableOf(this.authenticationService.leerRol()):observableOf('GUEST_ROLE');
    
  }
}