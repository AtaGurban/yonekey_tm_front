import React from "react";
import { Link } from "react-router-dom";
import styles from "./marketing.module.css";
import logo from "./white_logo(1).png";
const Marketing = () => {
  return (
    <div>
      <div className={styles.start}>
        <div className={styles.link}>
          <div className={styles.link_mini}>
            <Link to={"/"}>
              <img src={logo} />
            </Link>
          </div>
        </div>
        <div className={styles.link_menu}>
          <div className={styles.link_menu_mini}>
            <div className={styles.link_menu_mini_1_1}>
              <h1 className={styles.animate}>Biz gije-gündiz sizin hyzmatyňyzda</h1>
            </div>
            <div className={styles.link_menu_mini_1_2}>
              <p className={styles.animate_1}>
                Biziň hödürleýän hyzmatlarymyz siziň brendyňyzyň ösmegini we
                girdejiňiziň yokarlanmagyny kepillendirýär.Yönekey marketing
                bilen täze üstünliklere eýe bol!
              </p>
            </div>
          </div>
          <div className={styles.link_menu_second_mini}>
            <div className={styles.img_mini_menu}>
              <img src="https://img.freepik.com/free-photo/businesspeople-working-in-finance-and-accounting-analyze-financi_74952-1399.jpg?w=1380&amp;t=st=1663936565~exp=1663937165~hmac=08e49044b084dab451aceb8f670b7521bed9945f3fe7806ec3685d5f30f5fc77" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
