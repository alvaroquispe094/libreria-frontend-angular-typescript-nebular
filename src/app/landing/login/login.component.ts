import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbAuthSocialLink, NbAuthService, NB_AUTH_OPTIONS, getDeepFromObject } from '@nebular/auth';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from '../../@core/service/authentication/authentication.service';
import { SpinnerComponent } from '../../@theme/components/spinner/spinner.component';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild(SpinnerComponent) spiner: SpinnerComponent;

  private destroy$: Subject<void> = new Subject<void>();
  public loginForm: FormGroup;  // Define FormGroup to student's form
  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';
  islogged : boolean = false
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  loading: boolean = false;
  // usuario: UsuarioLogin = {usuario: '',
  // password: '',};
  submitted: boolean = false;
  socialLinks: NbAuthSocialLink[] = [];
  rememberMe = false;

  constructor(public fb: FormBuilder, protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS) protected options = {},
              protected cd: ChangeDetectorRef,
              protected router: Router,
              private authenticationService: AuthenticationService,
              private activatedRoute: ActivatedRoute) {

    // this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    // this.showMessages = this.getConfigValue('forms.login.showMessages');
    // this.strategy = this.getConfigValue('forms.login.strategy');
    this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    // this.rememberMe = this.getConfigValue('forms.login.rememberMe');
    this.salir();

    
                
  }
  ngOnInit(): void {
    this.loading =  false;

    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    
    })  
  }

  login(): void {

    this.toggleLoadingAnimation();
    // this.loading =  this.spiner.loading;
    debugger
     this.authenticationService.login(this.loginForm.value)
     .pipe(takeUntil(this.destroy$))
     .subscribe(
       res => {
         // debugger;
         localStorage.setItem('token', res.token)
         localStorage.setItem('usuario', res.usuario)
         localStorage.setItem('role', res.authorities[0].authority)
       
         debugger;
         this.islogged = true;
         if(localStorage.getItem("role") == "ROLE_ADMIN" || localStorage.getItem("role") == "ROLE_RECEPTIONIST")
           this.router.navigate(['/pages/dashboard'], { relativeTo: this.activatedRoute });
         else{
           this.router.navigate(['/pages/resumen'], { relativeTo: this.activatedRoute });  
         }  
       },
       err => console.error("error login(): " +err)     
     );
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

  mostrarSpinner(){
    this.spiner.toggleLoadingAnimation();
  }

  statusSpinner(){
    return this.spiner.loading;
  }

  salir(){
    debugger;
    this.islogged = false;
    this.authenticationService.logout();
  }

   getConfigValue(key: string): any {
     return getDeepFromObject(this.options, key, null);
   }

  // Accessing form control using getters
  get usuario() {
    return this.loginForm.get('usuario');
  }

  get password() {
   return this.loginForm.get('password');
 }

}
