import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { clickBusiness, getAllSlider, getBusiness } from "../../http/mainPageApi";
import MainNavbar from "./components/MainNavbar";
import styles from "./main.module.css";
import Slider from "./components/Slider";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [business, setBusiness] = useState([]);
  const [sliders, setSliders] = useState([]);

  const clickBusinessFunc = async (id) => {
    await clickBusiness(id);
  };
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
              <Link
                key={i.id}
                onClick={() => clickBusinessFunc(i.id)}
                to={i.link}
              >
                <div className={`${styles["business-box"]} mx-2 my-2`}>
                  {i.name}
                </div>
              </Link>
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
                <Link
                  onClick={() => clickBusinessFunc(i.id)}
                  key={i.id}
                  className={`${styles["business-box-two"]} my-2 mx-4`}
                  to={i.link}
                >
                  <div className={`${styles["business-box-two"]} `}>
                    <img
                      style={{ height: 250 }}
                      src={`${process.env.REACT_APP_API_URL}api/static/${i.img}`}
                      alt=""
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
