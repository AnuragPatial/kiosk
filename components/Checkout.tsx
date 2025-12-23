import React, { useState } from 'react';
import { CartItem } from '../types';
import { ChevronLeft } from 'lucide-react';

interface CheckoutProps {
  cart: { product: any, drink: any }[];
  onBackToMenu: () => void;
  onCompletePayment: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, onBackToMenu, onCompletePayment }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.product.price + (item.drink?.priceDelta || 0), 0);
  const taxRate = 0.08; // 8% tax
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const orderNumber = Math.floor(100000 + Math.random() * 900000); // 6-digit order number

  const handlePayment = async () => {
    if (!paymentMethod) return;
    
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    onCompletePayment();
  };

  return (
    <div className="flex flex-col h-screen bg-[#f8f9fa] overflow-hidden">
      {/* Checkout Header - Responsive */}
      <div className="bg-white px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 shadow-sm flex items-center justify-between z-10 border-b border-gray-200">
        <button 
          onClick={onBackToMenu} 
          className="flex items-center text-gray-600 hover:text-gray-900 font-bold transition-colors text-xs sm:text-sm md:text-base"
        >
          <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
          <span className="ml-1">Back</span>
        </button>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-gray-800 uppercase tracking-wide">Checkout</h2>
        <div className="w-16 sm:w-20"></div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
          
          {/* Order Summary Card - Responsive */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-5 md:p-6 lg:p-8 mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-4 sm:mb-6">Order Summary</h3>

            {cart.length === 0 ? (
              <p className="text-center text-gray-500 text-sm sm:text-base py-8">Your cart is empty.</p>
            ) : (
              <>
                {/* Order Items - Responsive */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 sm:gap-4 bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                      <img
                        src={item.product.image}
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover rounded-md sm:rounded-lg flex-shrink-0"
                        alt={item.product.name}
                        onError={(e) => {
                          e.currentTarget.src = 'https://placehold.co/100x100/f3f4f6/a3a3a3?text=Icon';
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-900 text-sm sm:text-base md:text-lg truncate">{item.product.name}</p>
                        {item.drink && (
                          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">with {item.drink.name} (+₱{item.drink.priceDelta.toFixed(2)})</p>
                        )}
                      </div>
                      <span className="font-bold text-gray-800 text-sm sm:text-base md:text-lg whitespace-nowrap">₱{(item.product.price + (item.drink?.priceDelta || 0)).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown - Responsive */}
                <div className="border-t border-gray-200 pt-4 sm:pt-6 space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium text-gray-900">₱{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (8%):</span>
                    <span className="font-medium text-gray-900">₱{tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg sm:text-xl md:text-2xl font-black text-gray-900 border-t border-gray-300 pt-3 sm:pt-4 mt-2 sm:mt-3">
                    <span>Total:</span>
                    <span className="text-[#b00e16]">₱{total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Order Number - Responsive */}
                <div className="text-center mt-6 sm:mt-8 bg-yellow-50 border border-yellow-200 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                  <p className="text-xs sm:text-sm font-semibold text-gray-700">Order Number</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-black mt-1">{orderNumber}</p>
                </div>
              </>
            )}
          </div>

          {/* Payment Methods - Responsive */}
          {cart.length > 0 && (
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-5 md:p-6 lg:p-8 mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-4 sm:mb-6">Payment Method</h3>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border-2 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-[#008843] bg-green-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl mb-2">💳</div>
                    <p className="font-bold text-sm sm:text-base md:text-lg text-gray-900">Card</p>
                  </div>
                </button>
                
                <button
                  onClick={() => setPaymentMethod('cash')}
                  className={`p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border-2 transition-all ${
                    paymentMethod === 'cash'
                      ? 'border-[#008843] bg-green-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl mb-2">💵</div>
                    <p className="font-bold text-sm sm:text-base md:text-lg text-gray-900">Cash</p>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Payment Button - Responsive */}
      {cart.length > 0 && (
        <div className="bg-white border-t border-gray-200 p-4 sm:p-5 shadow-[0_-4px_30px_rgba(0,0,0,0.1)] z-50">
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
            <button
              onClick={handlePayment}
              disabled={!paymentMethod || isProcessing}
              className={`w-full text-white text-base sm:text-lg md:text-xl lg:text-2xl font-black py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl shadow-lg transition-all transform active:scale-[0.98] ${
                paymentMethod && !isProcessing
                  ? 'bg-[#008843] hover:bg-[#007037] shadow-green-200'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              {isProcessing ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⏳</span>
                  Processing...
                </span>
              ) : (
                `Pay ₱${total.toFixed(2)}`
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;

