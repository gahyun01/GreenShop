import { useNavigate } from "react-router-dom";
import React from "react";

const MainTitle = () => {
  const navigate = useNavigate();
  return (
    <p className="flex justify-center pb-12" href="index.html" onClick={() => {
      navigate("/");
    }}>
      <span style={{ fontFamily: 'dattebayo' }} className="text-[80px] pl-10 relative font-bold text-green-900 m-0 text-TGreen">
        GreenShop
      </span>
    </p>
  );
}

export default MainTitle;