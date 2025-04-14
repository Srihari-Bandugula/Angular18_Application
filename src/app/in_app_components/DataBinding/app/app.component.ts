import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { DatabindappComponent } from "./databindapp/databindapp.component";

@Component({
  selector: 'app-root',
  imports: [FormsModule, HeaderComponent, FooterComponent, DatabindappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'Root Component';
}
