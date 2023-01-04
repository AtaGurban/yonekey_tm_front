import { React, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createNotification } from "../../../http/mainPageApi";

const ModalAddNotification = ({ show, onHide, updateState }) => {
  const [img, setImg] = useState(null);
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');

  const selectFileImg = (e) => {
    setImg(e.target.files[0]);
  };


  const createNotificationFunc = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("type", type);
    formData.append("img", img);
    await createNotification(formData).then((data) => {
      try {
        onHide();
        updateState();
        setType('')
        setImg(null)
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
            Täze bildiriş goşmak
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
            <span className="c-bold">Bildirişiň görkezilmeli wagty</span>
            <Form.Control
              className="my-2 w-50"
              type="datetime-local"
              name="duedate"
              placeholder="Due date"
              onChange={(e) => setDate(e.target.value)}
            />
            <span className="c-bold">Bildirişiň suraty</span>
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
          <Button variant={"outline-success"} onClick={createNotificationFunc}>
            Goş
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalAddNotification;
