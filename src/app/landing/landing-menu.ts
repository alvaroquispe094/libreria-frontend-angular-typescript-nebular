
export const MENU_NAV: any[] = [
      {
        title: 'Home',
        icon: 'home-outline',
        link: '/landing',
        text: 'Home',  
        function: '',
        user_image : false,
        role: ['ROLE_GUEST','ROLE_USER', 'ROLE_ADMIN', 'ROLE_RECEPTIONIST'],
      },
      {
        title: 'Catalogo',
        icon: 'shopping-bag-outline',
        link: '/landing/catalogo',
        text: 'catalogo',
        function: '',
        user_image : false,
        role: ['ROLE_GUEST', 'ROLE_USER'],
      },
      {
        title: 'Nosotros',
        icon: 'question-mark-circle-outline',
        link: '/landing/nosotros',
        text: 'Nosotros',
        function: '',
        user_image : false,
        role: ['ROLE_GUEST', 'ROLE_USER'],
      },
      {
        title: 'Contacto',
        icon: 'email-outline',
        link: '/landing/contacto',
        text: 'Contacto',
        function: '',
        user_image : false,
        role: ['ROLE_GUEST', 'ROLE_USER'],
      },
      {
        title: 'Registro',
        icon: 'person-outline',
        link: '/landing/registro',
        text: 'Registro',
        function: '',
        user_image : false,
        role: ['ROLE_GUEST'],
      },
      {
        title: 'Cart',
        icon: 'shopping-cart-outline',
        link: '/landing/cart',
        text: '',
        function: '',
        user_image : false,
        role: ['ROLE_GUEST', 'ROLES_USER'],
      },
      {
        title: 'Login',
        icon: 'log-in-outline',
        link: '/landing/login',
        text: '',
        function: '',
        user_image : false,
        role: ['ROLE_GUEST'],
      },
      {
        title: 'Panel',
        icon: 'edit-2-outline',
        link: '/pages/dashboard',
        text: 'Dashboard',
        function: '',
        user_image : false,
        role: ['ROLE_ADMIN', 'ROLE_RECEPTIONIST'],
      },
      {
        title: 'Panel',
        icon: 'edit-2-outline',
        link: '/pages/resumen',
        text: 'Dashboard',
        function: '',
        user_image : false,
        role: ['ROLE_USER'],
      },
      {
        title: 'Logout',
        icon: 'log-out-outline',
        link: '/landing/logout',
        text: '',
        function: 'salir',
        user_image : true,
        role: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_RECEPTIONIST'],
      },
      
];