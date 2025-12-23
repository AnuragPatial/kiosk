import React, { useEffect } from 'react';
import { CheckCircle, Home } from 'lucide-react';

interface PaymentSuccessProps {
  orderNumber: number;
  total: number;
  onBackToMenu: () => void;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ orderNumber, total, onBackToMenu }) => {
  useEffect(() => {
    // Auto redirect after 5 seconds
    const timer = setTimeout(() => {
      onBackToMenu();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onBackToMenu]);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-green-50 via-white to-green-50 items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-md w-full text-center">
        
        {/* Success Icon - Responsive */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
            <div className="relative bg-green-500 rounded-full p-4 sm:p-6 md:p-8">
              <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Success Message - Responsive */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 md:mb-12">
          Thank you for your order
        </p>

        {/* Order Details Card - Responsive */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 md:p-10 mb-6 sm:mb-8">
          
          {/* Order Number - Responsive */}
          <div className="mb-6 sm:mb-8">
            <p className="text-sm sm:text-base md:text-lg text-gray-500 uppercase tracking-wide mb-2">Order Number</p>
            <p className="text-4xl sm:text-5xl md:text-6xl font-black text-[#b00e16]">{orderNumber}</p>
          </div>

          <div className="border-t border-gray-200 pt-6 sm:pt-8">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-2">Total Paid</p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">₱{total.toFixed(2)}</p>
          </div>

          {/* Info Message - Responsive */}
          <div className="mt-6 sm:mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-4 sm:p-5">
            <p className="text-xs sm:text-sm md:text-base text-gray-700">
              <span className="font-bold">Please keep your order number.</span> Your order will be ready shortly!
            </p>
          </div>
        </div>

        {/* Action Buttons - Responsive */}
        <div className="space-y-3 sm:space-y-4">
          <button
            onClick={onBackToMenu}
            className="w-full bg-[#008843] hover:bg-[#007037] text-white text-base sm:text-lg md:text-xl font-bold py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <Home size={24} className="sm:w-6 sm:h-6" />
            <span>Back to Menu</span>
          </button>
          
          <p className="text-xs sm:text-sm text-gray-500">
            Redirecting automatically in 5 seconds...
          </p>
        </div>
      </div>

      {/* Animated Background Elements */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PaymentSuccess;

