import { Component, OnInit, Renderer, ViewChild, ElementRef, Directive } from '@angular/core';
import { ROUTES } from '../.././sidebar/sidebar.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { DataService } from '../../_services/data.services';
import { AuthenticationService } from '../../_services/authentication.service';

const misc: any = {
  navbar_menu_visible: 0,
  active_collapse: true,
  disabled_collapse_init: 0,
};

declare var $: any;
@Component({
  selector: 'app-navbar-cmp',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.styles.css']
})

export class NavbarComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  private nativeElement: Node;
  private toggleButton: any;
  private sidebarVisible: boolean;

  @ViewChild('app-navbar-cmp') button: any;

  constructor(location: Location,
               private renderer: Renderer,
               private element: ElementRef,
               private router: Router,
               private dataService: DataService,
               private authService: AuthenticationService) {
    this.location = location;
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);

    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    if ($('body').hasClass('sidebar-mini')) {
      misc.sidebar_mini_active = true;
    }
    if ($('body').hasClass('hide-sidebar')) {
      misc.hide_sidebar_active = true;
    }
    $('#minimizeSidebar').click(function () {
      if (misc.sidebar_mini_active === true) {
        $('body').removeClass('sidebar-mini');
        misc.sidebar_mini_active = false;

      } else {
        setTimeout(function () {
          $('body').addClass('sidebar-mini');

          misc.sidebar_mini_active = true;
        }, 300);
      }

      // we simulate the window Resize so the charts will get updated in realtime.
      const simulateWindowResize = setInterval(function () {
        window.dispatchEvent(new Event('resize'));
      }, 180);

      // we stop the simulation of Window Resize after the animations are completed
      setTimeout(function () {
        clearInterval(simulateWindowResize);
      }, 1000);
    });
    $('#hideSidebar').click(function () {
      if (misc.hide_sidebar_active === true) {
        setTimeout(function () {
          $('body').removeClass('hide-sidebar');
          misc.hide_sidebar_active = false;
        }, 300);
        setTimeout(function () {
          $('.sidebar').removeClass('animation');
        }, 600);
        $('.sidebar').addClass('animation');

      } else {
        setTimeout(function () {
          $('body').addClass('hide-sidebar');
          // $('.sidebar').addClass('animation');
          misc.hide_sidebar_active = true;
        }, 300);
      }

      // we simulate the window Resize so the charts will get updated in realtime.
      const simulateWindowResize = setInterval(function () {
        window.dispatchEvent(new Event('resize'));
      }, 180);

      // we stop the simulation of Window Resize after the animations are completed
      setTimeout(function () {
        clearInterval(simulateWindowResize);
      }, 1000);
    });
  }
  logout() {
    this.authService.logout();
  }
  isMobileMenu() {
    if ($(window).width() < 991) {
      return false;
    }
    return true;
  };
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    body.classList.add('nav-open');

    this.sidebarVisible = true;
  };
  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
  };
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  };

  getTitle(index) {
    let title: any = this.location.prepareExternalUrl(this.location.path());
    let titles = title.split('/');
    title = titles[index];
    if (title.length > 0)
      title = title[0].toUpperCase() + title.substr(1);
    return title;
  }

  getPath() {
    let url = this.location.prepareExternalUrl(this.location.path());
    let urls = url.split('/');
    urls = urls.filter(u => {
      return u != 'dashboard';
    })
    for (let i = 1; i < urls.length; i++) {
      urls[i] = urls[i - 1] + '/' + urls[i];
    }
    return urls;
  }
}
