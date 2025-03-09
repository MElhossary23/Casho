
import React from 'react';
import { Bell, Coins } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between animate-fade-in-up">
      <div className="flex items-center glass-panel py-2 px-4 rounded-full">
        <Coins className="w-5 h-5 text-neon-yellow animate-pulse-neon mr-2" />
        <span className="font-bold text-white">0</span>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="relative">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/596e2d5846c3c47ac18ef1df/1501001088287-QHECN6WLVD1I02GQYYCX/Cashio---New-Logo.png" 
            alt="CashIo" 
            className="h-16 object-contain animate-pulse-neon"
          />
          <div className="absolute -inset-2 bg-glow-radial -z-10 animate-glow opacity-70"></div>
        </div>
      </div>

      <div className="glass-panel p-3 rounded-full">
        <Bell className="w-5 h-5 text-white" />
      </div>
    </header>
  );
};

export default Header;
