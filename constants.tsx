import React from 'react';
import { Category, Product, DrinkOption } from './types';

// Categories with reliable, high-quality images
export const CATEGORIES: Category[] = [
  { id: 'burgers', name: 'Burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80' },
  { id: 'chicken', name: 'Chicken & Fish', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=200&q=80' },
  { id: 'fries', name: 'Fries & Sides', image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=200&q=80' },
  { id: 'cafe', name: 'McCafé® Coffees', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&q=80' },
  { id: 'beverages', name: 'Beverages', image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&w=200&q=80' },
  { id: 'breakfast', name: 'Breakfast', image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWtmYXN0fGVufDB8fDB8fHww' },
  { id: 'sweets', name: 'Sweets & Treats', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=200&q=80' },
  { id: 'happymeal', name: 'Happy Meal®', image: 'https://images.unsplash.com/photo-1608835149361-d1f71c746ab0?q=80&w=608&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

// Products with reliable images
export const PRODUCTS: Product[] = [
  // Burgers
  { id: 'b1', categoryId: 'burgers', name: 'Double Big Mac®', price: 9.50, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80', calories: 720 },
  { id: 'b2', categoryId: 'burgers', name: 'Big Mac®', price: 6.50, image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80', calories: 550 },
  { id: 'b3', categoryId: 'burgers', name: 'Double Quarter Pounder', price: 8.20, image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=600&q=80', calories: 740 },
  { id: 'b4', categoryId: 'burgers', name: 'McDouble®', price: 3.50, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80', calories: 400 },
  { id: 'b5', categoryId: 'burgers', name: 'Bacon Burger', price: 7.90, image: 'https://plus.unsplash.com/premium_photo-1675283476222-6a1a01d6a0ba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', calories: 630 },
  { id: 'b6', categoryId: 'burgers', name: 'Cheeseburger', price: 2.80, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80', calories: 300 },
  
  // Chicken & Fish
  { id: 'c1', categoryId: 'chicken', name: 'McChicken®', price: 3.20, image: 'https://images.unsplash.com/photo-1615557960916-5f4791effe9d?auto=format&fit=crop&w=600&q=80', calories: 400 },
  { id: 'c2', categoryId: 'chicken', name: 'Chicken McNuggets®', price: 6.00, image: 'https://images.unsplash.com/photo-1605291581926-df4bf7ee3e89?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', calories: 410 },
  { id: 'c3', categoryId: 'chicken', name: 'McCrispy™', price: 5.50, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80', calories: 470 },
  { id: 'c4', categoryId: 'chicken', name: 'Filet-O-Fish®', price: 4.80, image: 'https://images.unsplash.com/photo-1579631542720-3a87824fff86?auto=format&fit=crop&w=600&q=80', calories: 380 },
  { id: 'c5', categoryId: 'chicken', name: 'Spicy McCrispy™', price: 5.80, image: 'https://images.unsplash.com/photo-1568481276363-88d890339390?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', calories: 530 },
  
  // Fries & Sides
  { id: 's1', categoryId: 'fries', name: 'Famous Fries (M)', price: 3.29, image: 'https://images.unsplash.com/photo-1668891296479-c88fd8a68509?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', calories: 320 },
  { id: 's2', categoryId: 'fries', name: 'Famous Fries (L)', price: 3.99, image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80', calories: 480 },
  { id: 's3', categoryId: 'fries', name: 'Apple Slices', price: 1.00, image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=600&q=80', calories: 15 },
  
  // McCafé Coffees
  { id: 'cf1', categoryId: 'cafe', name: 'Caramel Macchiato', price: 3.89, image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80', calories: 260 },
  { id: 'cf2', categoryId: 'cafe', name: 'Iced Coffee', price: 2.50, image: 'https://images.unsplash.com/photo-1549652127-2e5e59e86a7a?q=80&w=387&auto=format&fit=crop&w=500&q=80', calories: 140 },
  { id: 'cf3', categoryId: 'cafe', name: 'Latte', price: 3.29, image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80', calories: 120 },
  
  // Beverages
  { id: 'v1', categoryId: 'beverages', name: 'Cola', price: 1.50, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80', calories: 140 },
  { id: 'v2', categoryId: 'beverages', name: 'Lemon Lime', price: 1.50, image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80', calories: 140 },
  { id: 'v3', categoryId: 'beverages', name: 'Orange Soda', price: 1.50, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80', calories: 140 },
  
  // Breakfast
  { id: 'bk1', categoryId: 'breakfast', name: 'Egg Sandwich', price: 3.50, image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', calories: 310 },
  { id: 'bk2', categoryId: 'breakfast', name: 'Sausage Burrito', price: 2.50, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80', calories: 310 },
  
  // Sweets
  { id: 'sw1', categoryId: 'sweets', name: 'Oreo Ice Cream', price: 3.40, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80', calories: 510 },
  { id: 'sw2', categoryId: 'sweets', name: 'Vanilla Cone', price: 1.00, image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=600&q=80', calories: 200 },

  // Happy Meal
  { id: 'hm1', categoryId: 'happymeal', name: 'Kids Meal', price: 4.50, image: 'https://images.unsplash.com/photo-1765614767353-b1e85c1cb0ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2lkcyUyMG1lYWx8ZW58MHx8MHx8fDA%3D', calories: 475 },
];

export const DRINKS: DrinkOption[] = [
  { id: 'd1', name: 'Lemon Lime', priceDelta: 0, image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=200&q=80' },
  { id: 'd2', name: 'Cola', priceDelta: 0, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=200&q=80' },
  { id: 'd3', name: 'Orange', priceDelta: 0, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=200&q=80' },
];