import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../..";
import Navbar from "../../components/Navbar";
import { registration, login } from "../../http/userAPI";
import { LOGiN_PAGE, MAIN_PAGE } from "../../utils/pathConsts";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGiN_PAGE;
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      if (email && phone && name && password) {
        if (password.split("").length < 8) {
          return alert("Acarsözi 8 simwoldan az bolmaly däl");
        }
        const data = await registration(email, name, password, phone);
        user.setUser(data);
        user.setIsAuth(true);
        window.location.reload();
      } else {
        alert("Maglumatlar doly däl");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const signIn = async () => {
    try {
      if (phone && password){
        const data = await login(phone, password)
        user.setUser(data);
        user.setIsAuth(true);
        navigate(MAIN_PAGE);
      }  else {
        alert('Maglumatlar yalnys')
      } 
    } catch (error) {
      alert('Munun yaly ulanyjy yok');
    }
  };
  return (
    <div className="">
      <Navbar/>
      <div className="text-center auth-wrapper d-flex">
        {
          isLogin ?         <div
          id="auth-block"
          className="container auth-block d-block"
        >
          <h1 className="mb-4">Giriş etjek</h1>
          <div className="form form-phone my-3">
            <label className="text-bold" htmlFor="phone">
              Telefonyňyzy ýazyň
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Telefonyňyzy ýazyň"
              name="phone"
              id="phone"
            />
          </div>
          <div className="form form-password my-3">
            <label className="text-bold" htmlFor="password">
              Açarsöz ýazyň
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Açarsöz ýazyň"
              name="password"
              id="password"
            />
          </div>
          <button onClick={() => signIn()} className="btn btn-danger mt-3">
            Giriş
          </button>
        </div> :         <div
          id="auth-block"
          className="container auth-block d-block"
        >
          <h1 className="mb-4">Agza boljak</h1>
          <div className="form form-name my-3">
            <label className="text-bold" htmlFor="name">
              Adyňyzy ýazyň
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Adyňyzy ýazyň"
              name="name"
              id="name"
            />
          </div>
          <div className="form form-email my-3">
            <label className="text-bold" htmlFor="email">
              E-poçta ýazyň
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email ýazyň"
              name="email"
              id="email"
            />
          </div>
          <div className="form form-phone my-3">
            <label className="text-bold" htmlFor="phone">
              Telefonyňyzy ýazyň
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Telefonyňyzy ýazyň"
              name="phone"
              id="phone"
            />
          </div>
          <div className="form form-password my-3">
            <label className="text-bold" htmlFor="password">
              Açarsöz ýazyň
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Açarsöz ýazyň"
              name="password"
              id="password"
            />
          </div>
          <button onClick={() => signUp()} className="btn btn-danger mt-3">
            Agza boljak
          </button>
        </div>
        }
      </div>
    </div>
  );
};

export default Auth;
