import { FitpassLogo, Password, User, PasswordFocus, UserFocus } from "../../assets/svg";
import InputField from "../Signin/InputField";
import { useState } from "react";


function AdminSignin() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [signinError, setSigninError] = useState("");

    const handleSignin = () => {
        if (!id || !password) {
          setSigninError("아이디와 비밀번호를 입력해주세요.");
          return;
        }
        // 로그인 api 연결
      };

    return (
      <div className="w-full h-full overflow-y-auto flex flex-col items-center pt-[200px]">
        <FitpassLogo width={"173px"} height={"48px"} className="cursor-pointer" />
        <div className="flex flex-col gap-[19px] mb-[17px] pt-[40px]">
        {/* 아이디 입력창 */}
        <InputField
          type="text"
          placeholder="아이디 입력"
          value={id}
          onChange={(e) => setId(e.target.value)}
          icon={<User />}
          iconFocus={<UserFocus />}
        />

        {/* 비밀번호 입력창 */}
        <InputField
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<Password />}
          iconFocus={<PasswordFocus />}
          isPassword={true}
        />
      </div>

      {signinError ? (
        <span className="text-red-500 text-[13px] mb-[18px] w-[321px]">{signinError}</span>
      ) : (
        <span className="h-[37.5px]"></span>
      )}

      {/* 로그인 버튼 */}
      <button
        className="
          w-[321px]
          h-[51px]
          py-[17px]
          px-[15px]
          bg-blue-500
          text-white-100
          text-[16px]
          font-medium
          leading-none
          rounded-[5px]
          hover:bg-blue-400
        "
        onClick={handleSignin}
      >
        로그인
      </button>
<div/>

      </div>
    );
  }
  
  export default AdminSignin;
  