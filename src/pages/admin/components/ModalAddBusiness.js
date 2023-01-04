import { React, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createBusiness } from "../../../http/mainPageApi";

const ModalAddBusiness = ({ show, onHide, updateState }) => {
  const [logo, setLogo] = useState(null);
  const [link, setLink] = useState('');
  const [name, setName] = useState('');

  const selectFileLogo = (e) => {
    setLogo(e.target.files[0]);
  };


  const createBannerFunc = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("link", link);
    formData.append("img", logo);
    await createBusiness(formData).then((data) => {
      try {
        onHide();
        updateState();
        setLink('')
        setLogo(null)
        setName('')
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
            Täze biznes goşmak
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
            <span className="mt-3 c-bold">Biznesiň linki (https:// bilen başlamaly)</span>
            <Form.Control
              className="my-3"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder={"Biznesiň linki"}
            />
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
            Goş
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalAddBusiness;
