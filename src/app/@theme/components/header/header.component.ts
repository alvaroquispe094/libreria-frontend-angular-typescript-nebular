import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { RippleService } from '../../../@core/utils/ripple.service';
import { MENU_NAV } from '../../../landing/landing-menu';
import { AuthenticationService } from '../../../@core/service/authentication/authentication.service';
import { CartService } from '../../../@core/service/cart/cart.service';

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
  sidebarService2 :any;
  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];
  menuByRole: any[];
  username:string;
  items:any;
  totalItems:any;

  public constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private userService: UserData,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private rippleService: RippleService,
    private authenticationService: AuthenticationService,
    private cartService: CartService,
  ) {
    this.username= 'sdgsdgdsgsdg'
    this.sidebarService2 = sidebarService;
    this.materialTheme$ = this.themeService.onThemeChange()
      .pipe(map(theme => {
        const themeName: string = theme?.name || '';
        return themeName.startsWith('material');
      }));
  }

  ngOnInit() {
    this.cartService.currentDataCart$.subscribe(x=>{
      if(x)
      {
        this.items = x;
        this.totalItems = x.length;
  
      }
    })

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

  setTotalItems(){
    debugger;
    this.totalItems = this.cartService.obtenerCantidadElementos();
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
    this.sidebarService.collapse('menu-navbar')
    this.layoutService.changeLayoutSize();

    return false;
  }

  toggleNavbar(): boolean {
    this.sidebarService.toggle(true, 'menu-navbar');
    this.sidebarService.collapse('menu-sidebar')
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
