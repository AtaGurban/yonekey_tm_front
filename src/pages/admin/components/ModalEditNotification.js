import { React, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { updateNotification } from "../../../http/mainPageApi";

const ModalEditNotification = ({ show, onHide, updateState, notification }) => {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');


  useEffect(()=>{
    setType(notification?.type)
    setTitle(notification?.title)
  }, [notification])


  const updateNotificationFunc = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("type", type);
    formData.append("id", notification.id);
    await updateNotification(formData).then((data) => {
      try {
        onHide();
        updateState();
        setType('')
        setTitle('')
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
            {notification?.title} bildirişi üýtgetmek
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <span className="mt-3 c-bold">Bildirişiň sözbaşysy</span>
            <Form.Control
              className="my-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={"Bildirişiň sözbaşysy"}
            />
            <span className="mt-3 c-bold">Bildirişiň görnüşi</span>
            <Form.Control
              className="my-3"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder={"Bildirişiň görnüşi"}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={onHide}>
            Ýap
          </Button>
          <Button variant={"outline-success"} onClick={updateNotificationFunc}>
            Üýtget
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalEditNotification;
