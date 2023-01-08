import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Context } from "..";
import { login, registration } from "../http/userAPI";


const Popup = observer(() => {
//   const [popupVisible, setPopupVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { user, popup } = useContext(Context);


  useEffect(()=>{
    if (!user.isAuth){
        setTimeout(() => {
            popup.setVisible(true)
        }, 3 * 60 * 1000);
    }
  }, [])

  const signIn = async () => {
    try {
      if (phone && password){
        const data = await login(phone, password)
        user.setUser(data);
        user.setIsAuth(true);
        window.location.reload();
      }  else {
        alert('Maglumatlar yalnys')
      } 
    } catch (error) {
      alert('Munun yaly ulanyjy yok');
    }
  };
  const signUp = async () => {
    try {
      if (email && phone && name && password) {
        if (password.split("").length < 2) {
          return alert("Acarsözi boş bolmaly däl");
        }
        const data = await registration(email, name, password, phone, true);
        user.setUser(data);
        user.setIsAuth(true);
        window.location.reload();
      } else {
        alert("Maglumatlar doly däl");
      }
    } catch (error) {
        console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <Modal
        contentClassName={'popup-modal'}
        show={popup.visible}
        onHide={() => popup.setVisible(false)}
        backdrop="static"
        keyboard={false}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
        <div
          id="auth-block"
          className="container w-100 d-block"
        >
          <h1 className="mb-4 text-center">Agza bolmak penjiresi</h1>
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
              type="email"
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
              type="phone"
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
          <div className="d-flex justify-content-between align-items-center px-2">
            <span onClick={() => signIn()} className="btn btn-success mt-3">
                Öň hasabym bar
            </span>
            <button onClick={() => signUp()} className="btn btn-danger mt-3">
                Agza boljak
            </button>
          </div>
        </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => setPopupVisible(false)}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
});

export default Popup;
