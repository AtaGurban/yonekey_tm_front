import { React, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { updateEbay } from "../../../http/mainPageApi";

const ModalEditEbay = ({ show, onHide, updateState, ebay }) => {
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');

  const updateEbayFunc = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("link", link);
    formData.append("id", ebay?.id);
    formData.append("description", description);
    await updateEbay(formData).then((data) => {
      try {
        onHide();
        updateState();
        setDescription('')
        setTitle('')
        alert("Üstünlikli ýerine ýetirildi");
      } catch (error) {
        console.log(error);
        alert("error");
      }
    });
  };

  useEffect(()=>{
    setDescription(ebay?.description)
    setLink(ebay?.link)
    setTitle(ebay?.title)
  }, [ebay])

  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {ebay?.title} menýuny üýtgetmek
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <span className="mt-3 c-bold">Menýunyň sözbaşysy</span>
            <Form.Control
              className="my-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={"Menýunyň sözbaşysy"}
            />
            <span className="mt-3 c-bold">Menýunyň beýany</span>
            <Form.Control
              className="my-3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={"Menýunyň beýany"}
            />
            <span className="mt-3 c-bold">Menýunyň linki (https:// bilen başlamaly)</span>
            <Form.Control
              className="my-3"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder={"Menýunyň linki"}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={onHide}>
            Ýap
          </Button>
          <Button variant={"outline-success"} onClick={updateEbayFunc}>
            Üýtget
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalEditEbay;
