import { v4 as uuidv4 } from 'uuid';
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import product5 from '../assets/product5.png'
import product6 from '../assets/product6.png'
import product7 from '../assets/product7.png'
import product8 from '../assets/product8.png'

interface Product {
    name: string;
    id: string;
    src: string;
    cost: number;
    quantity: number;
    currentCost: number;
}

type Cart = Product[]


const products: Cart = [
    {name: "Men's Denim Jacket", id: uuidv4() ,src: product1, cost: 150.95, quantity: 1, currentCost: 150.95},
    {name: "Men's Black Hoodie", id: uuidv4() ,src: product2, cost: 100.25, quantity: 1, currentCost: 100.25},
    {name: "Men's Stripped Shirt", id: uuidv4() ,src: product3, cost: 53.92, quantity: 1, currentCost: 53.92},
    {name: "Women's Puffer Jacket", id: uuidv4() ,src: product4, cost: 257.17, quantity: 1, currentCost: 257.17},
    {name: "Women's Denim Jacket", id: uuidv4() ,src: product5, cost: 230.55, quantity: 1, currentCost: 230.55},
    {name: "Women's Denim Jeans", id: uuidv4() ,src: product6, cost: 150.75, quantity: 1, currentCost: 150.75},
    {name: "Men's Dress Pants", id: uuidv4() ,src: product7, cost: 113.65, quantity: 1, currentCost: 113.65},
    {name: "Travel Bag", id: uuidv4() ,src: product8, cost: 310.91, quantity: 1, currentCost: 310.91},
] 


export {type Product,type Cart, products}
