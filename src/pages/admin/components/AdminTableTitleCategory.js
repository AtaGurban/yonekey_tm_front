import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import { deleteTitleCategory, getTitleCategory } from "../../../http/mainPageApi";
import { Context } from "../../../index";
import { listTitleCategorys } from "../../../utils/adminHeads";
import ModalAddTitleCategory from "./ModalAddTitleCategory";
import moment from "moment";
import "moment/locale/tk";
import ModalEditTitleCategory from "./ModalEditTitleCategory";

const AdminTableTitleCategory = observer(() => {
  const [titleCategory, setTitleCategory] = useState([]);
  const [currentTitleCategory, setCurrentTitleCategory] = useState({});
  const [modalAddTitleCategoryVisible, setModalAddTitleCategoryVisible] = useState(false);
  const [modalEditTitleCategoryVisible, setModalEditTitleCategoryVisible] = useState(false);
  const { user } = useContext(Context);

  useEffect(() => {
    (async function () {
      await getTitleCategory().then((data) => {
        setTitleCategory(data);
      });
    })();
  }, []);
  const removeTitleCategoryFunc = async (id) => {
    await deleteTitleCategory(id).then(async () => {
      await updateState();
    });
  };
  const editTitleCategory = (business) => {
    setCurrentTitleCategory(business)
    setModalEditTitleCategoryVisible(true)
  };
  const updateState = async () => {
    await getTitleCategory().then((data) => {
      setTitleCategory(data);
    });
  };
  return (
    <div className="admin-table w-100 p-3 mt-4 text-center">
      <div className="ms-auto text-end mb-3">
        <button
          updateState={updateState}
          onClick={() => setModalAddTitleCategoryVisible(true)}
          className="btn btn-warning"
        >
          Täze kategoriýa görnüş goşmak
        </button>
      </div>
      <ModalAddTitleCategory
        updateState={updateState}
        show={modalAddTitleCategoryVisible}
        onHide={() => setModalAddTitleCategoryVisible(false)}
      />
      <ModalEditTitleCategory
        titleCategory={currentTitleCategory}
        updateState={updateState}
        show={modalEditTitleCategoryVisible}
        onHide={() => setModalEditTitleCategoryVisible(false)}
      />
      <Table bordered hover responsive>
        <thead>
          <tr>
            {listTitleCategorys?.map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {titleCategory?.map((i, index) => (
            <tr key={index}>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.number}</td>
              <td>{moment(i.createdAt).format("LLLL")}</td>
              <td>
                {
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => editTitleCategory(i)}
                      className="btn btn-primary mx-1"
                      title="Üýtgetmek"
                    >
                      <i className="fas fa-cogs"></i>
                    </button>
                    <button
                      onClick={() => removeTitleCategoryFunc(i.id)}
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

export default AdminTableTitleCategory;
