import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Hamburger, Location, Logo } from "../../assets/svg";
import { HamburgerMenu } from "./HamburgerMenu";

export const MainHeader = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleHambugerMenu = () => {
    if (openMenu) {
      setIsClosing(true);
      setTimeout(() => {
        setOpenMenu(false);
        setIsClosing(false);
      }, 300);
    } else {
      setOpenMenu(true);
    }
  };

  return (
    <div className="w-full h-full flex justify-center  gap-6 border-b-2 border-gray-300 pb-4">
      <Logo width={"47px"} onClick={() => navigate("/")} />
      <div className="w-[219px] h-10 bg-gray-200 flex gap-2 rounded-5 px-3 py-2">
        <Location width={"16px"} />
        <input
          type="text"
          className="w-full bg-transparent text-13px text-gray-500"
          placeholder={localStorage.getItem("address_name") || "중구 필동로 123번지"}
          onClick={() => navigate("/set-location")}
        />
      </div>
      <Hamburger width={"26px"} onClick={toggleHambugerMenu} className="cursor-pointer" />

      {/* 햄버거 메뉴 전체 div */}
      {openMenu && <HamburgerMenu onClick={toggleHambugerMenu} isClosing={isClosing} />}
    </div>
  );
};
