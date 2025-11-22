import React from 'react';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import OurServices from './components/OurServices/OurServices';
import TrustedBy from './components/TrustedBy/TrustedBy';

const Home = () => {
  return (
    <div className="space-y-20">
      <title>ZapShift | Fast & Reliable Parcel Delivery Service</title>

      {/* Hero Section */}
      <section>
        <Hero />
      </section>

      {/* How It Works Section */}
      <section>
        <HowItWorks />
      </section>

      {/* Our Services Section */}
      <section>
        <OurServices />
      </section>

      {/* Trusted By Section */}
      <section>
        <TrustedBy />
      </section>
    </div>
  );
};

export default Home;
