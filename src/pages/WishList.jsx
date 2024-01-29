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
      <h3 className=" mt-12 flex">좋아요</h3>
      <Wcard />
      <form className="space-y-4 flex flex-col w-3/4 mx-auto mt-8 mb-10 mb-9">
        <button type="submit" className="text-white bg-TGreen hover:bg-mustardYellow focus:ring-4 focus:outline-none focus:ring-mustardYellow rounded-lg w-full sm:w-auto px-5 py-2.5 text-center font-bold" style={{ color: 'white' }}>로그인</button>
      </form>
    </div>
  );
}
