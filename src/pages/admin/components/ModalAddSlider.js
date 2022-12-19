import { React, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createSlider } from "../../../http/mainPageApi";

const ModalAddSlider = ({ show, onHide, updateState }) => {
  const [link, setLink] = useState("");
  const [number, setNumber] = useState("");
  const [images, setImages] = useState([]);

  const addFile = () => {
    setImages([...images, { file: "", number: images.length + 1, name: "" }]);
  };

  const removeFile = (number) => {
    setImages(images.filter((i) => i.number !== number));
  };

  const selectFileOne = (file, number) => {
    setImages(
      images.map((i) => (i.number === number ? { ...i, file: file } : i))
    );
  };

  const createSliderFunc = async () => {
    const formData = new FormData();
    formData.append("number", number);
    formData.append("link", link);
    formData.append("countFiles", images.length);
    for (let i = 0; i < images.length; i++) {
      if (images[i].file !== "") {
        let file = images[i];
        formData.append("file[" + i + "]", file.file);
      } else {
        alert("Doldurylmadyk faýl bar");
        return false;
      }
    }
    await createSlider(formData).then((data) => {
      try {
        onHide();
        updateState();
        setLink("");
        setImages([]);
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
            Täze slider goşmak
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <span className="mt-3 c-bold">Slider nomeri</span>
            <Form.Control
              className="my-3"
              value={number}
              type="number"
              onChange={(e) => setNumber(e.target.value)}
              placeholder={"Slider nomeri"}
            />
            <span className="mt-3 c-bold">Slider linki</span>
            <Form.Control
              className="my-3"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder={"Slider linki"}
            />
            <hr />
            <div>
              <span className="my-3 c-bold d-block">Slider suratlary</span>
              <Button variant={"outline-dark"} onClick={addFile}>
                Surat goş
              </Button>
              {images.map((item) => (
                <div key={item.number} className="row mt-3">
                  <div className="col-8">
                    <Form.Control
                      className=""
                      type="file"
                      onChange={(e) =>
                        selectFileOne(e.target.files[0], item.number)
                      }
                    />
                  </div>
                  <div className="col-4">
                    <Button
                      onClick={() => removeFile(item.number)}
                      variant={"danger"}
                    >
                      Poz
                    </Button>
                  </div>
                </div>
              ))}
            </div>
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

export default ModalAddSlider;
