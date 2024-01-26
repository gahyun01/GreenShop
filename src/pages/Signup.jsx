import React from "react";
import { useState } from "react";
import Header from "../components/header";
import Check from '../assets/icon/check.svg';

export default function Sing() {
  const [hasSignup, setHasSignup] = useState(false);
  return (
    <div className='flex justify-center items-center flex-col'>
      <Header />
      <div className="mt-14" style={{ width: '80%', borderBottom: '2px solid #d9ce94' }}> </div>
      {hasSignup ? (
        <div className="MCompletion">
          <div className="separator"></div>
          <li
            className="MC"
            style={{ marginLeft: '23px' }}
          >
            <img src={Check} alt="Check" />
          </li>
          <strong>회원가입 완료</strong>
        </div>
      ) : (
        <>
          <div className="flex justify-center flex-col items-center w-2/4">
            <div className="container mx-auto mt-28 mb-28 p-5 border border-mustardGray rounded shadow-lg bg-white">
              <h1 className="text-2xl font-bold mb-5">회원가입</h1>
              <form id="signup-form" className="space-y-4 flex flex-col w-4/5 mx-auto mt-8 mb-10">
                <div>
                  <label htmlFor="signup-id" className="block mb-2 text-sm font-bold text-gray-700">ID 입력 :</label>
                  <input type="text" id="signup-id" name="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                </div>
                <div>
                  <label htmlFor="signup-pw" className="block mb-2 text-sm font-bold text-gray-700">비밀번호 입력 :</label>
                  <input type="text" id="signup-pw" name="pw" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                </div>
                <div>
                  <label htmlFor="signup-pwcheck" className="block mb-2 text-sm font-bold text-gray-700">비밀번호 확인 :</label>
                  <input type="text" id="signup-pwcheck" name="pwcheck" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                </div>
                <div>
                  <label htmlFor="signup-email" className="block mb-2 text-sm font-bold text-gray-700">이메일 :</label>
                  <div className='flex'>
                    <input type="text" id="signup-email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                    <button type="submit" className="text-white bg-TGreen hover:bg-mustardYellow focus:ring-4 focus:outline-none focus:ring-mustardYellow rounded-lg w-full sm:w-auto px-5 py-2.5 text-center font-bold text-sm whitespace-nowrap ml-3" style={{ color: 'white' }}>인증번호 받기</button>
                  </div>
                </div>
                <div>
                  <label htmlFor="signup-emailcheck" className="block mb-2 text-sm font-bold text-gray-700">인증번호 :</label>
                  <input type="text" id="signup-emailcheck" name="emailcheck" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5 mb-10" />
                </div>
                <div>
                  <label htmlFor="signup-name" className="block mb-2 text-sm font-bold text-gray-700">이름 :</label>
                  <input type="text" id="signup-name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                </div>
                <div>
                  <label htmlFor="signup-birth" className="block mb-2 text-sm font-bold text-gray-700">생년월일 ( 6자리 ) :</label>
                  <input type="text" id="signup-birth" name="birth" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                </div>
                <label htmlFor="signup-gender" className="block mb-2 text-sm font-bold text-gray-700">성별 :</label>
                <div className="flex gap-20 p-3">
                  <label>
                    <input type="radio" name="gender" value="MALE" />
                    남자
                  </label>

                  <label>
                    <input type="radio" name="gender" value="FEMALE" />
                    여자
                  </label>
                </div>
                <label htmlFor="signup-phon" className="block mb-2 text-sm font-bold text-gray-700">전화번호 :</label>
                <div className='flex'>
                  <input type="text" id="signup-phon" name="phon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                  <button type="submit" className="text-white bg-TGreen hover:bg-mustardYellow focus:ring-4 focus:outline-none focus:ring-mustardYellow rounded-lg w-full sm:w-auto px-5 py-2.5 text-center font-bold text-sm whitespace-nowrap ml-3" style={{ color: 'white' }}>인증번호 받기</button>
                </div>
                <div>
                  <label htmlFor="signup-phoncheck" className="block mb-2 text-sm font-bold text-gray-700">전화번호 확인 :</label>
                  <input type="text" id="signup-phoncheck" name="phoncheck" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5 mb-10" />
                </div>
                <button type="submit" className="text-white bg-TGreen hover:bg-mustardYellow focus:ring-4 focus:outline-none focus:ring-mustardYellow rounded-lg sm:w-auto px-5 py-2.5 text-center font-bold w-full" style={{ color: 'white' }}>회원가입</button>
              </form>
            </div >
          </div >
        </>
      )
      }
    </div >
  );
}