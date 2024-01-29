import React, { useState } from 'react';
import Header from '../components/header';
import { Link } from 'react-router-dom';
import Check from '../assets/icon/check.svg';

export default function Login() { // 로그인 페이지
  const [hasLogin, setHasLogin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: 로그인 처리 로직
    setHasLogin(true);
  };

  return (
    <div className='flex justify-center items-center flex-col'>
      <Header />
      <div className="mt-14" style={{ width: '80%', borderBottom: '2px solid #d9ce94' }}> </div>
      {hasLogin ? (
        <div className="MCompletion">
          <div className="separator"></div>
          <li
            className="MC"
            style={{ marginLeft: '23px' }}
          >
            <img src={Check} alt="Check" />
          </li>
          <strong>로그인 완료</strong>
        </div>
      ) : (
        <>
          <div className="flex justify-center flex-col items-center w-3/5">
            <div className="flex flex-col w-3/5 container mx-auto mt-28 mb-28 p-5 border border-mustardGray rounded shadow-lg bg-white">
              <h1 className="text-2xl font-bold mb-5">로그인</h1>
              <form id="login-form" onSubmit={handleLogin} className="space-y-4 flex flex-col w-3/4 mx-auto mt-8 mb-10">
                <div>
                  <label htmlFor="login-id" className="block mb-2 text-sm font-bold text-gray-700">ID</label>
                  <input type="text" id="login-id" name="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                </div>
                <div>
                  <label htmlFor="login-pw" className="block mb-2 text-sm font-bold text-gray-700">PW</label>
                  <input type="text" id="login-pw" name="pw" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mustardYellow focus:border-mustardYellow block w-full p-2.5" />
                  <div className="MS"></div>
                </div>
                <div className='flex justify-center pt-5 gap-36'>
                  <div className='flex mx-auto gap-1 whitespace-nowrap'>
                    <input type="checkbox" id="myCheckbox1" />
                    <label htmlFor="myCheckbox1">아이디 저장</label>
                  </div>
                  <div className='flex mx-auto gap-1 whitespace-nowrap'>
                    <input type="checkbox" id="myCheckbox2" />
                    <label htmlFor="myCheckbox2">자동로그인</label>
                  </div>
                </div>

                <button type="submit" className="text-white bg-TGreen hover:bg-mustardYellow focus:ring-4 focus:outline-none focus:ring-mustardYellow rounded-lg w-full sm:w-auto px-5 py-2.5 text-center font-bold" style={{ color: 'white' }}>로그인</button>
              </form>
              <div className="mt-3 mx-auto flex max-w-full justify-center gap-64 text-sm whitespace-nowrap">
                <Link to='/Signup' className="text-white">
                  <a>회원가입</a>
                </Link>
                <Link to='/Find' className="text-white">
                  <a>아이디 | 비밀번호 찾기</a>
                </Link>
              </div>

            </div>
          </div>
        </>
      )}
    </div >
  );
}