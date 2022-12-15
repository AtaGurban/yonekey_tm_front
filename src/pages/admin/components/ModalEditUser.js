import { React, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { updateVideoApi } from "../../../http/courseApi";

const ModalEditUser = ({ show, onHide, user, updateState }) => {
  const [userName, setUserName] = useState("");
  const [img, setImg] = useState(null);
  const [files, setFiles] = useState([]);

  const selectFileImg = (e) => {
    setImg(e.target.files[0]);
  };
  const deleteFile = async (id) => {
    // await deleteFileById(id).then((data) => window.location.reload())
  }
  const updateVideo = async() => {
    const formData = new FormData();
    formData.append("id", user.id);
    formData.append("videoName", userName);
    if (img) {
      formData.append('img', img)
    }
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append("file[" + i + "]", file.file);
    }
    formData.append("countFiles", files.length);

    await updateVideoApi(formData).then((data) => {
      try {
        onHide();
        updateState()
        alert('Üstünlikli ýerine ýetirildi')
      } catch (error) {
        console.log(error);
        alert("error");
      }
    });
  };

  const addFile = () => {
    setFiles([...files, { file: "", number: files.length + 1 }]);
  };

  const removeFile = (number) => {
    setFiles(files.filter((i) => i.number !== number));
  };

  const selectFileOne = (file, number) => {
    setFiles(files.map((i) => (i.number === number ? { ...i, file: file } : i)));
  };


  useEffect(() => {
    setUserName(user?.first_name);
  }, [user]);

  console.log(user);
  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {user?.first_name} ulanyjyny üýtgetmek
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <span className="mt-3 c-bold">Ulanyjynyn ady</span>
            <Form.Control
              className="my-3"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder={"Ulanyjynyn ady"}
            />
            <hr />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={onHide}>
            Ýap
          </Button>
          <Button variant={"outline-success"} onClick={updateVideo}>
            Üýtget
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalEditUser;