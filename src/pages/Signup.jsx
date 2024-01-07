import React, { useState } from 'react';
import Header from '../components/header';
import '../css/ls.css';

export default function Signup() {
  const [Signup, setSignup] = useState(false);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Header />
      {Signup ?
        // < !--회원가입 완료 -->
        <div className="flex justify-center relative">
          <div className="block mt-12 absolute w-4/5 border-t-2 border-solid border-mustardYellow -z-10"></div>
          <li className="block mt-20" onclick="window.location.href='Wishlist.html'" style={{ marginLeft: '23px' }}><svg
            xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
            <g fill="none" stroke="#305440" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5">
              <circle cx="12" cy="12" r="9"></circle>
              <path d="m15 10l-4 4l-2-2"></path>
            </g>
          </svg></li>
          <strong>회원가입 완료</strong>
        </div>
        :
        <div class="Mem">
          <h2>회원가입</h2>
          <div class="MemSet">
            <label for="username">ID 입력 </label>
            <input type="text" id="username" name="username" />
            <button type="button" id="checkUsername"> 중복 확인 </button>
            <div class="SS"></div>
            <label for="password">비밀번호 입력</label>
            <input type="password" id="password" name="password" />
            <div class="MS"></div>
            <label for="password">비밀번호 확인 </label>
            <input type="password" id="password" name="password" />
            <div class="SS"></div>
            <label for="password">이메일 </label>
            <input type="password" id="password" name="password" />
            <div class="MS"></div>
            <label for="password">이메일 확인 </label>
            <input type="password" id="password" name="password" />
            <div class="SS"></div>
            <label for="password">이름 </label>
            <input type="password" id="password" name="password" />
            <div class="MS"></div>
            <label for="password">생년월일 ( 6자리 ) </label>
            <input type="password" id="password" name="password" />

            <div class="SS"></div>
            <label for="password">성별 선택</label>
            <form>
              <label>
                <input type="radio" name="gender" value="male" />
                남자
              </label>

              <label>
                <input type="radio" name="gender" value="female" />
                여자
              </label>

              <label>
                <input type="radio" name="gender" value="other" />
                선택안함
              </label>
            </form>

            <div class="SS"></div>
            <label for="password">전화번호</label>
            <input type="password" id="password" name="password" />
            <div class="MS"></div>
            <label for="password">전화번호 확인 </label>
            <input type="password" id="password" name="password" />
          </div>
          <div class="SS"></div>
          <div class="BtnI">
            <button type="button" id="cancelButton">취소</button>
            <button type="submit" id="submitButton">회원가입</button>
          </div>
          <div class="SS"></div>
        </div>
      }
    </div>
  );
}
