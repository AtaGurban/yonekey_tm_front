import { React, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createSlider } from "../../../http/mainPageApi";

const ModalAddSlider = ({ show, onHide, updateState }) => {
  const [number, setNumber] = useState("");
  const [webImages, setWebImages] = useState([]);
  const [mobileImages, setMobileImages] = useState([]);

  const addFile = () => {
    setWebImages([
      ...webImages,
      { file: "", number: webImages.length + 1, name: "" },
    ]);
    setMobileImages([
      ...mobileImages,
      { file: "", number: mobileImages.length + 1, name: "" },
    ]);
  };

  const removeFile = (number) => {
    setWebImages(webImages.filter((i) => i.number !== number));
    setMobileImages(mobileImages.filter((i) => i.number !== number));
  };

  const selectFileWeb = (file, number) => {
    setWebImages(
      webImages.map((i) => (i.number === number ? { ...i, file: file } : i))
    );
  };

  const selectFileMobile = (file, number) => {
    setMobileImages(
      mobileImages.map((i) => (i.number === number ? { ...i, file: file } : i))
    );
  };

  const createSliderFunc = async () => {
    const formData = new FormData();
    if (number > 7) {
      alert("Nomer 7 ýokary bolmaly däl");
      return false;
    }
    formData.append("number", number);
    formData.append("countFiles", webImages.length);
    for (let i = 0; i < webImages.length; i++) {
      if (webImages[i].file !== "") {
        let file = webImages[i];
        formData.append("fileWeb[" + i + "]", file.file);
      } else {
        alert("Doldurylmadyk faýl bar");
        return false;
      }
      if (mobileImages[i].file !== "") {
        let file = mobileImages[i];
        formData.append("fileMobile[" + i + "]", file.file);
      } else {
        alert("Doldurylmadyk faýl bar");
        return false;
      }
    }
    await createSlider(formData).then((data) => {
      try {
        onHide();
        updateState();
        setWebImages([]);
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
            <span className="mt-3 c-bold">
              Slider nomeri (6-dan ýokary bolmaly däl)
            </span>
            <Form.Control
              className="my-3"
              value={number}
              type="number"
              onChange={(e) => setNumber(e.target.value)}
              placeholder={"Slider nomeri"}
            />
            {/* <span className="mt-3 c-bold">Slider text</span>
            <Form.Control
              className="my-3"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={"Slider text"}
            /> */}
            <hr />
            <div>
              <span className="my-3 c-bold d-block">Slider suratlary</span>
              <Button variant={"outline-dark"} onClick={addFile}>
                Surat goş
              </Button>
              {webImages.map((item) => (
                <div key={item.number} className="row mt-3">
                  <p className="mb-0">Web üçin (1980*792)</p>
                  <div className="col-8 mt-2">
                    <Form.Control
                      className=""
                      type="file"
                      onChange={(e) =>
                        selectFileWeb(e.target.files[0], item.number)
                      }
                    />
                  </div>
                  <div className="col-4 mt-2">
                    <Button
                      onClick={() => removeFile(item.number)}
                      variant={"danger"}
                    >
                      Poz
                    </Button>
                  </div>
                  <p className="mb-0 mt-2">Mobile üçin</p>
                  <div className="col-8 mt-2">
                    <Form.Control
                      className=""
                      type="file"
                      onChange={(e) =>
                        selectFileMobile(e.target.files[0], item.number)
                      }
                    />
                  </div>
                  <div className="col-4 mt-2">
                    <Button
                      onClick={() => removeFile(item.number)}
                      variant={"danger"}
                    >
                      Poz
                    </Button>
                  </div>
                  <hr className="mt-3"/>
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
