import { React, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createMobileAds } from "../../../http/mainPageApi";

const ModalAddMobileAds = ({ show, onHide, updateState }) => {
  const [img, setImg] = useState(null);
  const [link, setLink] = useState('');
  const [name, setName] = useState('');

  const selectFileImg = (e) => {
    setImg(e.target.files[0]);
  };


  const createMobileAdsFunc = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("link", link);
    formData.append("img", img);
    await createMobileAds(formData).then((data) => {
      try {
        onHide();
        updateState();
        setLink('')
        setImg(null)
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
            Täze mobil reklama goşmak
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <span className="mt-3 c-bold">Reklamanyň ady</span>
            <Form.Control
              className="my-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={"Reklamanyň ady"}
            />
            <span className="mt-3 c-bold">Reklamanyň linki</span>
            <Form.Control
              className="my-3"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder={"Reklamanyň linki"}
            />
            <span className="c-bold">Reklamanyň surat saýla</span>
            <Form.Control
              className="my-2"
              type="file"
              onChange={selectFileImg}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={onHide}>
            Ýap
          </Button>
          <Button variant={"outline-success"} onClick={createMobileAdsFunc}>
            Goş
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalAddMobileAds;
