import React from "react";
import { Link } from "react-router-dom";
import { CATEGORY_PAGE } from "../../../utils/pathConsts";

const ProductCategory = ({ titleCategory }) => {
  return (
    <div className="my-4 container">
      <div className="category_title mb-3">
        <h3>{titleCategory.name}</h3>
      </div>
      <div className="mx-3 d-flex justify-content-around align-items-center flex-wrap">
        {titleCategory.category.map((i, index) =>
          i.withLink ? (
            <div
              key={index}
              className="wrapper-category-box my-2 text-center d-block"
            >
              <a target={'blank'} href={i.link}>
                <div className="category-box mx-auto">
                  <img
                    // style={{ height: 250 }}
                    src={`${process.env.REACT_APP_API_URL}api/static/${i.img}`}
                    alt=""
                  />
                </div>
                <span>{i.name}</span>
              </a>
            </div>
          ) : (
            <div
              key={index}
              className="wrapper-category-box my-2 text-center d-block"
            >
              <Link to={`${CATEGORY_PAGE}/${i.id}`}>
                <div className="category-box mx-auto">
                  <img
                    // style={{ height: 250 }}
                    src={`${process.env.REACT_APP_API_URL}api/static/${i.img}`}
                    alt=""
                  />
                </div>
                <span>{i.name}</span>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
