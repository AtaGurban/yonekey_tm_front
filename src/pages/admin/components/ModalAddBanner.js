import { React, useState } from "react";
import { Button, Form, Modal, Dropdown } from "react-bootstrap";

import { createBanner } from "../../../http/bannerApi";

const ModalAddBanner = ({ show, onHide, updateState, business }) => {
  const [banner, setBanner] = useState(null);
  const [dropPage, setDropPage] = useState('')



  const selectFileBanner = (e) => {
    setBanner(e.target.files[0]);
  };

  console.log(business);
  const createBannerFunc = async () => {
    const formData = new FormData();
    formData.append("page", dropPage);
    formData.append("banner", banner);
    await createBanner(formData).then((data) => {
      try {
        onHide();
        updateState();
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
            Täze banner goşmak
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <span className="c-bold">Banner Saýla</span>
            <Form.Control
              className="my-2"
              type="file"
              onChange={selectFileBanner}
            />
            <hr />
          </Form>
          <Dropdown className={'mb-3'}>
            <Dropdown.Toggle>
              {dropPage || "Banner sahypany saýlaň"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {business.map((role, index) => (
                <Dropdown.Item onClick={() => setDropPage(role)} key={index}>
                  {role.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={onHide}>
            Ýap
          </Button>
          <Button variant={"outline-success"} onClick={createBannerFunc}>
            Goş
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalAddBanner;
