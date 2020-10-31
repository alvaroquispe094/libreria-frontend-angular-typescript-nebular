import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { RippleService } from '../../../@core/utils/ripple.service';
import { MENU_NAV } from '../../../landing/landing-menu';
import { AuthenticationService } from '../../../@core/service/authentication/authentication.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  public readonly materialTheme$: Observable<boolean>;
  userPictureOnly: boolean = false;
  user: any;
  userName: any;
  rol_actual: string;
  menu = MENU_NAV; //setea todas las opciones del menu
  //logoUrl:string = "/../../../assets/images/logo.png";
  logoURL:any;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
    {
      value: 'material-light',
      name: 'Material Light',
    },
    {
      value: 'material-dark',
      name: 'Material Dark',
    },
  ];

  currentTheme = 'default';

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];
  menuByRole: any[];
  username:string;

  public constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private userService: UserData,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private rippleService: RippleService,
    private authenticationService: AuthenticationService,
  ) {
    this.username= 'sdgsdgdsgsdg'

    this.materialTheme$ = this.themeService.onThemeChange()
      .pipe(map(theme => {
        const themeName: string = theme?.name || '';
        return themeName.startsWith('material');
      }));
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.nick);

    //seteo la url de la imagen
    this.userService.getImages()
      .pipe(takeUntil(this.destroy$))
      .subscribe((images: any) => this.logoURL = images.logo);  

    //seteo la url del empty user
    this.userService.getImages()
      .pipe(takeUntil(this.destroy$))
      .subscribe((images: any) => this.user = images.user);
    
    //setting name user
    this.userName = this.authenticationService.leerUsuario()
    
    //setting name user
    this.userName = this.authenticationService.leerUsuario()

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => {
        this.currentTheme = themeName;
        this.rippleService.toggle(themeName?.startsWith('material'));
      });
  }

  getMenuByRole(){
    
    this.menuByRole = [];
    this.rol_actual = this.authenticationService.leerRol() !='' ? this.authenticationService.leerRol():'ROLE_GUEST';    //setando el rol actual  

    for (let i = 0; i < this.menu.length; i++){
      const roles = this.menu[i].role;
      
      if(this.menu){
       var index = roles.lastIndexOf(this.rol_actual);
      
       if(index != -1){
         this.menuByRole.push(this.menu[i]);
        
       }
      
      }

    }
    return this.menuByRole;
  }

  getUser(){
    this.username = this.authenticationService.leerUsuario();
    debugger;
    return this.username;
  }

  salir(){
    debugger;
    this.authenticationService.logout();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
