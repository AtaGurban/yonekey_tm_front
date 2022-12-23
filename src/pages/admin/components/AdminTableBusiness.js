import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import { deleteBanner } from "../../../http/bannerApi";
import { deleteBusiness, getBusiness } from "../../../http/mainPageApi";
import { Context } from "../../../index";
import { listBusiness } from "../../../utils/adminHeads";
import ModalAddBusiness from "./ModalAddBusiness";
import ModalEditBusiness from "./ModalEditBusiness";

const AdminTableBusiness = observer(() => {
  const [business, setBusiness] = useState([]);
  const [currentBusiness, setCurrentBusiness] = useState({});
  const [modalAddBusinessVisible, setModalAddBusinessVisible] = useState(false);
  const [modalEditBusinessVisible, setModalEditBusinessVisible] = useState(false);
  const { user } = useContext(Context);

  useEffect(() => {
    (async function () {
      await getBusiness().then((data) => {
        setBusiness(data);
      });
    })();
  }, []);
  const removeBusinessFunc = async (id) => {
    await deleteBusiness(id).then(async () => {
      await updateState();
    });
  };
  const editBusiness = (business) => {
    setCurrentBusiness(business)
    setModalEditBusinessVisible(true)
  };
  const updateState = async () => {
    await getBusiness().then((data) => {
      setBusiness(data);
    });
  };
  return (
    <div className="admin-table w-100 p-3 mt-4 text-center">
      <div className="ms-auto text-end mb-3">
        <button
          updateState={updateState}
          onClick={() => setModalAddBusinessVisible(true)}
          className="btn btn-warning"
        >
          Täze biznes goşmak
        </button>
      </div>
      <ModalAddBusiness
        updateState={updateState}
        show={modalAddBusinessVisible}
        onHide={() => setModalAddBusinessVisible(false)}
      />
      <ModalEditBusiness
        business={currentBusiness}
        updateState={updateState}
        show={modalEditBusinessVisible}
        onHide={() => setModalEditBusinessVisible(false)}
      />
      <Table bordered hover responsive>
        <thead>
          <tr>
            {listBusiness?.map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {business?.map((i, index) => (
            <tr key={index}>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.counter}</td>
              <td>{i.link}</td>
              <td>{i.createdAt}</td>
              <td>
                {
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => editBusiness(i)}
                      className="btn btn-primary mx-1"
                      title="Üýtgetmek"
                    >
                      <i className="fas fa-cogs"></i>
                    </button>
                    <button
                      onClick={() => removeBusinessFunc(i.id)}
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

export default AdminTableBusiness;
