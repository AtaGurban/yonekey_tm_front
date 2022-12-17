import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import { deleteBanner, getBanner } from "../../../http/bannerApi";
import { Context } from "../../../index";
import {  listBusiness } from "../../../utils/adminHeads";
import ModalAddBanner from "./ModalAddBanner";


const AdminTableBusiness = observer(() => {
  const [business, setBusiness] = useState([]);
  const [modalAddBusinessVisible, setModalAddBusinessVisible] = useState(false);
  const { user } = useContext(Context);

  useEffect(() => {
    (async function () {
      await getBanner().then((data) => {
        setBusiness(data);
      });
    })();
  }, []);

  const removeUserFunc = async (id) => {
    await deleteBanner(id).then(async()=>{
      await updateState()
    })
  };
  const updateState = async () => {
    await getBanner().then((data) => {
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
          Täze banner goşmak
        </button>
      </div>
      <ModalAddBanner
        updateState={updateState}
        show={modalAddBusinessVisible}
        onHide={() => setModalAddBusinessVisible(false)}
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
              <td>{i.page}</td>
              <td>{i.createdAt}</td>
              <td>
                {
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => removeUserFunc(i.id)}
                      disabled={user.user.role !== "SUPERADMIN"}
                      className='btn btn-danger'
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
