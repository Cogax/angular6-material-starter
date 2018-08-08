import { Component, ViewChild, ElementRef } from '@angular/core';
import { SidenavService } from './components/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('appDrawer') appDrawer: ElementRef;

  constructor(
    public sidenavService: SidenavService
  ) { }

  ngAfterViewInit() {
    this.sidenavService.appDrawer = this.appDrawer;
  }
}
