import React, { useState } from 'react';
import { Product, DrinkOption } from '../types';
import { DRINKS } from '../constants';
import { ChevronLeft } from 'lucide-react';

interface MealBuilderProps {
  product: Product;
  onCancel: () => void;
  onConfirm: (drink: DrinkOption) => void;
}

const MealBuilder: React.FC<MealBuilderProps> = ({ product, onCancel, onConfirm }) => {
  const [selectedDrink, setSelectedDrink] = useState<DrinkOption | null>(null);

  const handleDrinkSelect = (drink: DrinkOption) => {
    setSelectedDrink(drink);
  };

  return (
    <div className="flex flex-col h-full bg-[#f8f9fa] animate-[fadeIn_0.2s_ease-out]">
      {/* Builder Header - Responsive */}
      <div className="bg-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 shadow-sm flex items-center justify-between z-10 border-b border-gray-100">
         <button onClick={onCancel} className="flex items-center text-gray-500 font-bold hover:text-gray-900 transition-colors text-sm sm:text-base">
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            <span className="ml-1 hidden sm:inline">Back to Menu</span>
            <span className="ml-1 sm:hidden">Back</span>
         </button>
         <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 uppercase tracking-wide text-center">Customize Your Meal</h2>
         <div className="w-16 sm:w-20 md:w-24"></div> {/* Spacer for center alignment */}
      </div>

      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          
          {/* Left: Product Hero - Responsive Layout */}
          <div className="w-full lg:w-1/3 xl:w-1/4 bg-white border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
             
             <img 
              src={product.image} 
              alt={product.name} 
              className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[280px] h-auto object-contain drop-shadow-2xl z-10 mb-4 sm:mb-6 md:mb-8 animate-[float_4s_ease-in-out_infinite]"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/400x400/f3f4f6/a3a3a3?text=No+Image';
              }}
            />
            <div className="text-center z-10 px-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-1 sm:mb-2">{product.name}</h2>
                <div className="inline-block bg-black text-[#ffbc0d] px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-sm sm:text-base md:text-lg font-bold mb-2 sm:mb-4">
                    ₱ {product.price.toFixed(2)}
                </div>
                <p className="text-gray-500 text-xs sm:text-sm max-w-xs mx-auto hidden sm:block">
                    Delicious perfection. Customize your sides and drinks to complete your meal.
                </p>
            </div>
          </div>

          {/* Right: Scrollable Steps - Responsive */}
          <div className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 md:p-8">
            <div className="max-w-full sm:max-w-3xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 pb-24 sm:pb-32">
              
              {/* Step 1: The Main Item */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
                 <div className="flex items-center justify-between mb-3 sm:mb-4 flex-wrap gap-2">
                     <h3 className="font-bold text-base sm:text-lg flex items-center gap-2">
                        <span className="bg-black text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs">1</span>
                        Main Item
                     </h3>
                     <button className="text-[#db0007] font-bold text-xs sm:text-sm hover:underline">Customize</button>
                 </div>
                 <div className="flex items-center gap-3 sm:gap-4 bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                    <img 
                        src={product.image} 
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain flex-shrink-0" 
                        alt="main" 
                        onError={(e) => {
                            e.currentTarget.src = 'https://placehold.co/100x100/f3f4f6/a3a3a3?text=Icon';
                        }}
                    />
                    <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-900 text-sm sm:text-base">{product.name}</p>
                        <p className="text-[10px] sm:text-xs text-gray-500">Regular Style</p>
                    </div>
                 </div>
              </div>

              {/* Step 2: The Drink */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-2">
                     <h3 className="font-bold text-base sm:text-lg flex items-center gap-2">
                        <span className="bg-black text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs">2</span>
                        Choose Beverage
                     </h3>
                     {selectedDrink && <span className="text-green-600 font-bold text-xs sm:text-sm flex items-center gap-1">✓ Selected</span>}
                 </div>

                 {/* Drink Selection Grid - Responsive */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                  {DRINKS.map((drink) => (
                    <button
                      key={drink.id}
                      onClick={() => handleDrinkSelect(drink)}
                      className={`flex flex-col items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-200 h-32 sm:h-36 md:h-40 ${
                        selectedDrink?.id === drink.id 
                          ? 'bg-[#fff9e6] border-[#ffbc0d] shadow-md' 
                          : 'bg-white border-transparent hover:border-gray-200 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex-1 flex items-center justify-center w-full">
                         <img 
                            src={drink.image} 
                            alt={drink.name} 
                            className="h-14 sm:h-16 md:h-20 w-auto object-contain"
                            onError={(e) => {
                                e.currentTarget.src = 'https://placehold.co/100x100/f3f4f6/a3a3a3?text=Drink';
                            }}
                         />
                      </div>
                      <div className="text-center w-full mt-1 sm:mt-2">
                          <span className="block text-[10px] sm:text-xs font-bold text-gray-800 truncate w-full">{drink.name}</span>
                          <span className="block text-[9px] sm:text-[10px] text-gray-400 font-medium">+₱ {drink.priceDelta}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </div>

       {/* Floating Action Bar - Responsive */}
       <div className="fixed bottom-0 left-0 lg:left-auto lg:right-0 w-full lg:w-2/3 xl:w-3/4 bg-white border-t border-gray-200 p-3 sm:p-4 shadow-[0_-4px_30px_rgba(0,0,0,0.1)] z-50 flex justify-center">
          <div className="w-full max-w-full sm:max-w-2xl flex gap-3 sm:gap-4">
             <button 
               onClick={() => selectedDrink && onConfirm(selectedDrink)}
               disabled={!selectedDrink}
               className={`flex-1 text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-lg transition-all transform active:scale-[0.98] ${
                 selectedDrink 
                   ? 'bg-[#27ae60] hover:bg-[#219150] shadow-green-200' 
                   : 'bg-gray-300 cursor-not-allowed'
               }`}
             >
               {selectedDrink ? `Add to Order - ₱ ${(product.price + selectedDrink.priceDelta).toFixed(2)}` : 'Select a Drink'}
             </button>
          </div>
       </div>
       <style>{`
         @keyframes float {
           0% { transform: translateY(0px); }
           50% { transform: translateY(-10px); }
           100% { transform: translateY(0px); }
         }
       `}</style>
    </div>
  );
};

export default MealBuilder;