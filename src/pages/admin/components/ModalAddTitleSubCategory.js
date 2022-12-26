import { React, useState } from "react";
import { Button, Form, Modal, Dropdown } from "react-bootstrap";
import { createTitleSubCategory } from "../../../http/mainPageApi";

const ModalAddTitleSubCategory = ({ show, onHide, updateState, categorys, titleCategory }) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [currentTitleCategory, setCurrentTitleCategory] = useState(null)
  const [currentCategory, setCurrentCategory] = useState(null)

  const createTitleSubCategoryFunc = async () => {
    const formData = new FormData();
    if (number > 6){
      alert("Nomer 6 ýokary bolmaly däl");
      return false;
    }
    formData.append("number", number);
    formData.append("name", name);
    formData.append("categoryId", currentCategory?.id);
    await createTitleSubCategory(formData).then((data) => {
      try {
        onHide();
        updateState();
        setName(''); 
        setCurrentTitleCategory(null)
        setCurrentCategory(null)
        setNumber("");
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
            Täze kiçi kategoriýa görnüş goşmak
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <span className="mt-3 c-bold">Kiçi kategoriýa görnüş nomeri (6-dan ýokary bolmaly däl)</span>
            <Form.Control
              className="my-3"
              value={number}
              type="number"
              onChange={(e) => setNumber(e.target.value)}
              placeholder={"Kategoriýa görnüş nomeri"}
            />
            <span className="mt-3 c-bold">Kiçi kategoriýa görnüşin ady</span>
            <Form.Control
              className="my-3"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder={"Kiçi kategoriýa görnüşin ady"}
            />
           </Form>
           <div className="d-flex justify-content-around px-3">
           <Dropdown className={"mb-3"}>
              <Dropdown.Toggle>
                {currentTitleCategory?.name || "Kategoriýa görnüşini saýlaň"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {titleCategory.map((i)=>
                    <Dropdown.Item
                    onClick={() => {setCurrentCategory(null) ;setCurrentTitleCategory(i)}}
                    >
                        {i.name}
                    </Dropdown.Item>
                )}
  
              </Dropdown.Menu>
            </Dropdown>
           <Dropdown className={"mb-3"}>
              <Dropdown.Toggle disabled={currentTitleCategory === null}>
                {currentCategory?.name || "Kategoriýa saýlaň"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {categorys.filter(j => j.titleCategoryId === currentTitleCategory?.id).map((i)=>
                    <Dropdown.Item
                    onClick={() => setCurrentCategory(i)}
                    >
                        {i.name}
                    </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
           </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={onHide}>
            Ýap
          </Button>
          <Button variant={"outline-success"} onClick={createTitleSubCategoryFunc}>
            Goş
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalAddTitleSubCategory;
