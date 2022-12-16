import { React, useState, useEffect, useContext } from "react";
import { Button, Form, Modal, Dropdown } from "react-bootstrap";
import { Context } from "../../..";
import { createUserByAdmin } from "../../../http/userAPI";

const ModalAddUser = ({ show, onHide, updateState }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [dropRole, setDropRole] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const {user} = useContext(Context)

  const createUser = async () => {
    if ((user.user.role !== 'SUPERADMIN')){
      return alert('Bu bölüm size degişli däl')
    }
    const formData = new FormData();
    formData.append("role", dropRole);
    formData.append("name", userName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", userPassword);
    console.log(formData);
    await createUserByAdmin(formData).then((data) => {
      try {
        onHide();
        updateState();
        alert("Üstünlikli ýerine ýetirildi");
        setUserPassword('')
        setEmail('')
        setPhone('')
        setUserName('')
      } catch (error) {
        console.log(error);
        alert("error");
      }
    });
  };

  const roles = ['USER', 'ADMIN', 'SUPERADMIN']

  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Täze ulanyjyny goşmak
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <span className="mt-3 c-bold">Ulanyjynyň ady</span>
            <Form.Control
              className="my-3"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder={"Ulanyjynyň ady"}
            />
            <span className="mt-3 c-bold">Ulanyja parol ber</span>
            <Form.Control
              className="my-3"
              type='password'
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              placeholder={"Ulanyja parol ber"}
            />
            <span className="mt-3 c-bold">Ulanyjynyň telefony</span>
            <Form.Control
              className="my-3"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={"Ulanyjynyň telefony"}
            />
            <span className="mt-3 c-bold">Ulanyjynyň email</span>
            <Form.Control
              className="my-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={"Ulanyjynyň email"}
            />
            <hr />
          </Form>
          <Dropdown className={'mb-3'}>
            <Dropdown.Toggle>
              {dropRole || "Ulanyjynyň rolyny saýlaň"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {roles.map((role, index) => (
                <Dropdown.Item onClick={() => setDropRole(role)} key={index}>
                  {role}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={onHide}>
            Ýap
          </Button>
          <Button variant={"outline-success"} onClick={createUser}>
            Goş
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalAddUser;
