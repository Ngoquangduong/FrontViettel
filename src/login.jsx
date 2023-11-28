import { useState } from "react";
import "./assets/CSS/App.css";
import "./assets/CSS/Auth.css";
import "./assets/CSS/button.css";
import useAdminAuthContext from "./context/AdminAuthContext";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { errors, login } = useAdminAuthContext();

  const handleAdminLogin = async (event) => {
    event.preventDefault();
    login({
      email,
      password,
    });
  };
  return (
    <div className=" bg-auth">
      <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-32 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10  w-16 h-16"
              src="../public/viettel-logo.png"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-pink-600">
              ĐĂNG NHẬP
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleAdminLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-pink-600"
                >
                  Email/Phone/Name
                </label>
                <div className="mt-2">
                  <input
                    id="login"
                    name="login"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    autoComplete="username"
                    autoFocus
                    required
                    className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-pink-600"
                  >
                    Password
                  </label>
                  {/* <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-rose-600 hover:text-zinc-950 "
                    >
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    autoComplete="current-password"
                    required
                    className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-pink-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Đăng Nhập
                </button>
              </div>
            </form>
            {/* <div className="text-sm mt-3 items-center mx-auto">
              <a
                href="#"
                className="font-semibold hover-trans text-rose-600 hover:text-zinc-950 "
              >
                Chưa có tài khoản ? Đăng ký ngay
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
