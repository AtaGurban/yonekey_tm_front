import { observer } from "mobx-react-lite";
import React from "react";
import { clickSubCategory } from "../../http/mainPageApi";


const ProductSubCategory = observer(({ titleSubCategory }) => {
  return (
    <div className="mt-2 mb-2 container">
      <div className="category_title mb-3">
        <h3>{titleSubCategory?.name}</h3>
      </div>
      <div className="mx-3 d-flex justify-content-between align-items-center flex-wrap">
        {titleSubCategory?.sub_category.sort((a, b) => {
                return b?.counter - a?.counter;
              }).map((i, index) =>
            <div
              key={index}
              className="wrapper-category-box col-4 my-2 text-center d-block"
            >
              <a onClick={async()=> await clickSubCategory({id: i?.id})} target={'blank'} href={i?.link}>
                <div className="sub-category-box mx-auto">
                  <img
                    // style={{ height: 250 }}
                    src={`${process.env.REACT_APP_API_URL}api/static/${i?.img}`}
                    alt=""
                  />
                </div>
                <span>{i.name}</span>
              </a>
            </div>
        )}
      </div>
    </div>
  );
});

export default ProductSubCategory;
