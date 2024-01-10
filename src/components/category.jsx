import React from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  return (
    // 메뉴
    <nav className="flex justify-center items-center relative m-0 p-0 cursor-pointer">
      <ul className="flex relative items-center">
        <li className="pt-10 relative float-left text-sm">
          <a className="p-2 no-underline text-black bg-orange-200 font-bold">아우터</a>
          <ul className="sub">
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold">가디건/조끼</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold">야상/점퍼</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold">자켓/코트</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold">패딩</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold">플리스</a></li>
          </ul>
        </li>
        <li className="top">
          <a className="p-2 no-underline text-black bg-orange-200 font-bold">상의</a>
          <ul className="sub">
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold">긴팔티셔츠</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold">맨투맨</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold">후드</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold">반팔/민소매티셔츠</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold">니트</a></li>
          </ul>
        </li>
        <li><a >셔츠/블라우스</a></li>
        <li><a>트레이닝</a></li>
        <li><a >베이직</a></li>
        <li><a>피스</a></li>
        <li><a>커트</a></li>
        <li className="top">
          <a>팬츠</a>
          <ul className="sub">
            <li><a>청바지</a></li>
            <li><a>면바지</a></li>
            <li><a>슬랙스</a></li>
            <li><a>와이드팬츠</a></li>
            <li><a>숏팬츠</a></li>
            <li><a>조거팬츠</a></li>
            <li><a>기장별</a></li>
          </ul>
        </li >
        <li className="top">
          <a>가방</a>
          <ul className="sub">
            <li><a>백팩/스쿨백</a></li>
            <li><a>크로스/토트백</a></li>
          </ul>
        </li >
        <li className="top">
          <a>신발</a>
          <ul className="sub">
            <li><a>운동화/단화</a></li>
            <li><a>구두/워커</a></li>
            <li><a>샌들/슬리퍼/장화</a></li>
          </ul>
        </li >
        <li className="top">
          <a>악세서리</a>
          <ul className="sub">
            <li><a>주얼리</a></li>
            <li><a>패션소품</a></li>
            <li><a>양말/스타킹</a></li>
            <li><a>헤어액세서리</a></li>
          </ul>
        </li >
      </ul >
      <ul className="cateogry">
        <li className="c3"></li>
      </ul>
    </nav>
  );
}