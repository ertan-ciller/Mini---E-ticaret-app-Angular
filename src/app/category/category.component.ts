import { Component, OnInit } from '@angular/core';
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  faCoffee=faCoffee;
  faCartShopping=faCartShopping;
  
  
  constructor() { }

  
  ngOnInit(): void {
  }

}
