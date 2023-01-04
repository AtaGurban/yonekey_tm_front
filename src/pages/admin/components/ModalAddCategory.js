import { React, useContext, useState } from "react";
import { Button, Form, Modal, Dropdown } from "react-bootstrap";
import { Context } from "../../..";
import { createCategory } from "../../../http/mainPageApi";

const ModalAddCategory = ({ show, onHide, updateState }) => {
  const [img, setImg] = useState(null);
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [categoryWithLink, setCategoryWithLink] = useState(false)
  const [dropCategory, setDropCategory] = useState("");
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
    formData.append("withLink", categoryWithLink);
    formData.append("titleCategoryId", dropCategory.id);
    await createCategory(formData).then((data) => {
      try {
        onHide();
        updateState();
        setLink("");
        setImg(null);
        setName("");
        setCategoryWithLink(false)
        setDropCategory('')
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
            Täze kategoriýa goşmak
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
            <Dropdown className={"mb-3"}>
              <Dropdown.Toggle variant="outline-gray">
                {categoryWithLink ? "Pod kategoriýasyz" : 'Pod kategoriýaly'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                onClick={() => setCategoryWithLink(true)}
                >
                    Pod kategoriýasyz
                </Dropdown.Item>
                <Dropdown.Item
                onClick={() => setCategoryWithLink(false)}
                >
                    Pod kategoriýaly
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <hr/>
            <Dropdown className={"mb-3"}>
              <Dropdown.Toggle>
                {dropCategory.name || "Kategoriýa görnüşini saýlaň"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {titleCategory.map((role, index) => (
                  <Dropdown.Item
                    onClick={() => setDropCategory(role)}
                    key={index}
                  >
                    {role.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <span className="mt-3 c-bold">Kategoriýa linki (https:// bilen başlamaly)</span>
            <Form.Control
              className="my-3"
              value={link}
              disabled={!categoryWithLink}
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

export default ModalAddCategory;
