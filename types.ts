import React from 'react';

export enum ViewState {
  MENU = 'MENU',
  BUILDER = 'BUILDER',
  CHECKOUT = 'CHECKOUT',
  PAYMENT_SUCCESS = 'PAYMENT_SUCCESS'
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  categoryId: string;
  description?: string;
  calories?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  customizations?: string[];
  drink?: Product; // For combos
}

export interface DrinkOption {
  id: string;
  name: string;
  image: string;
  priceDelta: number;
}