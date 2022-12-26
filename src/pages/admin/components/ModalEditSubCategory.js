import { React, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { updateSubCategory } from "../../../http/mainPageApi";

const ModalEditSubCategory = ({
  show,
  onHide,
  updateState,
  currentSubCategory,
}) => {
  const [img, setImg] = useState(null);
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const selectFileLogo = (e) => {
    setImg(e.target.files[0]);
  };

  const updateCategoryFunc = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("link", link);
    formData.append("img", img);
    formData.append("id", currentSubCategory.id);
    await updateSubCategory(formData).then((data) => {
      try {
        onHide();
        updateState();
        setLink("");
        setImg(null);
        setName("");
        alert("Üstünlikli ýerine ýetirildi");
      } catch (error) {
        console.log(error);
        alert("error");
      }
    });
  };
  useEffect(() => {
    setLink(currentSubCategory.link);
    setName(currentSubCategory.name);
    // setDropTitleSubCategory((titleSubCategory.filter(i=> i.id === currentSubCategory?.titleSubCategoryId))[0])
    // setDropCategory((categorys.filter(i=> i.id === droptitleSubCategory?.categoryId))[0])
    // // setDropTitleCategory()
  }, [currentSubCategory]);
  console.log(currentSubCategory);
  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {currentSubCategory.name} kiçi kategoriýany üýtgetmek
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <span className="mt-3 c-bold">Kategoriýanyň ady</span>
            <Form.Control
              className="my-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={"Kategoriýanyň ady"}
            />
            <span className="mt-3 c-bold">Kategoriýa linki</span>
            <Form.Control
              className="my-3"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder={"Kategoriýa linki"}
            />
            <div style={{ height: "150px" }} className="my-3">
              <img
                src={`${process.env.REACT_APP_API_URL}api/static/${currentSubCategory.img}`}
                alt=""
              />
            </div>
            <span className="c-bold">Kategoriýa surat saýla</span>
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
          <Button variant={"outline-success"} onClick={updateCategoryFunc}>
            Üýtget
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalEditSubCategory;
