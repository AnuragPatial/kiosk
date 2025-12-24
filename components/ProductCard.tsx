import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      onClick={() => onClick(product)}
      className="group bg-white rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-4 flex flex-col items-center justify-start shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-lg hover:scale-[1.01] transition-all duration-200 cursor-pointer border border-gray-100 hover:border-[#ffbc0d] h-full"
      style={{ minHeight: '0', display: 'flex', flexDirection: 'column' }}
    >
      {/* Image Container - Responsive */}
      <div className="w-full aspect-[4/3] mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5 overflow-hidden rounded-md sm:rounded-lg md:rounded-xl bg-gray-50 relative flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/400x300/f3f4f6/a3a3a3?text=No+Image';
          }}
        />
      </div>
      
      {/* Content - Responsive */}
      <div className="text-center w-full flex flex-col items-center flex-1 min-h-0 px-0.5 sm:px-1 justify-between" style={{ minHeight: '0' }}>
        <h3 className="font-bold text-gray-800 text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base leading-tight line-clamp-2 w-full mb-0.5 sm:mb-1 md:mb-1.5 group-hover:text-[#b00e16] flex items-center justify-center transition-colors duration-200">
          {product.name}
        </h3>
        
        {/* Price Tag - Responsive with visible currency */}
        <div className="mt-auto pt-0.5 sm:pt-1 pb-1 sm:pb-1.5 md:pb-2 flex-shrink-0">
             <span className="font-black text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-gray-900 bg-yellow-50 px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-0.5 sm:py-1 rounded-full border border-yellow-200 whitespace-nowrap">
               <span className="text-[#b00e16]">$</span>{product.price.toFixed(0)}
             </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;