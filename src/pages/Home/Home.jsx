import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import HowItWorks from './components/HowItWorks/HowItWorks';
import OurServices from './components/OurServices/OurServices';

const Home = () => {
  return (
    <div className="space-y-20">
      <title>ZapShift | Fast & Reliable Parcel Delivery Service</title>

      {/* Hero Section */}
      <section>
        <HeroSection />
      </section>

      {/* How It Works Section */}
      <section>
        <HowItWorks />
      </section>

      {/* Our Services Section */}
      <section>
        <OurServices />
      </section>
    </div>
  );
};

export default Home;
