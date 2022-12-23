import React from "react";

const ProductCategory = ({ titleCategory }) => {
  console.log(titleCategory);
  return (
    <div className="my-4 container">
      <div className="category_title mb-3">
        <h3>{titleCategory.name}</h3>
      </div>
      <div className="mx-3 d-flex justify-content-between align-items-center">
        {titleCategory.category.map((i) => (
          <div className="wrapper-category-box my-2 text-center d-block">
            <div className="category-box mx-auto">
              <img
                // style={{ height: 250 }}
                src={`${process.env.REACT_APP_API_URL}api/static/${i.img}`}
                alt=""
              />
            </div>
            <span>{i.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
