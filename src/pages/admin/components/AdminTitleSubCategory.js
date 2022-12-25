import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import { deleteTitleSubCategory, getAllCategory, getTitleSubCategory } from "../../../http/mainPageApi";
import { Context } from "../../../index";
import { listTitleSubCategorys } from "../../../utils/adminHeads";
import ModalAddTitleSubCategory from "./ModalAddTitleSubCategory";
import ModalEditTitleSubCategory from "./ModalEditTitleSubCategory";

const AdminTableTitleSubCategory = observer(() => {
  const [titleSubCategory, setTitleSubCategory] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [currentTitleSubCategory, setCurrentTitleSubCategory] = useState({});
  const [modalAddTitleSubCategoryVisible, setModalAddTitleSubCategoryVisible] = useState(false);
  const [modalEditTitleSubCategoryVisible, setModalEditTitleSubCategoryVisible] = useState(false);
  const { user, category } = useContext(Context);

  useEffect(() => {
    (async function () {
      await getTitleSubCategory().then((data) => {
        setTitleSubCategory(data);
      });
      await getAllCategory().then((data) => {
        setCategorys(data);
      });
    })();
  }, []);
  const removeTitleSubCategoryFunc = async (id) => {
    await deleteTitleSubCategory(id).then(async () => {
      await updateState();
    });
  };
  const editTitleSubCategory = (business) => {
    setCurrentTitleSubCategory(business)
    setModalEditTitleSubCategoryVisible(true)
  };
  const updateState = async () => {
    await getTitleSubCategory().then((data) => {
      setTitleSubCategory(data);
    });
  };
  return (
    <div className="admin-table w-100 p-3 mt-4 text-center">
      <div className="ms-auto text-end mb-3">
        <button
          onClick={() => setModalAddTitleSubCategoryVisible(true)}
          className="btn btn-warning"
        >
          Täze kiçi kategoriýa görnüş goşmak
        </button>
      </div>
      <ModalAddTitleSubCategory
        updateState={updateState}
        categorys={categorys}
        titleCategory={category.titleCategory}
        show={modalAddTitleSubCategoryVisible}
        onHide={() => setModalAddTitleSubCategoryVisible(false)}
      />
      <ModalEditTitleSubCategory
        titleCategory={category.titleCategory}
        updateState={updateState}
        categorys={categorys}
        currentTitleSubCategory={currentTitleSubCategory}
        show={modalEditTitleSubCategoryVisible}
        onHide={() => setModalEditTitleSubCategoryVisible(false)}
      />
      <Table bordered hover responsive>
        <thead>
          <tr>
            {listTitleSubCategorys?.map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {titleSubCategory?.map((i, index) => (
            <tr key={index}>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.number}</td>
              <td>{(categorys.filter((j)=> j.id === i.categoryId)[0])?.name}</td>
              <td>{i.createdAt}</td>
              <td>
                {
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => editTitleSubCategory(i)}
                      className="btn btn-primary mx-1"
                      title="Üýtgetmek"
                    >
                      <i className="fas fa-cogs"></i>
                    </button>
                    <button
                      onClick={() => removeTitleSubCategoryFunc(i.id)}
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

export default AdminTableTitleSubCategory;
