export const NavigationItems = [
  {
    title: 'Inicio',
    tags: 'inicio',
    icon: 'fal fa-info-circle',
    routerLink: '/'
  },   

  {
    title: 'Configuración',
    tags: 'configuracion',
    icon: 'fal fa-cog',
    items: [
      {
        title: 'Ajustes',
        tags: 'configuracion ajustes',
        routerLink: '/components/ajustes'
      },
      {
        title: 'Usuarios',
        tags: 'configuracion usuarios',
        routerLink: '/components/usuarios'
      }
    ]
  }
  
];
