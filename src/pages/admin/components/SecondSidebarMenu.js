import React, { useEffect, useState } from "react";
import { bannersMenuItems, mainPageMenuItems, marketingMenuItems, usersMenuItems, videoMenuItems } from "../../../utils/menuItems";
import styles from "./secondSidebarMenu.module.css";

const SecondSidebarMenu = ({subMenu, callbackSecondSidebarMenu}) => {
  const [activeSubMenu, setActiveSubMenu] = useState(3);
  const [subMenus, setSubMenus] = useState([])

  const clickMenu = (numberMenu, state) => {
    setActiveSubMenu(numberMenu);
    callbackSecondSidebarMenu(state)
  };

  useEffect(()=>{
    switch (subMenu) {
      case 1:
        setSubMenus(bannersMenuItems)
        break;
      case 2:
        setSubMenus(mainPageMenuItems)
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

  useEffect(()=>{
    clickMenu(0, subMenus[0])
  }, [subMenus])
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
                className={`${activeSubMenu === index && styles["active-menu"]}`}
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
