import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import moment from "moment";
import "moment/locale/tk";
import { deleteNotification, getNotification } from "../../../http/mainPageApi";
import { Context } from "../../../index";
import { listNotification } from "../../../utils/adminHeads";
import ModalAddNotification from "./ModalAddNotification";
import ModalEditNotification from "./ModalEditNotification";

const AdminTableNotification = observer(() => {
  const [notification, setNotification] = useState([]);
  const [currentNotification, setCurrentNotification] = useState({});
  const [modalAddNotificationVisible, setModalAddNotificationVisible] = useState(false);
  const [modalEditNotificationVisible, setModalEditNotificationVisible] = useState(false);
  const { user } = useContext(Context);

  useEffect(() => { 
    (async function () {
      await getNotification().then((data) => {
        setNotification(data);
      });
    })();
  }, []);
  const removeNotificationFunc = async (id) => {
    await deleteNotification(id).then(async () => {
      await updateState();
    });
  };
  const editNotification = (notification) => {
    setCurrentNotification(notification)
    setModalEditNotificationVisible(true)
  };
  const updateState = async () => {
    await getNotification().then((data) => {
      setNotification(data);
    });
  };
  return (
    <div className="admin-table w-100 p-3 mt-4 text-center">
      <div className="ms-auto text-end mb-3">
        <button
          updateState={updateState}
          onClick={() => setModalAddNotificationVisible(true)}
          className="btn btn-warning"
        >
          Täze bildiriş goşmak
        </button>
      </div>
      <ModalAddNotification
        updateState={updateState}
        show={modalAddNotificationVisible}
        onHide={() => setModalAddNotificationVisible(false)}
      />
      <ModalEditNotification
        notification={currentNotification}
        updateState={updateState}
        show={modalEditNotificationVisible}
        onHide={() => setModalEditNotificationVisible(false)}
      />
      <Table bordered hover responsive>
        <thead>
          <tr>
            {listNotification?.map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {notification?.map((i, index) => (
            <tr key={index}>
              <td>{i.id}</td>
              <td>{i.title}</td>
              <td>{moment(i.date).format("LLLL")}</td>
              <td>{i.type}</td>
              <td>{moment(i.createdAt).format("LLLL")}</td>
              <td>
                {
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => editNotification(i)}
                      className="btn btn-primary mx-1"
                      title="Üýtgetmek"
                    >
                      <i className="fas fa-cogs"></i>
                    </button>
                    <button
                      onClick={() => removeNotificationFunc(i.id)}
                      disabled={user.user.role !== "SUPERADMIN"}
                      className="btn btn-danger"
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
    </div>
  );
});

export default AdminTableNotification;
