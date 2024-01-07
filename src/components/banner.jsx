import React from "react";
import SearchIcon from '../assets/icon/search.svg';
import PersonIcon from '../assets/icon/person.svg';
import ShopCartIcon from '../assets/icon/shopcart.svg';
import WishlistIcon from '../assets/icon/wishlist.svg';
import { useNavigate } from "react-router-dom";

export default function Card() {
  const navigate = useNavigate();
  return (
    <header>
      {/* <!-- 네비게이션 정의 --> */}
      <nav className="relative flex flex-wrap items-center justify-between p-0 flex-col">
        {/* <!-- 로고 클릭시 index로 이동 --> */}
        <p className="flex justify-center pb-12" href="index.html" onClick={() => {
          navigate("/");
        }}>
          <span style={{ fontFamily: 'dattebayo' }} className="text-[80px] pl-10 relative font-bold text-green-900 m-0 text-TGreen">
            GreenShop
          </span>
        </p>

        {/* <!-- 상단 바 --> */}
        <div className="flex items-center pl-12 pb-5 float-right w-full">
        </div>
        <div className="flex items-center pl-12 pb-5 float-right w-full">
          {/* 검색창 */}
          <div className="flex overflow-hidden bg-white border-2 border-solid border-mustardYellow rounded-lg p-4 w-300">
            <input type="text" className="bg-orange-100 p-2 text-sm w-full border-none" />
            <button className="bg-orange-100 text-white p-2 cursor-pointer text-sm border-none w-30">
              <img src={SearchIcon} alt="search" />
            </button>
          </div>

          {/* 로그인, 장바구니, 하트누른 상품 */}
          <ul className="flex items-center p-2 m-0 justify-end absolute list-none right-50">
            <li onclick="window.location.href='Login.html'">
              <img src={PersonIcon} alt="person" />
              <strong>로그인</strong>
            </li>

            <li className="ml-23" onclick="window.location.href='Cart.html'">
              <img src={ShopCartIcon} alt="shopcart" />
              <strong>장바구니</strong>
            </li>

            <li className="ml-23" onclick="window.location.href='Wishlist.html'">
              <img src={WishlistIcon} alt="wishlist" />
              <strong>좋아요</strong>
            </li >

            <li className="ml-23" onclick="window.location.href='AI.html'">
              <img src="img/ai.png" alt="ai" />
              <strong>AI추천</strong>
            </li >
          </ul >
        </div >
      </nav>
    </header>
  );
}