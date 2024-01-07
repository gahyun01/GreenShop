import React from 'react';
import Header from '../components/header';
import Card from '../components/card';

export default function Home() {
  return (
    <div className="flex justify-center items-center font-bold text-lg">
      <Header />
      <Card />
    </div>
  );
}
