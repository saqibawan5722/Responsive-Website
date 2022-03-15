import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailesService {

  constructor() { }

  ordersdetails=[
    {
       id:1,
       foodname: "Chicken Rise",
       fooddetails: "masalaa panel",
       foodprice: 300,
       foodimg : "https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="
    },
    
    {
      id:2,
      foodname: "Mix Vagetable",
      fooddetails: "masalaa panel",
      foodprice: 400,
      foodimg : "https://media.istockphoto.com/photos/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors-picture-id1284690585?b=1&k=20&m=1284690585&s=170667a&w=0&h=HlEPBNsYMVuu-SsohPliBWHJy-IhW9y-fl8dS9KnBBo="
   },

   {
    id:3,
    foodname: "Fresh Food",
    fooddetails: "masalaa panel",
    foodprice: 350,
    foodimg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZrAf1Yfdj--EQPorW7wZKtjRzltXR98yNSQ&usqp=CAU"
   },

   {
    id:4,
    foodname: "chicken rise",
    fooddetails: "masalaa panel",
    foodprice: 500,
    foodimg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkW7L8Xo9sF5oR45e0B4wSlfoiOLCFF3g8hQ&usqp=CAU"

   },

   {
    id:5,
    foodname: "Chicken Rise",
    fooddetails: "masalaa panel",
    foodprice: 300,
    foodimg : "https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="
 },
 
 {
   id:6,
   foodname: "Mix Vagetable",
   fooddetails: "masalaa panel",
   foodprice: 400,
   foodimg : "https://media.istockphoto.com/photos/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors-picture-id1284690585?b=1&k=20&m=1284690585&s=170667a&w=0&h=HlEPBNsYMVuu-SsohPliBWHJy-IhW9y-fl8dS9KnBBo="
},
  ]
}
