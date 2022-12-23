import { React, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import {  updateBusiness } from "../../../http/mainPageApi";

const ModalEditBusiness = ({ show, onHide, updateState, business }) => {
  const [logo, setLogo] = useState(null);
  const [link, setLink] = useState('');
  const [name, setName] = useState('');

  const selectFileLogo = (e) => {
    setLogo(e.target.files[0]);
  };

  useEffect(()=>{
    setName(business.name)
    setLink(business.link)
  }, [business])
  const createBannerFunc = async () => {
    const formData = new FormData();
    formData.append("id", business.id);
    formData.append("name", name);
    formData.append("link", link);
    if (logo){
        formData.append("img", logo);
    }
    await updateBusiness(formData).then((data) => {
      try {
        onHide();
        updateState();
        alert("Üstünlikli ýerine ýetirildi"); 
      } catch (error) {
        console.log(error);
        alert("error");
      }
    });
  };
  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {business.name} biznesi üýtgetmek
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <span className="mt-3 c-bold">Biznesiň ady</span>
            <Form.Control
              className="my-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={"Biznesiň ady"}
            />
            <span className="mt-3 c-bold">Biznesiň linki</span>
            <Form.Control
              className="my-3"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder={"Biznesiň linki"}
            />
            <div><img style={{height: 250}} src={`${process.env.REACT_APP_API_URL}api/static/${business.img}`} alt=""/></div>
            <span className="c-bold">Biznese logo saýla</span>
            <Form.Control
              className="my-2"
              type="file"
              onChange={selectFileLogo}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={onHide}>
            Ýap
          </Button>
          <Button variant={"outline-success"} onClick={createBannerFunc}>
            Üýtget
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalEditBusiness;
