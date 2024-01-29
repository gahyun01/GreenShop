import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Wcard from '../components/wcard';

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // 위시리스트 아이템을 불러오는 로직 (예: API 호출)
  }, []);

  return (
    <div className='flex justify-center items-center flex-col'>
      <Header />
      <div className="mt-14" style={{ width: '80%', borderBottom: '2px solid #d9ce94' }}> </div>
      <h3 className="tit">좋아요</h3>
      <Wcard />
    </div>
  );
}
