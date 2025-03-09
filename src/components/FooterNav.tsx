
import React from 'react';
import { Home, User, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, isActive }) => {
  return (
    <Link to={to} className={cn("nav-btn", isActive && "active")}>
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

const FooterNav: React.FC<{ currentPath: string }> = ({ currentPath }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-panel border-t border-purple-500/30 flex justify-around py-1 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
      <NavItem 
        icon={<Home className="w-6 h-6" />} 
        label="Home" 
        to="/" 
        isActive={currentPath === '/'}
      />
      <NavItem 
        icon={<div className="relative">
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center text-xs">+</div>
          <User className="w-6 h-6" />
        </div>} 
        label="Profile" 
        to="/profile" 
        isActive={currentPath === '/profile'}
      />
      <NavItem 
        icon={<CreditCard className="w-6 h-6" />} 
        label="Cards" 
        to="/cards" 
        isActive={currentPath === '/cards'}
      />
      <NavItem 
        icon={<User className="w-6 h-6" />} 
        label="Account" 
        to="/account" 
        isActive={currentPath === '/account'}
      />
    </nav>
  );
};

export default FooterNav;
