import React from "react";
import { useState } from "react";
import TruckdIcon from "../assets/icon/truck.svg";
import heart from "../assets/icon/heart.svg";
import eheart from "../assets/icon/eheart.svg";
import '../css/checkbox.css';

export default function Card() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    // 상품 카드
    <div className="pt-10 pl-12 pr-12">
      <ul className="mt-0 pt-8 block overflow-x-hidden -mb-16 text-{0px}">
        <li className="inline-block pl-0 align-top tracking-normal text-xs mb-16 p-2 items-center w-60 mr-4 ">
          <div className=" block relative w-full h-auto overflow-hidden mb-2 max-w-xs max-h-80 transform -translate-x-1/2 left-1/2 ml-1 p-2">
            <a
              className="text-gray-600 no-underline bg-transparent"
              href="/shop/view.php?index_no=321416" style={{ position: 'relative' }}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <input type="checkbox" className="z-10 absolute left-1 top-1" id="Ckbox" />
              {/* <Checkbox
                checked={true}
                style={{ backgroundColor: '#f2f2f2', color: '#900', borderRadius: 5 }}
                onChange={(name, checked) => _myFunction(name, checked)} /> */}
              <img
                className="w-full h-full object-cover"
                src="https://img.sonyunara.com/files/goods/321416/1678954898_5.gif.webp"
                alt="[MADE/기장별,뱃살커버]인생핏 트레이닝 롱일자 밴딩팬츠 숏/기본/롱"
              />
            </a>
          </div>
          <div className="text-{5px}">
            <div className="pt-1 text-xs whitespace-no-wrap overflow-hidden text-gray-600 pb-4 truncate">
              <a
                class=" no-underline bg-transparent overflow-hidden whitespace-nowrap inline-block relative ml-1 mr-1"
                href="/shop/view.php?index_no=321416"
              >
                [MADE/기장별,뱃살커버]인생핏 트레이닝 롱일자 밴딩팬츠 숏/기본/롱
              </a>
            </div>
            <div className="flex justify-center float-right mt-0 items-end">
              <span
                style={{ color: "#ff5252" }}
                className="pl-2 font-bold mb-1"
              >
                46%
              </span>{" "}
              <span className="pl-2 text-lg font-bold">15,900</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
