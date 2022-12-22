import { React, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { updateTitleCategory } from "../../../http/mainPageApi";

const ModalEditTitleCategory = ({ show, onHide, updateState, titleCategory }) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  
  const createSliderFunc = async () => {
    const formData = new FormData();
    if (number > 6){
      alert("Nomer 6 ýokary bolmaly däl");
      return false;
    }
    formData.append("id", titleCategory.id);
    formData.append("number", number);
    formData.append("name", name);
    await updateTitleCategory(formData).then((data) => {
      try {
        onHide();
        updateState();
        setName('');
        setNumber("");
        alert("Üstünlikli ýerine ýetirildi");
      } catch (error) {
        console.log(error);
        alert("error");
      }
    });
  };
  useEffect(()=>{
    setName(titleCategory.name)
    setNumber(titleCategory.number)
  }, [titleCategory])
  console.log(titleCategory);
  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Täze kategoriýa görnüş goşmak
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <span className="mt-3 c-bold">Kategoriýa görnüş nomeri (6-dan ýokary bolmaly däl)</span>
            <Form.Control
              className="my-3"
              value={number}
              type="number"
              onChange={(e) => setNumber(e.target.value)}
              placeholder={"Kategoriýa görnüş nomeri"}
            />
            <span className="mt-3 c-bold">Kategoriýa görnüşin ady (6-dan ýokary bolmaly däl)</span>
            <Form.Control
              className="my-3"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder={"Kategoriýa görnüşin ady"}
            />
           </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={onHide}>
            Ýap
          </Button>
          <Button variant={"outline-success"} onClick={createSliderFunc}>
            Üýtget
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalEditTitleCategory;
