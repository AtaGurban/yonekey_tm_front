import React, { useState } from "react";
import styles from "./secondSidebarMenu.module.css";

const SecondSidebarMenu = () => {
  const [activeMenu, setActiveMenu] = useState(3);

  const clickMenu = (numberMenu) => {
    setActiveMenu(numberMenu);
  };
  return (

      <div className={`d-flex flex-column ${styles["second-sidebar"]} `}>
        <hr className={`${styles['top-hr']}`}/>
        <div className={`${styles["second-menu"]}`}>
          <ul>
            <li
              onClick={() => clickMenu(1)}
              className={`${activeMenu === 1 && styles["active-menu"]}`}
            >
              <i className="fas fa-code"></i>
              <span className={`ms-3`}>Developers</span>
            </li>
            <li
              onClick={() => clickMenu(2)}
              className={`${activeMenu === 2 && styles["active-menu"]}`}
            >
              <i className="fas fa-weight-hanging"></i>
              <span className={`ms-3`}>Lomay</span>
            </li>
            <li
              onClick={() => clickMenu(3)}
              className={`${activeMenu === 3 && styles["active-menu"]}`}
            >
              <i className="fas fa-video"></i>
              <span className={`ms-3`}>Video</span>
            </li>
            <li
              onClick={() => clickMenu(4)}
              className={`${activeMenu === 4 && styles["active-menu"]}`}
            >
              <i className="fas fa-comment-dollar"></i>
              <span className={`ms-3`}>Marketing</span>
            </li>
          </ul>
        </div>
        <div className={`${styles["bottom-block"]}`}>
          <hr />
        </div>
        <div></div>
      </div>

  );
};

export default SecondSidebarMenu;
