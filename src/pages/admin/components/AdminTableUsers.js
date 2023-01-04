import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext } from "react";
import { Pagination } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { getAllUsers, removeUser } from "../../../http/userAPI";
import { Context } from "../../../index";
import { listUsers } from "../../../utils/adminHeads";
import ModalAddUser from "./ModalAddUser";
import ModalEditUser from "./ModalEditUser";
import moment from "moment";
import "moment/locale/tk";

const AdminTableUsers = observer(() => {
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState(1);
  const [removeBtn, setRemoveBtn] = useState("btn btn-danger");
  const [addBtn, setAddBtn] = useState("ms-auto text-end mb-3");
  const [paginationCount, setPaginationCount] = useState(1);
  const [modalEditUserVisible, setModalEditUserVisible] = useState(false);
  const [modalAddUserVisible, setModalAddUserVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const { user } = useContext(Context);

  useEffect(() => {
    (async function () {
      await getAllUsers(active).then((data) => {
        setUsers(data.rows);
        setPaginationCount(data.count);
      });
    })();
    if (user.user.role !== "SUPERADMIN") {
      setRemoveBtn("d-none");
      setAddBtn("d-none");
    }
  }, [active]);

  const removeUserFunc = async (id) => {
    if (user.user.role === "SUPERADMIN") {
      await removeUser(id).then(async (data) => {
        await getAllUsers(active).then((data) => {
          setUsers(data.rows);
          setPaginationCount(data.count);
        });
        alert("Üstünlikli ýerine ýetirildi");
      });
    }
  };
  const editUser = (user) => {
    console.log(user);
    setCurrentUser(user);
    setModalEditUserVisible(true);
  };
  let items = [];
  for (let number = 1; number <= Math.ceil(paginationCount / 10); number++) {
    items.push(
      <Pagination.Item
        onClick={() => setActive(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }
  const updateState = async () => {
    await getAllUsers(active).then((data) => {
      setUsers(data.rows);
      setPaginationCount(data.count);
    });
  };
  return (
    <div className="admin-table w-100 p-3 mt-4 text-center">
      <div className={addBtn}>
        <button
          onClick={() => setModalAddUserVisible(true)}
          className="btn btn-warning"
        >
          Täze admin goşmak
        </button>
      </div>
      <ModalAddUser
        updateState={updateState}
        show={modalAddUserVisible}
        onHide={() => setModalAddUserVisible(false)}
      />
      <ModalEditUser
        updateState={updateState}
        editedUser={currentUser}
        show={modalEditUserVisible}
        onHide={() => setModalEditUserVisible(false)}
      />
      <Table bordered hover responsive>
        <thead>
          <tr>
            {listUsers?.map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users?.map((i, index) => (
            <tr key={index}>
              <td>{i.id}</td>
              <td>{i.first_name}</td>
              <td>{i.role}</td>
              <td>{i.phone}</td>
              <td>{moment(i.createdAt).format("LLLL")}</td>
              <td>
                {
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => editUser(i)}
                      className="btn btn-primary mx-1"
                      title="Üýtgetmek"
                    >
                      <i className="fas fa-cogs"></i>
                    </button>
                    <button
                      onClick={() => removeUserFunc(i.id)}
                      disabled={user.user.role !== "SUPERADMIN"}
                      className={removeBtn}
                      title="Pozmak"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="container mt-5">
        <Pagination className="justify-content-center" size="lg">
          {items}
        </Pagination>
      </div>
    </div>
  );
});

export default AdminTableUsers;
