import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import { deleteSubCategory, getAllCategory, getAllSubCategory, getTitleSubCategory } from "../../../http/mainPageApi";
import { Context } from "../../../index";
import { listSubCategorys } from "../../../utils/adminHeads";
import ModalAddSubCategory from "./ModalAddSubCategory";
import ModalEditSubCategory from "./ModalEditSubCategory";
import moment from "moment";
import "moment/locale/tk";

const AdminTableSubCategory = observer(() => {
  const [subCategorys, setSubCategorys] = useState([]);
  const [titleSubCategory, setTitleSubCategory] = useState([])
  const [categorys, setCategorys] = useState([])
  const [currentSubCategory, setCurrentSubCategory] = useState({});
  const [modalAddSubCategoryVisible, setModalAddSubCategoryVisible] = useState(false);
  const [modalEditSubCategoryVisible, setModalEditSubCategoryVisible] = useState(false);
  const { user } = useContext(Context);

  useEffect(() => {
    (async function () {
      await getAllSubCategory().then((data) => {
        setSubCategorys(data);
      });
      await getTitleSubCategory().then((data) => {
        setTitleSubCategory(data);
      });
      await getAllCategory().then((data) => {
        setCategorys(data);
      });
    })();
  }, []);
  const removeSubCategoryFunc = async (id) => {
    await deleteSubCategory(id).then(async () => {
      await updateState();
    });
  };
  const editSubCategory = (business) => {
    setCurrentSubCategory(business)
    setModalEditSubCategoryVisible(true)
  };
  const updateState = async () => {
    await getAllSubCategory().then((data) => {
      setSubCategorys(data);
    });
  };
  return (
    <div className="admin-table w-100 p-3 mt-4 text-center">
      <div className="ms-auto text-end mb-3">
        <button
          updateState={updateState}
          onClick={() => setModalAddSubCategoryVisible(true)}
          className="btn btn-warning"
        >
          Täze kiçi kategoriýa goşmak
        </button>
      </div>
      <ModalAddSubCategory
        updateState={updateState}
        categorys={categorys}
        titleSubCategory={titleSubCategory}
        show={modalAddSubCategoryVisible}
        onHide={() => setModalAddSubCategoryVisible(false)}
      />
      <ModalEditSubCategory
        currentSubCategory={currentSubCategory}
        updateState={updateState}
        show={modalEditSubCategoryVisible}
        onHide={() => setModalEditSubCategoryVisible(false)}
      />
      <Table bordered hover responsive>
        <thead>
          <tr>
            {listSubCategorys?.map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {subCategorys?.map((i, index) => (
            <tr key={index}>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{(titleSubCategory.filter((j)=> j.id === i.titleSubCategoryId)[0])?.name}</td>
              <td>{i.counter}</td>
              <td>{i.link ? i.link : 'ýok'}</td>
              <td>{moment(i.createdAt).format("LLLL")}</td>
              <td>
                {
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => editSubCategory(i)}
                      className="btn btn-primary mx-1"
                      title="Üýtgetmek"
                    >
                      <i className="fas fa-cogs"></i>
                    </button>
                    <button
                      onClick={() => removeSubCategoryFunc(i.id)}
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

export default AdminTableSubCategory;
