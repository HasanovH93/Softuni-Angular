import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {id:1, name:"Minimalistis Analog Watch", price: '109', color: 'Black', available: "Available", image:"/assets/product1.jpeg"},
    {id:2, name:"Misense Ultra HD Smart TV", price: '3339', color: 'Black', available: "Available", image:"/assets/product2.jpeg"},
    {id:3, name:"Apple Iphone 12", price: '1855', color: 'Black', available: "Not Available", image:"/assets/product3.jpeg"},
    {id:4, name:"LG fully Automatic Washing Machine", price: '1765', color: 'White', available: "Available", image:"/assets/product4.jpeg"},
    {id:5, name:"LG Refrigerator with Door Cooling", price: '2815', color: 'White', available: "Not Available", image:"/assets/product5.jpeg"},
    {id:6, name:"DELL Inspiron One 27 Ryzen 7", price: '2145', color: 'White', available: "Available", image:"/assets/product6.jpg"},
  ];

}
