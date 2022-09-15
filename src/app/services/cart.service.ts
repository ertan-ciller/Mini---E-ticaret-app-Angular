import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  //public productList= new Subject<any>();

  constructor() { }


  cartItemList:any[]=[];

  public productList=new Subject<any>();

  getProductsToCart(){


    //let data = JSON.stringify(localStorage.getItem("product"))
    
    //console.log(data)
    //console.log(this.productList)
    //console.log("Local sotrage dan geldi "+localStorage.getItem("product"))
    //localStorage.getItem("product")
    return this.productList.asObservable();

  }

  setProductToCart(product:any){
    //  this.cartItemList.push(...product);
    //  this.productList.next(product)

  }

  addToCart(product:any){

    // localStorage.setItem("product",JSON.stringify(this.cartItemList));
    // //console.log()
    
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList)
    localStorage.setItem("product",JSON.stringify(this.cartItemList))
    console.log(JSON.stringify(this.cartItemList))

    // this.getTotalPrice();
    //console.log(this.cartItemList)
    //localStorage.clear();
    //this.cartItemList.push(product);
    

  }
  getTotalPrice(): number{
    let grandTotal=0
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;

    })
    return grandTotal;
    
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1)
      }
    })

  }
  removeAllCart(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList);

  }
}
