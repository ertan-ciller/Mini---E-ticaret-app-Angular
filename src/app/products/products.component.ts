import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!:any;

  constructor(private productService:ProductService, private cartService:CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      let jsonValue=JSON.stringify(this.products);
      //console.log(jsonValue)
      this.products=data
      console.log(this.products);

      //console.log(this.products)
      //console.log(typeof(data))
    
    })
  }
  addToCart(product:any){
    this.cartService.addToCart(product);

  }

}
