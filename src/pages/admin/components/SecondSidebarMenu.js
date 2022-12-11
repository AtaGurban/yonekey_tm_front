import React, { useEffect, useState } from "react";
import { developersMenuItems, lomayMenuItems, marketingMenuItems, usersMenuItems, videoMenuItems } from "../../../utils/menuItems";
import styles from "./secondSidebarMenu.module.css";

const SecondSidebarMenu = ({subMenu, callbackSecondSidebarMenu}) => {
  const [activeMenu, setActiveMenu] = useState(3);
  const [subMenus, setSubMenus] = useState([])

  const clickMenu = (numberMenu, state) => {
    setActiveMenu(numberMenu);
    callbackSecondSidebarMenu(state)
  };


  useEffect(()=>{
    switch (subMenu) {
      case 1:
        setSubMenus(developersMenuItems)
        break;
      case 2:
        setSubMenus(lomayMenuItems)
        break;
      case 3:
        setSubMenus(videoMenuItems)
        break;
      case 4:
        setSubMenus(marketingMenuItems)
        break;
      case 5:
        setSubMenus(usersMenuItems)
        break;
      default:
        break;
    }
  }, [subMenu])
  return (

      <div className={`d-flex flex-column ${styles["second-sidebar"]} `}>
        <hr className={`${styles['top-hr']}`}/>
        <div className={`${styles["second-menu"]}`}>
          <ul>
            {
              subMenus.map((i, index)=>
                <li
                key={index}
                onClick={() => clickMenu(index, i)}
                className={`${activeMenu === index && styles["active-menu"]}`}
              >
                <span>{i}</span>
              </li>
              )
            }
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
