
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileFixedCTA from '@/components/MobileFixedCTA';

type PageLayoutProps = {
  children: React.ReactNode;
  showDownload?: boolean;
};

const PageLayout = ({ children, showDownload = true }: PageLayoutProps) => {
  const location = useLocation();

  // Effect to scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-0 bg-white w-full max-w-[100vw] overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
      <MobileFixedCTA />
    </div>
  );
};

export default PageLayout;
