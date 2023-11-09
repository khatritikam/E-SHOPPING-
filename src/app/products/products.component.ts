import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
products = [
  {id:1,name:'Minimalists Analog Watch',price:'109',color:'black',available:'Available', image:'/assets/products/watch.webp'},
  {id:2,name:'Hisense Ultra HD Smart TV',price:'3339',color:'black',available:'Available', image:'/assets/products/tv.webp'},
  {id:3,name:'Apple iPhone 12',price:'1855',color:'black',available:'Not Available', image:'/assets/products/iphone-12.png'},
  {id:4,name:'LG Full Automatic Washing Machine',price:'1765',color:'white',available:'Available', image:'/assets/products/wm.jpg'},
  {id:5,name:'LG Refrigerator With Door Cooling',price:'2815',color:'white',available:'Not Available', image:'/assets/products/refg.webp'},
  {id:6,name:'Dell Inspiron One 27 Ryzen 7 ',price:'2145',color:'white',available:'Available', image:'/assets/products/cmpt.jpg'}
  ]
}
