import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className=" pt-11">
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
        </nav>
      </header>
    </div>
  )
}