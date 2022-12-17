import React from 'react';
import MainNavbar from './components/MainNavbar';
import styles from "./main.module.css";

const Main = () => {
    return (
        <div>
            <MainNavbar/>
            <div className='container'>
                <div className={`${styles['slide-business']} d-flex position-absolute`}>
                    <div className={`${styles['business-box']} mx-2 my-2`}>
                        Developers
                    </div>
                    <div className={`${styles['business-box']} mx-2 my-2`}>
                        Developers
                    </div>
                    <div className={`${styles['business-box']} mx-2 my-2`}>
                        Developers
                    </div>
                    <div className={`${styles['business-box']} mx-2 my-2`}>
                        Developers
                    </div>
                    <div className={`${styles['business-box']} mx-2 my-2`}>
                        Developers
                    </div>
                    <div className={`${styles['business-box']} mx-2 my-2`}>
                        Developers
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Main;