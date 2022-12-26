import { React, useContext, useState } from "react";
import { Button, Form, Modal, Dropdown } from "react-bootstrap";
import { Context } from "../../..";
import { createSubCategory } from "../../../http/mainPageApi";

const ModalAddSubCategory = ({
  show,
  onHide,
  updateState,
  titleSubCategory,
  categorys,
}) => {
  const [img, setImg] = useState(null);
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [dropTitleCategory, setDropTitleCategory] = useState(null);
  const [dropCategory, setDropCategory] = useState(null);
  const [droptitleSubCategory, setDropTitleSubCategory] = useState(null);
  const { category } = useContext(Context);
  const titleCategory = category.titleCategory;
  const selectFileLogo = (e) => {
    setImg(e.target.files[0]);
  };

  const createCategoryFunc = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("link", link);
    formData.append("img", img);
    formData.append("titleSubCategoryId", droptitleSubCategory.id);
    await createSubCategory(formData).then((data) => {
      try {
        onHide();
        updateState();
        setLink("");
        setImg(null);
        setName("");
        setDropCategory(null)
        setDropTitleCategory(null)
        setDropTitleSubCategory(null);
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
            Täze kiçi kategoriýa goşmak
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
            <div className="d-flex justify-content-around">
              <Dropdown className={"mb-3"}>
                <Dropdown.Toggle>
                  {dropTitleCategory?.name || "Kategoriýa görnüşini saýlaň"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {titleCategory.map((role, index) => (
                    <Dropdown.Item
                      onClick={() => {setDropTitleCategory(role); setDropCategory(null); setDropTitleSubCategory(null)}}
                      key={index}
                    >
                      {role.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className={"mb-3"}>
                <Dropdown.Toggle disabled={dropTitleCategory === null}>
                  {dropCategory?.name || "Kategoriýa saýlaň"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {categorys.filter(i => i?.titleCategoryId === dropTitleCategory?.id).map((role, index) => (
                    <Dropdown.Item
                      onClick={() => {setDropCategory(role); setDropTitleSubCategory(null)}}
                      key={index}
                    >
                      {role.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className={"mb-3"}>
                <Dropdown.Toggle disabled={dropCategory === null}>
                  {droptitleSubCategory?.name || "Kiçi kategoriýa görnüşini saýlaň"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {titleSubCategory.filter(i=> i?.categoryId === dropCategory?.id).map((role, index) => (
                    <Dropdown.Item
                      onClick={() => setDropTitleSubCategory(role)}
                      key={index}
                    >
                      {role.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <span className="mt-3 c-bold">Kategoriýa linki</span>
            <Form.Control
              className="my-3"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder={"Kategoriýa linki"}
            />
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
          <Button variant={"outline-success"} onClick={createCategoryFunc}>
            Goş
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalAddSubCategory;
