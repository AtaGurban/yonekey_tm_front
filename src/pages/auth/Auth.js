import React, {useState, useContext} from 'react';
import { Context } from '../..';
import { registration } from '../../http/userAPI';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const { user } = useContext(Context);

    const signUp = async () => {
        try {
          if (email && phone && name && password) {
            if (password.split('').length < 8){
              return alert('Acarsözi 8 simwoldan az bolmaly däl')
            }
            const data = await registration(email, name, password, phone);
            user.setUser(data);
            user.setIsAuth(true);
            window.location.reload()
          } else{
            alert('Maglumatlar doly däl')
          }
        } catch (error) {
          alert(error.response.data.message);
        }
      };
    return (
        <div>
             <div
          id="auth-block"
          className="container auth-block d-block text-center pb-5"
        >
          <div className="form-name my-2">
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
          <div className="form-email my-2">
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
          <div className="form-phone my-2">
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
          <div className="form-password my-2">
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
            Başlamak isleýän
          </button>
        </div>
        </div>
    );
};

export default Auth;