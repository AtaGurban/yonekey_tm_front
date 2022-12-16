import React, { useContext, useState } from "react";
import { Context } from "../..";
import styles from "./admin.module.css";
import AdminTableBanner from "./components/AdminTableBanners";
import AdminTableUsers from "./components/AdminTableUsers";
import AdminTableVideo from "./components/AdminTableVideo";
import ModalAddVideo from "./components/ModalAddVideo";
import SecondSidebarMenu from "./components/SecondSidebarMenu";
import logo from "./fav.png";

const Admin = () => {
  const [firstSidebarToggle, setFirstSidebarToggle] = useState(true);
  const [activeMenu, setActiveMenu] = useState(3);
  const { user } = useContext(Context);
  const [adminState, setAdminState] = useState(<AdminTableVideo />);

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.setItem("token", "");
  };

  const callbackSecondSidebarMenu = async (state) => {
    switch (state) {
      case "Täze wideo goşmak":
        setAdminState(<ModalAddVideo />);
        break;
      case "Wideolaryň sanawy":
        setAdminState(<AdminTableVideo />);
        break;
      case "Adminlerin sanawy":
        setAdminState(<AdminTableUsers />);
        break;
      case "Baş bannerler":
        setAdminState(<AdminTableBanner />);
        break;

      default:
        setAdminState(
          <div className="d-flex h-50 justify-content-center align-items-center">
            <h1>Admin panele hoş geldiňiz</h1>
          </div>
        );
        break;
    }
    console.log(state);
  };
  const clickMenu = (numberMenu) => {
    setActiveMenu(numberMenu);
  };
  return (
    <div className={`${styles["admin"]} d-flex w-100`}>
      <div className={`${styles["blur"]}`}></div>
      <div
        className={`d-flex flex-column ${styles["first-sidebar"]} ${
          styles[firstSidebarToggle && "first-sidebar-toggle"]
        } ${firstSidebarToggle && "text-center"}`}
      >
        <div className={`${styles["admin-logo"]} text-center m-3`}>
          <img alt="" src={logo} />
        </div>
        <hr />
        <div className={`${styles["main-menu"]}`}>
          <ul>
            <li
              onClick={() => clickMenu(1)}
              title='Developers'
              className={`${activeMenu === 1 && styles["active-menu"]}`}
            >
              <i className="fas fa-code"></i>
              <span className={`${firstSidebarToggle ? "d-none" : "ms-3"}`}>
                Bannerler
              </span>
            </li>
            <li
              onClick={() => clickMenu(2)}
              title='Lomay'
              className={`${activeMenu === 2 && styles["active-menu"]}`}
            >
              <i className="fas fa-weight-hanging"></i>
              <span className={`${firstSidebarToggle ? "d-none" : "ms-3"}`}>
                Lomay
              </span>
            </li>
            <li
              onClick={() => clickMenu(3)}
              title='Video'
              className={`${activeMenu === 3 && styles["active-menu"]}`}
            >
              <i className="fas fa-video"></i>
              <span className={`${firstSidebarToggle ? "d-none" : "ms-3"}`}>
                Video
              </span>
            </li>
            <li
              onClick={() => clickMenu(4)}
              title='Marketing'
              className={`${activeMenu === 4 && styles["active-menu"]}`}
            >
              <i className="fas fa-comment-dollar"></i>
              <span className={`${firstSidebarToggle ? "d-none" : "ms-3"}`}>
                Marketing
              </span>
            </li>
            <li
              onClick={() => clickMenu(5)}
              title='Adminler'
              className={`${activeMenu === 5 && styles["active-menu"]}`}
            >
              <i className="fas fa-user"></i>
              <span className={`${firstSidebarToggle ? "d-none" : "ms-3"}`}>
                Adminler
              </span>
            </li>
          </ul>
        </div>
        <div className={`${styles["bottom-block"]}`}>
          <i
            onClick={() => setFirstSidebarToggle(!firstSidebarToggle)}
            className="fas fa-compress-alt"
          ></i>
          <hr />
          <i
            onClick={logOut}
            title="Hasapdan çykmak"
            className="fas fa-sign-out-alt"
          ></i>
        </div>
        <div></div>
      </div>
      <SecondSidebarMenu
        callbackSecondSidebarMenu={callbackSecondSidebarMenu}
        subMenu={activeMenu}
      />
      <div
        className={`${styles["admin-transition"]}`}
        style={{ width: firstSidebarToggle ? "77%" : "67%" }}
      >
        {adminState}
      </div>
    </div>
  );
};

export default Admin;
