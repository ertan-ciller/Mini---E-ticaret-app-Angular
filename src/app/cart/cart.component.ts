import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products:any=[];
  public grandTotal:number=0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    
    // console.log(localStorage.getItem("product"))
    // this.products=localStorage.getItem("products")
    // this.cartService.getProductsToCart()
    // .subscribe(res=>{
    //   this.products=res;
    //   this.grandTotal=this.cartService.getTotalPrice();
    // })

    this.cartService.getProductsToCart().subscribe(data=>{
      this.products=data;
      console.log(this.products);
      //console.log("Cart ComponentsSS ****** "+this.products);

      //localStorage.getItem(this.products)
      // console.log(this.products)
    })
    //this.products.push(this.cartService.getProductsToCart())
    
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item)
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }
}
