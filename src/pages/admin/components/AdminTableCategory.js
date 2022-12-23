import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import { deleteCategory, getAllCategory } from "../../../http/mainPageApi";
import { Context } from "../../../index";
import { listCategorys } from "../../../utils/adminHeads";
import ModalAddCategory from "./ModalAddCategory";
import ModalEditCategory from "./ModalEditCategory";

const AdminTableCategory = observer(() => {
  const [categorys, setCategorys] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [modalAddCategoryVisible, setModalAddCategoryVisible] = useState(false);
  const [modalEditCategoryVisible, setModalEditCategoryVisible] = useState(false);
  const { user, category } = useContext(Context);
  const titleCategory = category.titleCategory;
  useEffect(() => {
    (async function () {
      await getAllCategory().then((data) => {
        setCategorys(data);
      });
    })();
  }, []);
  const removeCategoryFunc = async (id) => {
    await deleteCategory(id).then(async () => {
      await updateState();
    });
  };
  const editCategory = (business) => {
    setCurrentCategory(business)
    setModalEditCategoryVisible(true)
  };
  const updateState = async () => {
    await getAllCategory().then((data) => {
      setCategorys(data);
    });
  };
  return (
    <div className="admin-table w-100 p-3 mt-4 text-center">
      <div className="ms-auto text-end mb-3">
        <button
          updateState={updateState}
          onClick={() => setModalAddCategoryVisible(true)}
          className="btn btn-warning"
        >
          Täze kategoriýa goşmak
        </button>
      </div>
      <ModalAddCategory
        updateState={updateState}
        show={modalAddCategoryVisible}
        onHide={() => setModalAddCategoryVisible(false)}
      />
      <ModalEditCategory
        currentCategory={currentCategory}
        updateState={updateState}
        show={modalEditCategoryVisible}
        onHide={() => setModalEditCategoryVisible(false)}
      />
      <Table bordered hover responsive>
        <thead>
          <tr>
            {listCategorys?.map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {categorys?.map((i, index) => (
            <tr key={index}>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{(titleCategory.filter((j)=> j.id === i.titleCategoryId)[0])?.name}</td>
              <td>{i.counter}</td>
              <td>{i.withLink ? 'Hawa' : 'Ýok'}</td>
              <td>{i.link ? i.link : 'ýok'}</td>
              <td>{i.createdAt}</td>
              <td>
                {
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => editCategory(i)}
                      className="btn btn-primary mx-1"
                      title="Üýtgetmek"
                    >
                      <i className="fas fa-cogs"></i>
                    </button>
                    <button
                      onClick={() => removeCategoryFunc(i.id)}
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

export default AdminTableCategory;
