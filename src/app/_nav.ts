import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Dicomed',
  },

  {
    name: 'Inicio',
    url: '/pantallaprincipal/inicio',
    icon: 'icon-home',
  },


  {
    name: 'Productos',
    icon: 'cil-list',
    children: [
      {
        name: 'Creación de produto',
        url: '/inventario/agregar',
        icon: 'icon-plus',
      },
      {
        name: 'Entrada de producto(s)',
        url: '/inventario/entradas',
        icon: 'cil-indent-increase',
        
      },
      {
        name: 'Salida de producto(s)',
        url: '/inventario/salidas',
        icon: 'cil-indent-decrease',
        
      },
      {
        name: 'Inventario',
        url: '/inventario/productos',
        icon: 'icon-list',
      },  
    ]
    
  },

  {
    name: 'Logística',
    url: '/inventario/logistica',
    icon: 'cil-map',
  },

  // {
  //   name: 'Ordenes de compra',
  //   url: '',
  //   icon: 'fas fa-check-double',

  // },

    {
      name: 'Finanzas', 
      url: '/inventario/finanzas',
      icon: 'far fa-chart-bar',
    },
    {
    name: 'Ventas',
    url: '/inventario/ventas',
    icon: 'cil-tag',
    },

    {
      name: 'Compras',
      url: '/inventario/compras',
      icon: 'cil-dollar',
    },

  //   {
  //     name: 'Cotizaciones',
  //     url: '',
  //     icon: 'cil-file',
  //   },

  //   {
  //     name: 'Clientes',
  //     url: '',
  //     icon: 'cil-group',
  //   },

  //   {
  //     name: 'Proveedores',
  //     icon: 'cil-truck',
  //     children: [
  //       {
  //         name: 'Creación de proveedor',
  //         url: '/proveedores/agregar',
  //         icon: 'icon-plus',
  //       }




  //     ],
  //   },

  //   {
  //     name: 'Catalogo',
  //     url: '',
  //     icon: 'cil-view-quilt',
  //   },

  //   {
  //     name: 'Reportes',
  //     url: '',
  //     icon: 'cil-task',
  // },

  // {
  //   name: 'Contacto',
  //   url: '/pantallaprincipal/contacto',
  //   icon: 'cil-envelope-closed',
  // },

  // {
  //   name: 'Nosotros',
  //   url: '',
  //   icon: 'cil-people',
  // },

  // {
  //   name: 'Servicios',
  //   url: '',
  //   icon: 'cil-settings',
  // },

  {
    name: 'Administración Acceso',
    url: '',
    icon: 'icon-lock',
  },


  {
    name: 'Salir',
    url: '',
    icon: 'cil-exit-to-app',
  }
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   icon: 'icon-speedometer',
  // },
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   icon: 'icon-pencil'
  // },
  // {
  //   title: true,
  //   name: 'Components'
  // },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Cards',
  //       url: '/base/cards',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Carousels',
  //       url: '/base/carousels',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Collapses',
  //       url: '/base/collapses',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Forms',
  //       url: '/base/forms',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Navbars',
  //       url: '/base/navbars',
  //       icon: 'icon-puzzle'

  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/base/paginations',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/base/popovers',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/base/progress',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Switches',
  //       url: '/base/switches',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/base/tables',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/base/tabs',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tooltips',
  //       url: '/base/tooltips',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   icon: 'icon-cursor',
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Brand Buttons',
  //       url: '/buttons/brand-buttons',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Disabled',
  //   url: '/dashboard',
  //   icon: 'icon-ban',
  //   badge: {
  //     variant: 'secondary',
  //     text: 'NEW'
  //   },
  //   attributes: { disabled: true },
  // }
];
