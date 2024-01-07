import React from 'react';

import Banner from '../components/banner';
import Card from '../components/card';

export default function Home() {
  return (
    <div className="flex justify-center items-center font-bold text-lg">
      <Banner />
      <Card />
    </div>
  );
}
