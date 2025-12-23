import React, { useState, useEffect, useRef } from 'react';
import { ViewState, Product, DrinkOption } from './types';
import { CATEGORIES, PRODUCTS } from './constants';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import MealBuilder from './components/MealBuilder';
import Checkout from './components/Checkout';
import PaymentSuccess from './components/PaymentSuccess';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.MENU);
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0].id);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<{product: Product, drink: DrinkOption}[]>([]);
  const [orderTotal, setOrderTotal] = useState<number>(0);
  const [orderNumber, setOrderNumber] = useState<number>(0);
  
  // Ref for the product grid container to handle scrolling
  const productGridRef = useRef<HTMLDivElement>(null);

  // Scroll to top when category changes
  useEffect(() => {
    if (productGridRef.current) {
      productGridRef.current.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [activeCategory]);

  // Derived state
  const displayedProducts = PRODUCTS.filter(p => p.categoryId === activeCategory);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setView(ViewState.BUILDER);
  };

  const handleAddToCart = (drink: DrinkOption) => {
    if (selectedProduct) {
      setCart([...cart, { product: selectedProduct, drink }]);
      setSelectedProduct(null);
      setView(ViewState.MENU);
    }
  };

  const handleCancelBuilder = () => {
    setSelectedProduct(null);
    setView(ViewState.MENU);
  };

  const handleCancelOrder = () => {
    if (cart.length > 0 && confirm("Are you sure you want to cancel the entire order?")) {
      setCart([]);
      setSelectedProduct(null);
      setView(ViewState.MENU);
    }
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      setView(ViewState.CHECKOUT);
    }
  };

  const handleBackToMenu = () => {
    setView(ViewState.MENU);
  };

  const handleCompletePayment = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.product.price + (item.drink?.priceDelta || 0), 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
    const orderNum = Math.floor(100000 + Math.random() * 900000);
    
    setOrderTotal(total);
    setOrderNumber(orderNum);
    setView(ViewState.PAYMENT_SUCCESS);
  };

  const handleResetAfterPayment = () => {
    setCart([]);
    setSelectedProduct(null);
    setOrderTotal(0);
    setOrderNumber(0);
    setView(ViewState.MENU);
  };

  // Render Payment Success View
  if (view === ViewState.PAYMENT_SUCCESS) {
    return (
      <PaymentSuccess
        orderNumber={orderNumber}
        total={orderTotal}
        onBackToMenu={handleResetAfterPayment}
      />
    );
  }

  // Render Checkout View
  if (view === ViewState.CHECKOUT) {
    return (
      <Checkout
        cart={cart}
        onBackToMenu={handleBackToMenu}
        onCompletePayment={handleCompletePayment}
      />
    );
  }

  // Render Meal Builder View
  if (view === ViewState.BUILDER && selectedProduct) {
    return (
      <MealBuilder 
        product={selectedProduct} 
        onCancel={handleCancelBuilder} 
        onConfirm={handleAddToCart}
      />
    );
  }

  // Render Menu View
  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden font-sans select-none text-gray-800">
      
      {/* Promo Header - Fully Responsive */}
      <div className="bg-[#cc0000] w-full relative flex-shrink-0 h-[60px] sm:h-[68px] md:h-[76px] lg:h-[84px] xl:h-[88px] flex items-center justify-between overflow-hidden shadow-md z-20 px-2 sm:px-3 md:px-4 lg:px-6">
         
         {/* Background Gradient */}
         <div className="absolute inset-0 bg-gradient-to-r from-[#d60007] to-[#990000]"></div>

         {/* Content Container */}
         <div className="flex items-center w-full h-full z-10 relative max-w-7xl mx-auto">
            
            {/* Logo Section - Responsive */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center mr-2 sm:mr-3 md:mr-4 lg:mr-6 pt-1">
                <div className="text-[#ffbc0d]">
                     <svg width="28" height="24" viewBox="0 0 109 94" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm sm:w-8 sm:h-7 md:w-9 md:h-8 lg:w-10 lg:h-9">
                        <path d="M11.6607 88.0355H2.33877V57.9405C2.33877 57.9405 2.15573 34.2562 13.5649 19.3486C19.2882 11.8703 26.9696 9.47565 31.9133 9.47565C40.6976 9.47565 47.1066 16.0645 50.5828 22.8427C50.5828 22.8427 52.9641 18.2514 55.3418 15.6558C59.919 10.4637 66.8741 8.86658 71.2687 8.86658C78.4063 8.86658 87.7394 11.2612 94.6945 20.8459C104.577 34.6253 105.127 57.9405 105.127 57.9405V88.0355H94.5126V58.7397C94.5126 58.7397 94.8778 37.9472 87.1903 29.3626C84.0792 26.1685 80.0519 23.9723 75.6617 23.9723C67.7946 23.9723 62.6659 31.5587 62.6659 42.7416V88.0355H52.5976V43.5401C52.5976 43.5401 52.4157 26.5681 44.5455 26.5681C37.0425 26.5681 33.3804 35.1556 33.3804 44.9377V88.0355H22.7661V58.7397C22.7661 58.7397 22.9511 29.5619 11.6607 88.0355Z" fill="#FFBC0D"/>
                     </svg>
                </div>
                <span className="text-white font-serif italic text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] -mt-0.5 opacity-90">i'm lovin' it</span>
            </div>

            {/* Main Promo Text - Responsive */}
            <div className="flex-1 flex flex-col justify-center items-start leading-none pl-0.5 sm:pl-1 md:pl-1.5">
                <div className="text-white font-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tighter drop-shadow-md mb-0.5 sm:mb-1">
                    FLAT 50% OFF
                </div>
                
                <div className="bg-black text-white px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 md:py-1 transform -skew-x-12 inline-block mb-0.5">
                    <span className="block font-bold text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-widest uppercase transform skew-x-12">
                        ON 3 MEAL-COMBOS
                    </span>
                </div>
                
                <span className="text-white/90 text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-medium tracking-wide mt-0.5 hidden sm:block">
                    Available on veg & non veg
                </span>
            </div>

            {/* Right Side Image Composition - Responsive */}
            <div className="h-[120%] w-auto max-w-[35%] sm:max-w-[40%] flex items-end justify-end overflow-visible pointer-events-none absolute right-0 bottom-0 sm:static sm:h-[140%] lg:h-[150%]">
                <img 
                    src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80"
                    className="h-full w-auto object-contain object-bottom translate-y-1 sm:translate-y-2 md:translate-y-4 filter drop-shadow-2xl brightness-110 opacity-80 sm:opacity-100"
                    alt="Meal Combo"
                />
            </div>
         </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar (Left) - Fully Responsive with proper height calculation */}
        <div className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 bg-gray-100 flex-shrink-0 z-10 border-r border-gray-200 sidebar-container">
           <Sidebar 
             activeCategory={activeCategory} 
             onSelectCategory={setActiveCategory} 
           />
        </div>

        {/* Product Grid Area (Right) - Fully Responsive */}
        <div 
          ref={productGridRef}
          className="flex-1 overflow-y-auto bg-[#f8f9fa] p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 pb-16 sm:pb-20 md:pb-24"
        >
           {/* Responsive width constraint */}
           <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto w-full px-1 sm:px-2">
             
             {/* Section Header - Responsive */}
             <div className="flex justify-between items-end mb-2 sm:mb-3 md:mb-4 border-b border-gray-200 pb-1 sm:pb-1.5 md:pb-2">
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-black text-gray-800 uppercase tracking-tight">
                  {CATEGORIES.find(c => c.id === activeCategory)?.name}
                </h2>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-bold text-gray-400 uppercase">{displayedProducts.length} Items</span>
             </div>

             {/* Products Grid - Responsive: 2 cols mobile, 3 cols desktop */}
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                {displayedProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onClick={handleProductSelect} 
                  />
                ))}
             </div>
           </div>
        </div>
      </div>

      {/* Responsive Footer */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] h-12 sm:h-14 md:h-16 lg:h-18 flex items-center px-2 sm:px-3 md:px-4 lg:px-6 gap-2 sm:gap-3">
        
        {/* Left: Label & Cart - Responsive */}
        <div className="flex-1 flex items-center gap-2 sm:gap-3 overflow-hidden h-full py-1 sm:py-1.5">
            <div className="hidden sm:flex flex-col justify-center border-r border-gray-200 pr-2 sm:pr-3">
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-gray-400 uppercase">My Order</span>
                <span className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-black text-[#b00e16]">Eat In</span>
            </div>

            {/* Scrollable Cart Thumbnails - Responsive */}
            <div className="flex-1 overflow-x-auto no-scrollbar flex items-center gap-1 sm:gap-1.5 h-full">
                {cart.length === 0 ? (
                    <span className="text-gray-400 text-[9px] sm:text-[10px] md:text-xs font-medium italic pl-1">Your tray is empty</span>
                ) : (
                    cart.map((item, idx) => (
                        <div key={idx} className="flex-shrink-0 relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-50 rounded-md border border-gray-100 p-0.5">
                            <img 
                                src={item.product.image} 
                                className="w-full h-full object-cover rounded-sm" 
                                onError={(e) => {
                                    e.currentTarget.src = 'https://placehold.co/100x100/f3f4f6/a3a3a3?text=Icon';
                                }}
                            />
                            <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#ffbc0d] text-black text-[6px] sm:text-[7px] font-bold rounded-full flex items-center justify-center shadow-sm">1</div>
                        </div>
                    ))
                )}
            </div>
        </div>

        {/* Right: Actions - Responsive */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
             <button 
                onClick={handleCancelOrder}
                disabled={cart.length === 0}
                className={`h-8 sm:h-9 md:h-10 lg:h-12 px-2 sm:px-3 md:px-4 rounded-md font-bold text-[9px] sm:text-[10px] md:text-xs lg:text-sm transition-colors uppercase tracking-wide ${
                    cart.length === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-[#b00e16] hover:bg-red-50'
                }`}
             >
                Cancel
             </button>
             <button 
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className={`h-8 sm:h-9 md:h-10 lg:h-12 px-3 sm:px-4 md:px-5 lg:px-6 rounded-md font-bold text-[10px] sm:text-xs md:text-sm lg:text-base shadow-md transition-all uppercase tracking-wide ${
                    cart.length === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#008843] text-white hover:bg-[#007037] active:scale-95'
                }`}
             >
                Checkout
             </button>
        </div>
      </div>
    </div>
  );
};

export default App;