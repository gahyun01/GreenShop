import React from "react";
import SearchIcon from "../assets/icon/search.svg";
import PersonIcon from "../assets/icon/person.svg";
import ShopCartIcon from "../assets/icon/shopcart.svg";
import WishlistIcon from "../assets/icon/wishlist.svg";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center pb-5 float-right w-4/5 justify-between">
      {/* 검색창 */}
      <div className="flex overflow-hidden border-2 border-solid border-mustardYellow rounded-lg w-300">
        <input
          type="text"
          style={{ backgroundColor: "#fffbe0" }}
          className="p-2 text-sm w-full border-none"
        />
        <button className="text-white p-2 cursor-pointer text-sm border-none w-30">
          <img src={SearchIcon} alt="search" />
        </button>
      </div>

      {/* 로그인, 장바구니, 하트누른 상품 */}
      <ul className="flex items-center p-2 m-0 justify-end list-none right-50 gap-2">
        <li
          className="flex justify-end content-start flex-col"
          onclick="window.location.href='Login.html'"
        >
          <img src={PersonIcon} alt="person" />
          <strong>로그인</strong>
        </li>

        <li
          className="flex justify-end content-start flex-col"
          onclick="window.location.href='Cart.html'"
        >
          <img src={ShopCartIcon} alt="shopcart" />
          <strong>장바구니</strong>
        </li>

        <li
          className="flex justify-end content-start flex-col"
          onclick="window.location.href='Wishlist.html'"
        >
          <img src={WishlistIcon} alt="wishlist" />
          <strong>좋아요</strong>
        </li>

        <li
          className="flex justify-end content-start flex-col"
          onclick="window.location.href='AI.html'"
        >
          <img src="img/ai.png" alt="ai" />
          <strong>AI추천</strong>
        </li>
      </ul>
    </div>
  );
}
