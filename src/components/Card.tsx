
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  logo: string;
  name: string;
  className?: string;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ logo, name, className, delay = 0 }) => {
  return (
    <div 
      className={cn(
        "card-content animate-fade-in-up min-h-[130px]", 
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 mb-1 flex items-center justify-center animate-float">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="max-w-full max-h-full object-contain"
        />
      </div>
      
      <h3 className="text-lg font-medium text-white mb-2 neon-text">{name}</h3>
      
      <button onClick={handleOpen} className="btn-open text-sm">
        OPEN
      </button>
    </div>
  );
};

export default Card;
