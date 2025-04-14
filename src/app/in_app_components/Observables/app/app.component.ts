import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserStreamComponent } from "./user-stream/user-stream.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [UserStreamComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UserStream';
}
