import { Link } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm.jsx";
import SocialLoginButton from "../../components/common/SocialLoginButton.jsx";
import { socialLogin } from "../../services/api/authApi.js";
import testlogo from "../../assets/logo/testlogo.png";

const LoginPage = () => {
  const handleGoogleLogin = () => {
    console.log("구글 로그인!");
    socialLogin("google");
  };
  const handleNaverLogin = () => {
    console.log("네이버버 로그인!");
  };
  const handleKakaoLogin = () => {
    console.log("카카오오 로그인!");
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 p-4 ">
        <Link to="/">
          <img src={testlogo} alt="로고" className="h-10 w-auto" />
        </Link>
      </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-3 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 cursor-default">
              로그인
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 cursor-default">
              서비스를 이용하기 위해 로그인해주세요
            </p>
          </div>
          <LoginForm />
          <Link to="" className="text-xs block text-right hover:text-my-blue-1">forgot your password?</Link>
          <p className="text-xs cursor-default">Or continue with</p>
          <div className="space-y-3">
            <SocialLoginButton provider="google" onClick={handleGoogleLogin} />
            <SocialLoginButton provider="naver" onClick={handleNaverLogin} />
            <SocialLoginButton provider="kakao" onClick={handleKakaoLogin} />
          </div>
          <div className="flex justify-center space-x-3 items-center">
          <Link to="/join" className="text-xs text-my-blue-4 hover:text-hmy-blue-4">Don’t have an account?</Link>
          <Link to="/join" className="text-sm text-my-blue-1 hover:text-hmy-blue-2">Sign up now</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
