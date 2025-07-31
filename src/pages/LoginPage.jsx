import LoginForm from "../components/LoginForm";
import LoginImg from "../assets/login1.jpg";
import Logo from "../assets/logoit.png";
import { Link } from "react-router-dom";

export default function LoginPage({ onLogin }) {
  return (
    <div className="flex flex-col sm:flex-row h-screen overflow-hidden">
      <div className="w-[100vw] sm:w-[50vw] min-h-screen flex flex-col ">
        <img className="ml-[50px] mt-[50px] w-[160px]" src={Logo} alt="logo" />
        <div className="flex flex-col items-center justify-center flex-1 mt-[5vh]">
          <LoginForm onLogin={onLogin} />
          <p className="text-center mt-3 text-sm">
            Нет аккаунта?{" "}
            <Link className="text-blue-600 underline" to="/register">
              Зарегистрироваться
            </Link>
          </p>
          <p className="text-center mt-3 text-sm">
            <Link className="text-blue-600 underline" to="/forgot-password">
              Забыли пароль?
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden sm:block w-[50vw]">
        <img className="w-full h-screen object-cover" src={LoginImg} alt="login-bg" />
      </div>
    </div>
  );
}
