import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import { getBanner } from "../../../http/bannerApi";

import { Context } from "../../../index";
import { listBanners } from "../../../utils/adminHeads";
import ModalAddBanner from "./ModalAddBanner";
import ModalEditUser from "./ModalEditUser";

const AdminTableBanner = observer(() => {
  const [banners, setBanners] = useState([]);
  const [modalEditUserVisible, setModalEditUserVisible] = useState(false);
  const [modalAddUserVisible, setModalAddUserVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const { user } = useContext(Context);
  console.log(banners);
  useEffect(() => {
    (async function () {
      await getBanner().then((data) => {
        setBanners(data);
      });
    })();
  }, []);

  const removeUserFunc = async (id) => {
    if (user.user.role === "SUPERADMIN") {

    }
  };
  const editUser = (user) => {
    setCurrentUser(user);
    setModalEditUserVisible(true);
  };

  const updateState = async () => {

  };
  return (
    <div className="admin-table w-100 p-3 mt-4 text-center">
      <div className="ms-auto text-end mb-3">
        <button
          onClick={() => setModalAddUserVisible(true)}
          className="btn btn-warning"
        >
          Täze banner goşmak
        </button>
      </div>
      <ModalAddBanner
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
            {listBanners?.map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {banners?.map((i, index) => (
            <tr key={index}>
              <td>{i.id}</td>
              <td>{i.page}</td>
              <td>{i.createdAt}</td>
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

export default AdminTableBanner;
