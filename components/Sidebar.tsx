import React, { useRef, useEffect } from 'react';
import { CATEGORIES } from '../constants';

interface SidebarProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onSelectCategory }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const activeButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll to active category when it changes
  useEffect(() => {
    if (activeButtonRef.current && sidebarRef.current) {
      const button = activeButtonRef.current;
      const sidebar = sidebarRef.current;
      const buttonTop = button.offsetTop;
      const buttonHeight = button.offsetHeight;
      const sidebarHeight = sidebar.clientHeight;
      const scrollTop = sidebar.scrollTop;

      // Check if button is not fully visible
      if (buttonTop < scrollTop) {
        // Scroll to top of button
        sidebar.scrollTo({ top: buttonTop - 8, behavior: 'smooth' });
      } else if (buttonTop + buttonHeight > scrollTop + sidebarHeight) {
        // Scroll to show bottom of button
        sidebar.scrollTo({ top: buttonTop - sidebarHeight + buttonHeight + 8, behavior: 'smooth' });
      }
    }
  }, [activeCategory]);

  return (
    <div className="relative w-full h-full bg-gray-100 overflow-hidden">
      {/* Scrollable sidebar container */}
      <div 
        ref={sidebarRef}
        className="w-full h-full flex flex-col px-0.5 sm:px-1 md:px-1.5 lg:px-2 py-1 sm:py-1.5 md:py-2 lg:py-2.5 gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5 overflow-y-auto scroll-smooth no-scrollbar"
      >
      {CATEGORIES.map((category, index) => {
        const isActive = activeCategory === category.id;
        
        return (
          <button
            key={category.id}
            ref={isActive ? activeButtonRef : null}
            onClick={() => onSelectCategory(category.id)}
            className={`
              w-full flex flex-col items-center justify-center rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl
              transition-all duration-300 ease-out
              relative group overflow-hidden flex-shrink-0
              ${isActive 
                ? 'min-h-[50px] sm:min-h-[58px] md:min-h-[66px] lg:min-h-[74px] xl:min-h-[82px] 2xl:min-h-[90px] bg-white shadow-[0_2px_12px_rgba(255,188,13,0.4)] ring-1 sm:ring-2 ring-[#ffbc0d] z-10' 
                : 'min-h-[45px] sm:min-h-[52px] md:min-h-[60px] lg:min-h-[68px] xl:min-h-[76px] 2xl:min-h-[84px] bg-white/70 hover:bg-white/95 shadow-sm border border-transparent opacity-80 hover:opacity-100'
              }
            `}
            style={{
              animation: isActive ? 'pulseActive 2s ease-in-out infinite' : undefined
            }}
          >
            {/* Active indicator glow effect */}
            {isActive && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffbc0d]/15 to-transparent rounded-md sm:rounded-lg md:rounded-xl pointer-events-none" />
            )}
            
            {/* Image Container - Fixed responsive sizing for all items */}
            <div className="flex-1 w-full flex items-center justify-center transition-all duration-300 relative z-10"
            style={{ minHeight: 0, flex: '1 1 auto', padding: '4px' }}
            >
              <div className="sidebar-image-container">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className={`
                    transition-all duration-300 filter will-change-transform
                    sidebar-image
                    ${isActive 
                      ? 'drop-shadow-md brightness-105' 
                      : 'drop-shadow-sm brightness-95 group-hover:brightness-100'
                    }
                  `}
                  loading="lazy"
                  onError={(e) => {
                      e.currentTarget.src = 'https://placehold.co/100x100/f3f4f6/a3a3a3?text=Img';
                  }}
                />
              </div>
            </div>
            
            {/* Category Name - Responsive text sizing */}
            <div className="w-full transition-all duration-300 flex items-center justify-center z-10 flex-shrink-0 pb-1 sm:pb-1.5 md:pb-2 opacity-70 group-hover:opacity-100"
            style={{ flex: '0 0 auto', minHeight: '20px' }}
            >
                 <span className={`
                    block text-center leading-tight uppercase tracking-tight w-full px-0.5 sm:px-1
                    transition-all duration-300
                    ${isActive 
                        ? 'text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs font-black text-black opacity-100' 
                        : 'text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px] font-bold text-gray-600 group-hover:text-gray-800'
                    }
                `}>
                {category.name}
                </span>
            </div>
          </button>
        );
      })}
      
      </div>
      
      <style>{`
        @keyframes pulseActive {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(255, 188, 13, 0.4);
          }
          50% {
            box-shadow: 0 6px 25px rgba(255, 188, 13, 0.6);
          }
        }
        
        /* Fixed responsive image container - same size for all items */
        .sidebar-image-container {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .sidebar-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
        
        @media (min-width: 640px) {
          .sidebar-image-container {
            width: 28px;
            height: 28px;
          }
        }
        
        @media (min-width: 768px) {
          .sidebar-image-container {
            width: 32px;
            height: 32px;
          }
        }
        
        @media (min-width: 1024px) {
          .sidebar-image-container {
            width: 36px;
            height: 36px;
          }
        }
        
        @media (min-width: 1280px) {
          .sidebar-image-container {
            width: 40px;
            height: 40px;
          }
        }
        
        @media (min-width: 1536px) {
          .sidebar-image-container {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </div>
  );
};

export default Sidebar;