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
    <div className="flex flex-col h-screen w-full bg-gradient-to-br from-green-50 via-white to-green-50 items-center justify-center overflow-hidden payment-success-container">
      <div className="w-full h-full flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 payment-success-content">
        
        {/* Success Icon - Responsive and Visible */}
        <div className="flex justify-center items-center flex-shrink-0 payment-success-icon">
          <div className="relative flex items-center justify-center success-icon-wrapper">
            {/* Animated ping effect - behind the icon */}
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-50 z-0"></div>
            {/* Main icon container - properly sized and visible */}
            <div className="relative bg-green-500 rounded-full flex items-center justify-center z-10 success-icon-container">
              <CheckCircle className="success-icon-inner text-white flex-shrink-0" strokeWidth={2.5} style={{ zIndex: 20 }} />
            </div>
          </div>
        </div>

        {/* Success Message - Responsive */}
        <h1 className="font-black text-gray-900 flex-shrink-0 payment-success-title px-2">
          Payment Successful!
        </h1>
        
        <p className="text-gray-600 flex-shrink-0 payment-success-subtitle px-2">
          Thank you for your order
        </p>

        {/* Order Details Card - Responsive */}
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 flex-shrink-0 payment-success-card mx-2 sm:mx-0">
          
          {/* Order Number - Responsive */}
          <div className="payment-success-order-number">
            <p className="text-gray-500 uppercase tracking-wide payment-success-label">Order Number</p>
            <p className="font-black text-[#b00e16] break-all payment-success-order-value">{orderNumber}</p>
          </div>

          <div className="border-t border-gray-200 payment-success-total-section">
            <p className="text-gray-600 payment-success-label">Total Paid</p>
            <p className="font-black text-gray-900 payment-success-total">
              <span className="text-[#b00e16]">$</span>{total.toFixed(2)}
            </p>
          </div>

          {/* Info Message - Responsive */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg payment-success-info">
            <p className="text-gray-700 payment-success-info-text">
              <span className="font-bold">Please keep your order number.</span> Your order will be ready shortly!
            </p>
          </div>
        </div>

        {/* Action Buttons - Responsive */}
        <div className="flex-shrink-0 payment-success-actions px-2 sm:px-0">
          <button
            onClick={onBackToMenu}
            className="w-full bg-[#008843] hover:bg-[#007037] text-white font-bold rounded-lg shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 payment-success-button"
          >
            <Home className="payment-success-button-icon" />
            <span>Back to Menu</span>
          </button>
          
          <p className="text-gray-500 payment-success-redirect-text">
            Redirecting automatically in 5 seconds...
          </p>
        </div>
      </div>

      {/* Responsive Viewport-Fit Styling */}
      <style>{`
        /* Container - fits viewport exactly */
        .payment-success-container {
          max-height: 100vh;
          overflow: hidden;
        }
        
        /* Content - uses flexbox to distribute space */
        .payment-success-content {
          max-width: 100%;
          gap: clamp(0.5rem, 2vh, 1.5rem);
          padding-top: clamp(0.5rem, 2vh, 1.5rem);
          padding-bottom: clamp(0.5rem, 2vh, 1.5rem);
        }
        
        /* Icon - scales with viewport */
        .payment-success-icon {
          height: clamp(60px, 12vh, 120px);
          margin-bottom: clamp(0.25rem, 1vh, 0.75rem);
        }
        
        .success-icon-wrapper {
          width: clamp(60px, 12vh, 120px);
          height: clamp(60px, 12vh, 120px);
        }
        
        .success-icon-container {
          width: clamp(60px, 12vh, 120px);
          height: clamp(60px, 12vh, 120px);
          min-width: clamp(60px, 12vh, 120px);
          min-height: clamp(60px, 12vh, 120px);
        }
        
        .success-icon-inner {
          width: clamp(30px, 6vh, 60px);
          height: clamp(30px, 6vh, 60px);
        }
        
        /* Title - scales with viewport */
        .payment-success-title {
          font-size: clamp(1.25rem, 4vw, 3rem);
          line-height: 1.2;
          margin-bottom: clamp(0.25rem, 1vh, 0.5rem);
        }
        
        /* Subtitle - scales with viewport */
        .payment-success-subtitle {
          font-size: clamp(0.875rem, 2.5vw, 1.5rem);
          margin-bottom: clamp(0.5rem, 2vh, 1rem);
        }
        
        /* Card - scales with viewport */
        .payment-success-card {
          width: 100%;
          max-width: clamp(280px, 90vw, 600px);
          padding: clamp(0.75rem, 3vh, 1.5rem);
          margin-bottom: clamp(0.5rem, 2vh, 1rem);
        }
        
        /* Order number section */
        .payment-success-order-number {
          margin-bottom: clamp(0.5rem, 2vh, 1rem);
        }
        
        .payment-success-label {
          font-size: clamp(0.625rem, 1.5vw, 0.875rem);
          margin-bottom: clamp(0.25rem, 0.5vh, 0.5rem);
        }
        
        .payment-success-order-value {
          font-size: clamp(1.5rem, 5vw, 3.5rem);
          line-height: 1.1;
        }
        
        /* Total section */
        .payment-success-total-section {
          padding-top: clamp(0.5rem, 2vh, 1rem);
          margin-bottom: clamp(0.5rem, 2vh, 1rem);
        }
        
        .payment-success-total {
          font-size: clamp(1.25rem, 4vw, 3rem);
          line-height: 1.1;
        }
        
        /* Info message */
        .payment-success-info {
          padding: clamp(0.5rem, 2vh, 1rem);
          margin-top: clamp(0.5rem, 2vh, 1rem);
        }
        
        .payment-success-info-text {
          font-size: clamp(0.625rem, 1.5vw, 0.875rem);
          line-height: 1.4;
        }
        
        /* Actions */
        .payment-success-actions {
          width: 100%;
          max-width: clamp(280px, 90vw, 600px);
          gap: clamp(0.25rem, 1vh, 0.5rem);
        }
        
        .payment-success-button {
          font-size: clamp(0.875rem, 2.5vw, 1.25rem);
          padding: clamp(0.5rem, 2vh, 0.75rem) clamp(1rem, 4vw, 2rem);
        }
        
        .payment-success-button-icon {
          width: clamp(1rem, 3vw, 1.5rem);
          height: clamp(1rem, 3vw, 1.5rem);
        }
        
        .payment-success-redirect-text {
          font-size: clamp(0.625rem, 1.5vw, 0.875rem);
          text-align: center;
        }
        
        /* Ensure no overflow on any screen */
        @media (max-height: 600px) {
          .payment-success-content {
            gap: 0.25rem;
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
          }
          .payment-success-icon {
            height: 50px;
            margin-bottom: 0.25rem;
          }
          .success-icon-wrapper,
          .success-icon-container {
            width: 50px;
            height: 50px;
            min-width: 50px;
            min-height: 50px;
          }
          .success-icon-inner {
            width: 25px;
            height: 25px;
          }
        }
      `}</style>
    </div>
  );
};

export default PaymentSuccess;

