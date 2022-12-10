import React, { useState } from 'react';
import styles from "./admin.module.css";
import SecondSidebarMenu from './components/SecondSidebarMenu';
import logo from './fav.png'

const Admin = () => {
    const [firstSidebarToggle, setFirstSidebarToggle] = useState(false)
    const [activeMenu, setActiveMenu] = useState(3)

    const clickMenu = (numberMenu)=>{
        setActiveMenu(numberMenu)
    }
    return (
        <div className={`${styles["admin"]} d-flex w-100`}>
            <div className={`${styles["blur"]}`}></div>
            <div className={`d-flex flex-column ${styles['first-sidebar']} ${styles[(firstSidebarToggle) && 'first-sidebar-toggle']} ${(firstSidebarToggle) && 'text-center'}`}>
                <div className={`${styles["admin-logo"]} text-center m-3`}><img  src={logo}/></div>
                <hr/>
                <div className={`${styles["main-menu"]}`}>
                    <ul>
                        <li onClick={()=>clickMenu(1)} className={`${(activeMenu === 1) && styles['active-menu']}`}><i className="fas fa-code"></i><span className={`${(firstSidebarToggle ? 'd-none' : 'ms-3')}`}>Developers</span></li>
                        <li onClick={()=>clickMenu(2)} className={`${(activeMenu === 2) && styles['active-menu']}`}><i className="fas fa-weight-hanging"></i><span className={`${(firstSidebarToggle ? 'd-none' : 'ms-3')}`}>Lomay</span></li>
                        <li onClick={()=>clickMenu(3)} className={`${(activeMenu === 3) && styles['active-menu']}`}><i className="fas fa-video"></i><span className={`${(firstSidebarToggle ? 'd-none' : 'ms-3')}`}>Video</span></li>
                        <li onClick={()=>clickMenu(4)} className={`${(activeMenu === 4) && styles['active-menu']}`}><i className="fas fa-comment-dollar"></i><span className={`${(firstSidebarToggle ? 'd-none' : 'ms-3')}`}>Marketing</span></li>
                    </ul>
                </div>
                <div className={`${styles['bottom-block']}`}>
                    <hr/>
                    <i onClick={()=>setFirstSidebarToggle(!firstSidebarToggle)} className="fas fa-compress-alt"></i>
                </div>
                <div ></div>
            </div>
            <SecondSidebarMenu/>
        </div>
    );
};

export default Admin;