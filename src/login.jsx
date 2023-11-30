import { useState } from "react";
import "./assets/CSS/App.css";
import "./assets/CSS/Auth.css";
import "./assets/CSS/button.css";
import useAdminAuthContext from "./context/AdminAuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { errors, login } = useAdminAuthContext();

  const handleAdminLogin = (event) => {
    event.preventDefault();
    login({
      email,
      password,
    });
  };

  return (
    <div className="bg-auth">
      <div className="bg-login-form mx-auto py-32 lg:px-8">
        <div className="flex min-h-full flex-1 flex-col justify-center">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-16 h-16"
              src="../public/viettel-logo.png"
              alt="Viettel Logo"
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
                    className="input-field"
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
                    className="input-field"
                  />
                </div>
              </div>

              <div className="text-center">
                <button className="bn632-hover bn28 mb-3" type="submit">
                  Xác nhận
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
