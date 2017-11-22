import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

//Metadata
export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  children?: ChildrenItems[];
  nextTabs?: RouteInfo[];
  breadComb?: string[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
  icontype?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    type: '',
    icontype: 'dashboard',
    breadComb: ['Dashboard']
  },
  {
    path: '/accounts',
    title: 'Accounts',
    type: 'link',
    icontype: 'people',
    breadComb: ['Home'],
    nextTabs: [
      {
        path: '/browser',
        title: 'Browser',
        type: 'link',
        icontype: 'view_list'
      },
      {
        path: '/single',
        title: 'Create Single',
        type: 'link',
        icontype: 'person_add'
      },
      {
        path: '/multiple',
        title: 'Create Multiple',
        type: 'link',
        icontype: 'create_new_folder',
      },
      {
        path: '/accountlist',
        title: 'Account List',
        type: 'sub',
        icontype: 'supervisor_account',
        collapse: 'AccountList',
        children: [
          {
            path: '1',
            title: 'List1',
            ab: '1',
            icontype: 'dashboard'
          },
          {
            path: '2',
            title: 'List2',
            ab: '2',
            icontype: 'dashboard'
          }
        ]
      },
      {
        path: '/list',
        title: 'Create List',
        type: 'link',
        icontype: 'group_add'
      }
    ]
  },
  {
    path: '/contacts',
    title: 'Contacts',
    type: 'link',
    icontype: 'contacts',
    nextTabs: [
      {
        path: '/contact',
        title: 'Contacts',
        type: 'link',
        icontype: 'contacts'
      },
      {
        path: '/fqcontact',
        title: 'Frequently contacted',
        type: 'link',
        icontype: 'update'
      },
      {
        path: '/duplicates',
        title: 'Duplicates',
        type: 'link',
        icontype: 'library_books',
      },
      {
        path: '/contactlists',
        title: 'Contact Lists',
        type: 'sub',
        icontype: 'keyboard_arrow_down',
        collapse: 'contactlist',
        children: [
          {
            path: '1',
            title: 'contact1',
            ab: '1',
            icontype: 'person'
          },
          {
            path: '2',
            title: 'contact2',
            ab: '2',
            icontype: 'person'
          }
        ]
      },
      {
        path: '/createlist',
        title: 'Create List',
        type: 'link',
        icontype: 'add_circle_outline'
      },
      {
        path: '/contactmore',
        title: 'More',
        type: 'sub',
        icontype: 'keyboard_arrow_down',
        collapse: 'contactmore',
        children: [
          {
            path: 'sub1',
            title: 'Sub1',
            ab: '1',
            icontype: 'dashboard'
          },
          {
            path: 'sub2',
            title: 'Sub2',
            ab: '2',
            icontype: 'dashboard'
          }
        ]
      },
      {
        path: '/setting',
        title: 'Setting',
        type: 'link',
        icontype: 'settings'
      }
    ]
  }, {
    path: '/deals',
    title: 'Deals',
    type: 'link',
    icontype: 'dashboard',
    breadComb: ['Deals'],
    nextTabs: []
  }, {
      path: '/trades',
      title: 'Trades',
      type: 'link',
      icontype: 'dashboard',
      nextTabs: [
          {
              path: '/input',
              title: 'Input',
              type: 'link',
              icontype: 'contacts'
          }, {
              path: '/blotter',
              title: 'Blotter',
              type: 'link',
              icontype: 'contacts'
          }]
  }, {
    path: '/creative',
    title: 'Creative',
    type: 'sub',
    icontype: 'dashboard',
    collapse: 'creative',
    children: [
      { path: 'dashboard', title: 'Dashboard', ab: 'B' },
      { path: 'components', title: 'components', ab: 'GS' },
      { path: 'forms', title: 'forms', ab: 'P' },
      { path: 'tables', title: 'tables', ab: 'SA' },
      { path: 'maps', title: 'maps', ab: 'N' },
      { path: 'widgets', title: 'widgets', ab: 'I' },
      { path: 'charts', title: 'charts', ab: 'T' },
      { path: 'calendar', title: 'calendar', ab: 'T' },
      { path: 'pages', title: 'pages', ab: 'T' }
    ]
  }/*, {
    path: '/components',
    title: 'Components',
    type: 'sub',
    icontype: 'apps',
    collapse: 'components',
    children: [
      { path: 'buttons', title: 'Buttons', ab: 'B' },
      { path: 'grid', title: 'Grid System', ab: 'GS' },
      { path: 'panels', title: 'Panels', ab: 'P' },
      { path: 'sweet-alert', title: 'Sweet Alert', ab: 'SA' },
      { path: 'notifications', title: 'Notifications', ab: 'N' },
      { path: 'icons', title: 'Icons', ab: 'I' },
      { path: 'typography', title: 'Typography', ab: 'T' }
    ]
  }, {
    path: '/forms',
    title: 'Forms',
    type: 'sub',
    icontype: 'content_paste',
    collapse: 'forms',
    children: [
      { path: 'regular', title: 'Regular Forms', ab: 'RF' },
      { path: 'extended', title: 'Extended Forms', ab: 'EF' },
      { path: 'validation', title: 'Validation Forms', ab: 'VF' },
      { path: 'wizard', title: 'Wizard', ab: 'W' }
    ]
  }, {
    path: '/tables',
    title: 'Tables',
    type: 'sub',
    icontype: 'grid_on',
    collapse: 'tables',
    children: [
      { path: 'regular', title: 'Regular Tables', ab: 'RT' },
      { path: 'extended', title: 'Extended Tables', ab: 'ET' },
      { path: 'datatables.net', title: 'Datatables.net', ab: 'DT' }
    ]
  }, {
    path: '/maps',
    title: 'Maps',
    type: 'sub',
    icontype: 'place',
    collapse: 'maps',
    children: [
      { path: 'google', title: 'Google Maps', ab: 'GM' },
      { path: 'fullscreen', title: 'Full Screen Map', ab: 'FSM' },
      { path: 'vector', title: 'Vector Map', ab: 'VM' }
    ]
  }, {
    path: '/widgets',
    title: 'Widgets',
    type: 'link',
    icontype: 'widgets'

  }, {
    path: '/charts',
    title: 'Charts',
    type: 'link',
    icontype: 'timeline'

  }, {
    path: '/calendar',
    title: 'Calendar',
    type: 'link',
    icontype: 'date_range'
  }, {
    path: '/pages',
    title: 'Pages',
    type: 'sub',
    icontype: 'image',
    collapse: 'pages',
    children: [
      { path: 'pricing', title: 'Pricing', ab: 'P' },
      { path: 'timeline', title: 'Timeline Page', ab: 'TP' },
      { path: 'login', title: 'Login Page', ab: 'LP' },
      { path: 'register', title: 'Register Page', ab: 'RP' },
      { path: 'lock', title: 'Lock Screen Page', ab: 'LSP' },
      { path: 'user', title: 'User Page', ab: 'UP' }
    ]
  }*/
];
@Component({
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public menuItems: any[];
  
  constructor(private router: Router) { 
    
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

  ngOnInit() {
    let url = this.router.url;
    if (url == '/dashboard' || url == '/deals' || url == '/trades') {
      this.menuItems = ROUTES;
    }
    else {
      let matched;
      if ((url.match(new RegExp("/", "g")) || []).length == 2 || (url.match(new RegExp("/", "g")) || []).length == 3) {
        matched = ROUTES.filter(menuItem => {
          let pos = url.search(menuItem.path);
          if (pos != -1) return true;
        });
        
      } else {
        matched = ROUTES.filter(menuItem => {
          return menuItem.path == url;
        });
      }
      this.menuItems = [];
      if (matched.length > 0) {
        if (matched[0].nextTabs) {
          let newItems = [];
          for (let i = 0; i < matched[0].nextTabs.length; i++) {
            let newItem: any = {};
            newItem.path = matched[0].path + matched[0].nextTabs[i].path;
            newItem.title = matched[0].nextTabs[i].title;
            newItem.title = matched[0].nextTabs[i].title;
            newItem.type = matched[0].nextTabs[i].type;
            newItem.icontype = matched[0].nextTabs[i].icontype;
            newItem.collapse = matched[0].nextTabs[i].collapse;
            if (matched[0].nextTabs[i].children) {
              let childs = [];
              for (let c = 0; c < matched[0].nextTabs[i].children.length; c++) {
                let child : any = {};
                child.path = newItem.path + '/' + matched[0].nextTabs[i].children[c].path;
                child.title = matched[0].nextTabs[i].children[c].title;
                child.ab = matched[0].nextTabs[i].children[c].ab;
                child.icontype = matched[0].nextTabs[i].children[c].icontype;
                childs.push(child);
              }
              newItem.children = childs;
            }
            newItems.push(newItem);
          }
          this.menuItems = this.menuItems.concat(newItems);
        }
      }
    }
  }
  updatePS(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
      let ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
    }
  }
  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }
}
