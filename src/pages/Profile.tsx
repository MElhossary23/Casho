
import React from 'react';
import Header from '@/components/Header';
import FooterNav from '@/components/FooterNav';
import { useLocation } from 'react-router-dom';

const Profile: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen pb-20 bg-purple-gradient">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="glass-panel rounded-2xl p-6 animate-fade-in-up">
          <h1 className="text-2xl font-bold mb-4 neon-text">Profile</h1>
          <p className="text-white/80">Your profile information will appear here.</p>
        </div>
      </main>
      
      <FooterNav currentPath={location.pathname} />
    </div>
  );
};

export default Profile;
