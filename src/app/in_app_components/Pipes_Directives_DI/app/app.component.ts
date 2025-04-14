import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OutOfStockDirective } from './app-out-of-stock.directive';
import { TitleCasePipe } from './title-case.pipe';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  imports: [OutOfStockDirective,TitleCasePipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Pipes_Directives_DI_Application';
  products: any[] = [];

  constructor(
    private productService: ProductService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.logger.log('Products loaded');
  }
}
