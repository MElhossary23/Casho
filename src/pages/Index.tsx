
import React from 'react';
import Header from '@/components/Header';
import Card from '@/components/Card';
import FooterNav from '@/components/FooterNav';
import { useLocation } from 'react-router-dom';

// Mock data for the services
const services = [
  { id: 1, name: 'Monilix Max', logo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/6178882f25064a4ab4c6a233/0x0.png' },
  { id: 2, name: 'Torox', logo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/6565ae1ff7fc2e73d9cd3925/0x0.png' },
  { id: 3, name: 'Hang My Ads', logo: 'https://pbs.twimg.com/media/F-BDmYRWEAAk5dS.jpg' },
  { id: 4, name: 'Farly', logo: 'https://s3.sa-east-1.amazonaws.com/remotar-assets-prod/company-profile-pictures/clhj7auxt008102x0dpi9a26y.jpeg' },
  { id: 5, name: 'AdGatemedia', logo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/5bddd30afbd6140001fa4ffb/0x0.png' },
  { id: 6, name: 'lootably', logo: 'https://ptcbestmaker.com/image/cache/catalog/addons/Lootably-500x500.png' },
  { id: 7, name: 'TplayAD', logo: 'https://www.earntg.com/storage/assets/images/offerwalls/88rV6pK9v6EyVGY4wqNa6t06OXEHObJbVBlMvALO.png' },
  { id: 8, name: 'TaskWall', logo: 'https://img.atom.com/story_images/visual_images/1719825170-TaskWall2-100.jpg?class=show' },
  { id: 9, name: 'Monilix', logo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/6178882f25064a4ab4c6a233/0x0.png' },
  { id: 10, name: 'UPwall', logo: 'https://upwall.net/uploads/1737585163.png' },
  { id: 11, name: 'offery', logo: 'https://offery.io/assets/img/logo.png' },
  { id: 12, name: 'ADbreak', logo: 'https://wall.adbreakmedia.com/horizontal_blue_logo.svg' },
];
const Index: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen pb-20 bg-purple-gradient">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              logo={service.logo} 
              name={service.name}
              delay={index * 100}
            />
          ))}
        </div>
      </main>
      
      <FooterNav currentPath={location.pathname} />
    </div>
  );
};

export default Index;
