import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import { deleteMobileAds, getMobileAds } from "../../../http/mainPageApi";
import { Context } from "../../../index";
import { listMobileAds } from "../../../utils/adminHeads";
import ModalAddMobileAds from "./ModalAddMobileAds";
import ModalShowMobileAds from "./ModalShowMobileAds";


const AdminTableMobileAds = observer(() => {
  const [mobilAds, setMobilAds] = useState([]);
  const [modalAddMobileAdsVisible, setModalAddMobileAdsVisible] = useState(false);
  const [modalShowMobileAdsVisible, setModalShowMobileAdsVisible] = useState(false);
  const [currentMobileAds, setCurrentMobileAds] = useState({});
  const { user } = useContext(Context);
  console.log(mobilAds);
  useEffect(() => {
    (async function () {
      await getMobileAds().then((data) => {
        setMobilAds(data);
      });
    })();
  }, []);
  const removeMobilAdsFunc = async (id) => {
    await deleteMobileAds(id).then(async () => {
      await updateState();
    });
  };

  const updateState = async () => {
    await getMobileAds().then((data) => {
      setMobilAds(data);
    });
  };
  return (
    <div className="admin-table w-100 p-3 mt-4 text-center">
      <div className="ms-auto text-end mb-3">
        <button
          updateState={updateState}
          onClick={() => setModalAddMobileAdsVisible(true)}
          className="btn btn-warning"
        >
          Täze mobil reklama goşmak
        </button>
      </div>
      <ModalAddMobileAds
        updateState={updateState}
        show={modalAddMobileAdsVisible}
        onHide={() => setModalAddMobileAdsVisible(false)}
      />
      <ModalShowMobileAds
        mobileAds={currentMobileAds}
        show={modalShowMobileAdsVisible}
        onHide={() => setModalShowMobileAdsVisible(false)}
      />
      <Table bordered hover responsive>
        <thead>
          <tr>
            {listMobileAds?.map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mobilAds?.map((i, index) => (
            <tr key={index}>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.link}</td>
              <td>{i.createdAt}</td>
              <td>
                {
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => {setModalShowMobileAdsVisible(true); setCurrentMobileAds(i)}}
                      className="btn btn-primary mx-1"
                      title="Görmek"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                    <button
                      onClick={() => removeMobilAdsFunc(i.id)}
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

export default AdminTableMobileAds;
