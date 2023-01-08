import React, { useContext, useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import { clickBusiness, getAllSlider, getBusiness } from "../../http/mainPageApi";
import MainNavbar from "./components/MainNavbar";
import styles from "./main.module.css";
import Slider from "./components/Slider";
import { Context } from "../..";
import ProductCategory from "./components/ProductCategory";
import Popup from "../../components/Popup";
import { observer } from "mobx-react-lite";

const Main = observer(() => {
  const [loading, setLoading] = useState(true);
  const [business, setBusiness] = useState([]);
  const [sliders, setSliders] = useState([]);
  const { category } = useContext(Context);
  const clickBusinessFunc = async (id) => {
    await clickBusiness(id);
  };
  const firstTitleCategory = category.titleCategory.filter((i)=> i.number === 1)
  const secondTitleCategory = category.titleCategory.filter((i)=> i.number === 2)
  const thirdTitleCategory = category.titleCategory.filter((i)=> i.number === 3)
  const fourTitleCategory = category.titleCategory.filter((i)=> i.number === 4)
  const fiveTitleCategory = category.titleCategory.filter((i)=> i.number === 5)
  const sixTitleCategory = category.titleCategory.filter((i)=> i.number === 6)
  useEffect(() => {
    (async function () {
      await getBusiness()
        .then(async (data) => {
          setBusiness(data);
        })
        
      await getAllSlider().then(async (data) => {
        setSliders(data);
      }).finally(() => {setLoading(false)});
    })();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
        className="d-flex"
      >
        <MoonLoader color="#000000" />
      </div>
    );
  }
  return (
    <div>
      <MainNavbar />
      <div className="">
        <div className={`${styles["slide-business"]} container d-flex`}>
          {business
            .sort((a, b) => {
              return b.counter - a.counter;
            })
            .map((i) => (
              <a
                key={i.id}
                onClick={() => clickBusinessFunc(i.id)}
                href={i.link}
              >
                <div className={`${styles["business-box"]} mx-2 my-2`}>
                  {i.name}
                </div>
              </a>
            ))}
        </div>
        <Slider slider={(sliders.filter(i=> i.number === 1))[0]}/>
        <div className={`${styles["our-business"]} container my-2 w-100 text-center`}>
          <h2 className="fw-bold fs-1">Biziň Bisnezlerimiz</h2>
          <div className={`${styles["slide-business-two"]} my-3 w-100 d-flex`}>
            {business
              .sort((a, b) => {
                return b.counter - a.counter;
              })
              .map((i) => (
                <a
                  onClick={() => clickBusinessFunc(i.id)}
                  key={i.id}
                  className={`${styles["business-box-two"]} my-2 mx-4`}
                  href={i.link}
                >
                  <div className={`${styles["business-box-two"]} `}>
                    <img
                      // style={{ height: 250 }}
                      src={`${process.env.REACT_APP_API_URL}api/static/${i.img}`}
                      alt=""
                    />
                  </div>
                </a>
              ))}
          </div>
        </div>
        <Slider slider={(sliders.filter(i=> i.number === 2))[0]}/>
        <ProductCategory titleCategory={firstTitleCategory[0]}/>
        <ProductCategory titleCategory={secondTitleCategory[0]}/>
        <Slider slider={(sliders.filter(i=> i.number === 3))[0]}/>
        <ProductCategory titleCategory={thirdTitleCategory[0]}/>
        <Slider slider={(sliders.filter(i=> i.number === 4))[0]}/>
        <ProductCategory titleCategory={fourTitleCategory[0]}/>
        <Slider slider={(sliders.filter(i=> i.number === 5))[0]}/>
        <ProductCategory titleCategory={fiveTitleCategory[0]}/>
        <Slider slider={(sliders.filter(i=> i.number === 6))[0]}/>
        <ProductCategory titleCategory={sixTitleCategory[0]}/>
      </div>
    </div>
  );
});

export default Main;
