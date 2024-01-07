import React from "react";
import '../css/card.css';
import CardIcon from '../assets/icon/card.svg';

export default function Card() {
  return (
    // < !--상품 카드-- >
    <div class="product-box">
      <ul class="item">
        <li>
          <div class="item-image">
            <a href="/shop/view.php?index_no=321416" class="image">
              <img src="https://img.sonyunara.com/files/goods/321416/1678954898_5.gif.webp"
                alt="[MADE/기장별,뱃살커버]인생핏 트레이닝 롱일자 밴딩팬츠 숏/기본/롱" />
              {/* <!-- 					<img class="list_show_icon" src="https://img.sonyunara.com/2020/icon/best_icon.png" alt=""> --> */}
            </a>
            <a href="javascript:" class="good " onclick=" GoodsProc.new_set_wish_single(321416);">
              {/* <!-- 				<i class="fa fa-heart"></i> --> */}
            </a>

          </div>
          <div class="item-content">
            <div class="info">
              <div class="pull-left"></div>
              <div class="pull-right flex gap-1">
                <img src={CardIcon} alt="card" />
                오늘출발
              </div>
            </div>
            <div class="subject">
              <a href="/shop/view.php?index_no=321416">[MADE/기장별,뱃살커버]인생핏 트레이닝 롱일자 밴딩팬츠 숏/기본/롱</a>
            </div>
            <div class="info">
              <div class="pull-left">
                <span class="span">46<em>%</em></span> <span class="span1">15,900</span>
              </div>
            </div>
            <div class="txt">
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}