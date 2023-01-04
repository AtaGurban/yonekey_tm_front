import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import moment from "moment";
import "moment/locale/tk";
import { deleteEbay, getEbay } from "../../../http/mainPageApi";
import { Context } from "../../../index";
import { listEbay } from "../../../utils/adminHeads";

import ModalAddEbay from "./ModalAddEbay";
import ModalEditEbay from "./ModalEditEbay";

const AdminTableEbay = observer(() => {
  const [ebay, setEbay] = useState([]);
  const [currentEbay, setCurrentEbay] = useState({});
  const [modalAddEbayVisible, setModalAddEbayVisible] = useState(false);
  const [modalEditEbayVisible, setModalEditEbayVisible] = useState(false);
  const { user } = useContext(Context);

  useEffect(() => { 
    (async function () {
      await getEbay().then((data) => {
        setEbay(data);
      });
    })();
  }, []);
  const removeEbayFunc = async (id) => {
    await deleteEbay(id).then(async () => {
      await updateState();
    });
  };
  const editEbay = (notification) => {
    setCurrentEbay(notification)
    setModalEditEbayVisible(true)
  };
  const updateState = async () => {
    await getEbay().then((data) => {
      setEbay(data);
    });
  };
  return (
    <div className="admin-table w-100 p-3 mt-4 text-center">
      <div className="ms-auto text-end mb-3">
        <button
          updateState={updateState}
          onClick={() => setModalAddEbayVisible(true)}
          className="btn btn-warning"
        >
          Täze menýu goşmak
        </button>
      </div>
      <ModalAddEbay
        updateState={updateState}
        show={modalAddEbayVisible}
        onHide={() => setModalAddEbayVisible(false)}
      />
      <ModalEditEbay
        ebay={currentEbay}
        updateState={updateState}
        show={modalEditEbayVisible}
        onHide={() => setModalEditEbayVisible(false)}
      />
      <Table bordered hover responsive>
        <thead>
          <tr>
            {listEbay?.map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ebay?.map((i, index) => (
            <tr key={index}>
              <td>{i.id}</td>
              <td>{i.title}</td>
              <td>{i.link}</td>
              <td>{i.description}</td>
              <td>{moment(i.createdAt).format("LLLL")}</td>
              <td>
                {
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => editEbay(i)}
                      className="btn btn-primary mx-1"
                      title="Üýtgetmek"
                    >
                      <i className="fas fa-cogs"></i>
                    </button>
                    <button
                      onClick={() => removeEbayFunc(i.id)}
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

export default AdminTableEbay;
