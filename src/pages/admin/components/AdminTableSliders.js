import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import { deleteBusiness, deleteSlider, getAllSlider } from "../../../http/mainPageApi";
import { Context } from "../../../index";
import { listSliders } from "../../../utils/adminHeads";
import ModalAddSlider from "./ModalAddSlider";
import ModalEditBusiness from "./ModalEditBusiness";

const AdminTableSliders = observer(() => {
  const [slider, setSlider] = useState([]);
  const [currentSlider, setCurrentSlider] = useState({});
  const [modalAddSliderVisible, setModalAddSliderVisible] = useState(false);
  const [modalEditSliderVisible, setModalEditSliderVisible] = useState(false);
  const { user } = useContext(Context);

  useEffect(() => {
    (async function () {
      await getAllSlider().then((data) => {
        setSlider(data);
      });
    })();
  }, []);
  const removeSliderFunc = async (id) => {
    await deleteSlider(id).then(async () => {
      await updateState();
    });
  };
  const editSlider = (business) => {
    setCurrentSlider(business)
    setModalEditSliderVisible(true)
  };
  const updateState = async () => {
    await getAllSlider().then((data) => {
      setSlider(data);
    });
  };
  return (
    <div className="admin-table w-100 p-3 mt-4 text-center">
      <div className="ms-auto text-end mb-3">
        <button
          updateState={updateState}
          onClick={() => setModalAddSliderVisible(true)}
          className="btn btn-warning"
        >
          Täze slaýder goşmak
        </button>
      </div>
      <ModalAddSlider
        updateState={updateState}
        show={modalAddSliderVisible}
        onHide={() => setModalAddSliderVisible(false)}
      />
      <ModalEditBusiness
        business={currentSlider}
        updateState={updateState}
        show={modalEditSliderVisible}
        onHide={() => setModalEditSliderVisible(false)}
      />
      <Table bordered hover responsive>
        <thead>
          <tr>
            {listSliders?.map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slider?.map((i, index) => (
            <tr key={index}>
              <td>{i.id}</td>
              <td>{i.number}</td>
              <td>{i.link}</td>
              <td>{i.createdAt}</td>
              <td>
                {
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => editSlider(i)}
                      className="btn btn-primary mx-1"
                      title="Üýtgetmek"
                    >
                      <i className="fas fa-cogs"></i>
                    </button>
                    <button
                      onClick={() => removeSliderFunc(i.id)}
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

export default AdminTableSliders;
