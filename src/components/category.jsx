import React from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  return (
    // 메뉴
    <nav className="flex justify-center items-center relative m-0 p-0 cursor-pointer">
      <ul className="flex relative items-center">
        <li className="pt-10 relative float-left text-sm">
          <a className=" gr p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline rounded-full hover:bg-green-900 text-white underline">아우터</a>
          <ul className="sub">
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">가디건/조끼</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">야상/점퍼</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">자켓/코트</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">패딩</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">플리스</a></li>
          </ul>
        </li>
        <li className="top">
          <a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">상의</a>
          <ul className="sub">
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">긴팔티셔츠</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">맨투맨</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">후드</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">반팔/민소매티셔츠</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">니트</a></li>
          </ul>
        </li>
        <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">셔츠/블라우스</a></li>
        <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">트레이닝</a></li>
        <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">베이직</a></li>
        <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">피스</a></li>
        <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">커트</a></li>
        <li className="top">
          <a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">팬츠</a>
          <ul className="sub">
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">청바지</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">면바지</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">슬랙스</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">와이드팬츠</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">숏팬츠</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">조거팬츠</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">기장별</a></li>
          </ul>
        </li >
        <li className="top">
          <a>가방</a>
          <ul className="sub">
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">백팩/스쿨백</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">크로스/토트백</a></li>
          </ul>
        </li >
        <li className="top">
          <a>신발</a>
          <ul className="sub">
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">운동화/단화</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">구두/워커</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">샌들/슬리퍼/장화</a></li>
          </ul>
        </li >
        <li className="top">
          <a>악세서리</a>
          <ul className="sub">
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">주얼리</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">패션소품</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">양말/스타킹</a></li>
            <li><a className="p-2 no-underline text-black bg-orange-200 font-bold rounded-full hover:bg-green-900 text-white underline">헤어액세서리</a></li>
          </ul>
        </li >
      </ul >
      <ul className="cateogry">
        <li className="c3"></li>
      </ul>
    </nav>
  );
}