import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import Screenshot from '../components/Screenshot';
import Architecture from '../components/Architecture';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Layout>
      <div className="font-display antialiased">
        <Hero />
        <Screenshot />
        <Architecture />
        <Footer />
      </div>
    </Layout>
  );
}
