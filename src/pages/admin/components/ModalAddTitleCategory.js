import { React, useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Context } from "../../..";
import { createTitleCategory, getTitleCategoryWithCategory } from "../../../http/mainPageApi";

const ModalAddTitleCategory = ({ show, onHide, updateState }) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const { category } = useContext(Context) 

  const createSliderFunc = async () => {
    const formData = new FormData();
    if (number > 6){
      alert("Nomer 6 ýokary bolmaly däl"); 
      return false;
    }
    formData.append("number", number);
    formData.append("name", name);
    await createTitleCategory(formData).then(async(data) => {
      try {
        onHide();
        updateState();
        setName('');
        setNumber("");
        await getTitleCategoryWithCategory().then(async data=>{
          await category.setTitleCategory(data)
        })
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
            <span className="mt-3 c-bold">Kategoriýa görnüşin ady</span>
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
            Goş
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalAddTitleCategory;
