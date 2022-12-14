import { React, useState, useEffect, useContext } from "react";
import { Button, Form, Modal, Dropdown } from "react-bootstrap";
import { Context } from "../../..";
import { update } from "../../../http/userAPI";

const ModalEditUser = ({ show, onHide, editedUser, updateState }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [dropRole, setDropRole] = useState('')
  const [dropdownClass, setDropdownClass] = useState('mb-3')
  const {user} = useContext(Context)

  const updateUser = async () => {
    if ((user.user.role === 'ADMIN') && (editedUser.role === 'SUPERADMIN')){
      return alert('Siziň bu ulanyjy bilen işiňiz bolmasyn')
    }
    const formData = new FormData();
    if (user.user.role === 'ADMIN'){
      formData.append("role", editedUser?.role);
    } else if(user.user.role === 'SUPERADMIN'){
      formData.append("role", dropRole);
    }
    formData.append("id", editedUser.id);
    formData.append("userName", userName);
    formData.append("userPassword", userPassword);


    await update(formData).then((data) => {
      try {
        onHide();
        updateState();
        alert("Üstünlikli ýerine ýetirildi");
        setUserPassword('')
      } catch (error) {
        console.log(error);
        alert("error");
      }
    });
  };

  useEffect(() => {
    setUserName(editedUser?.first_name);
    setDropRole(editedUser?.role);
    if (user.user.role !== 'SUPERADMIN'){
      setDropdownClass('d-none')
    }
  }, [editedUser]);
  const roles = ['USER', 'ADMIN', 'SUPERADMIN']

  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {editedUser?.first_name} ulanyjyny üýtgetmek
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
            <span className="mt-3 c-bold">Ulanyjynyň parolyny üýtget</span>
            <Form.Control
              className="my-3"
              type='password'
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              placeholder={"Ulanyjynyň parolyny üýtget"}
            />
            <hr />
          </Form>
          <Dropdown className={dropdownClass}>
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
          <Button variant={"outline-success"} onClick={updateUser}>
            Üýtget
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalEditUser;
