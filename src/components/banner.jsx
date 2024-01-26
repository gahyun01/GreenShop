import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import SearchIcon from "../assets/icon/search.svg";
import PersonIcon from "../assets/icon/person.svg";
import LPersonIcon from "../assets/icon/lPerson.svg";
import ShopCartIcon from "../assets/icon/shopcart.svg";
import WishlistIcon from "../assets/icon/wishlist.svg";
import Ai from "../assets/icon/ai.svg";
import '../css/banner.css';

const Banner = ({ hasLogin, setHasLogin }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center pb-5 float-right w-4/5">

      {/* 검색창 */}
      <div className="search-container">
        <input type="text" className="search-box" />
        <button className="search-button">
          <img src={SearchIcon} alt="search" />
        </button>
      </div>

      {/* 로그인, 장바구니, 위시리스트, ai추천 */}

      <ul className="mymenu">

        {hasLogin ? (
          <Link to="/MyPage">
            <li style={{ marginLeft: '23px' }}>
              <img className=" w-10 h-10" src={LPersonIcon} alt="lPerson" />
              <strong>마이페이지</strong>
            </li>
          </Link>
        ) : (
          <Link to="/Login">
            <li style={{ marginLeft: '30px' }}>
              <img className=" w-10 h-10" src={PersonIcon} alt="person" style={{ paddingLeft: '5px' }} />
              <strong>로그인</strong>
            </li>
          </Link>
        )}

        <Link to="/Cart">
          <li style={{ marginLeft: '23px' }}>
            <div className="pl-1">
              <img className=" w-10 h-10" src={ShopCartIcon} alt="shopcart" style={{ paddingLeft: '5px' }} />
            </div>
            <strong>장바구니</strong>
          </li>
        </Link>

        <Link to="/Wishlist">
          <li style={{ marginLeft: '23px' }}>
            <img className=" w-10 h-10" src={WishlistIcon} alt="wishlist" style={{ paddingLeft: '3px' }} />
            <strong>좋아요</strong>
          </li>
        </Link>

        <Link to="/Ai">
          <li style={{ marginLeft: '23px' }}>
            <img className=" w-10 h-10" src={Ai} alt="ai" />
            <strong>AI추천</strong>
          </li >
        </Link>
      </ul >
    </div >
  );
}

export default Banner;