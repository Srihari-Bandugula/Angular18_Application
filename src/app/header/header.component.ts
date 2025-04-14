import {MediaMatcher} from '@angular/cdk/layout';
import {Component, OnDestroy, inject, signal} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  {

  protected readonly isMobile = signal(true);

}
