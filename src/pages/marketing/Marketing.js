import React from "react";
import { Link } from "react-router-dom";
import styles from "./marketing.module.css";
import logo from "./white_logo(1).png";
import yhyzmat from "./1222.jpg";
import bilim from "./1333.jpg";
import ybilim from "./MAIN 5.jpg";
import email from "./marketing_email.jpg";
import plan from "./marketing_plan.jpg";
import photoshop from "./marketing_photoshop.jpg";
import web from "./marketing_web.jpg";
import freepik from "./businesspeople-working-in-finance-and-accounting-analyze-financi_74952-1399.webp";

const Marketing = () => {
  return (
    <div>
      <div className={styles.start}>
        <div className={styles.link}>
          <div className={styles.link_mini}>
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className={styles.link_menu}>
          <div className={styles.link_menu_mini}>
            <div className={styles.link_menu_mini_1_1}>
              <h1 className={styles.animate}>
                Biz gije-gündiz sizin hyzmatyňyzda
              </h1>
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
              <img src={freepik} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.center_left_menu}>
          <div className={styles.helper}>
            <div className={styles.center_menu_img_header}>
              <h1>Biziň Web-saýtlarymyz</h1>
            </div>

            <div className={styles.center_menu_img}>
              <img src={yhyzmat} alt="" />
            </div>

            <div className={styles.center_menu_img_header}>
              <h1>yonekeyhyzmat.com</h1>
            </div>
          </div>

          <div className={styles.helper}>
            <div className={styles.center_menu_img}>
              <img src={bilim} alt="" />
            </div>

            <div className={styles.center_menu_img_header}>
              <h1>Bilim.yonekey.com</h1>
            </div>
          </div>

          <div className={styles.helper}>
            <div className={styles.center_menu_img}>
              <img src={ybilim} alt="" />
            </div>

            <div className={styles.center_menu_img_header}>
              <h1>ybilim.yonekey.com</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_1}>
        <div className={styles.footer_1_1}>
          <div className={styles.footer_1_img}>
            <img src={email} alt="" />
          </div>

          <div className={styles.footer_h1}>
            <h1>E-mail rassylka</h1>
          </div>

          <div className={styles.footer_p}>
            <p>
              Her günki sms maglumatlary 50.000 adama görkezmek. Şeýle hem,
              müşderilerilerde döreýän gyzyklanmalaryñ esasynda satuwyñyzy
              ýokarlanmak göz öňüne tutulýar
            </p>
          </div>
        </div>

        <div className={styles.footer_1_1}>
          <div className={styles.footer_img}>
            <img src={plan} alt="" />
          </div>

          <div className={styles.footer_h1}>
            <h1>Marketing plan</h1>
          </div>

          <div className={styles.footer_p}>
            <p>
              Müşderilere ähli internet platformalarynda ýokary netijeliligi
              gazandyrmak we bir ulgamda işlemek üçin size laýyk bolan tematiki
              kontent plany ýerine ýetirýän işiňize laýyklykda işläp
              düzmegimiziň netijesinde siziň biznesyňyz täze ösüşlere eýe bolar!
            </p>
          </div>
        </div>

        <div className={styles.footer_1_1}>
          <div className={styles.footer_img}>
            <img src={photoshop} alt="" />
          </div>

          <div className={styles.footer_h1}>
            <h1>Photoshop işi</h1>
          </div>

          <div className={styles.footer_p}>
            <p>
              Bize ýüz tutan müşderiler, özlerine degişli suratlar bilen
              gündelik üpjün ediler we surat montajlaryny hergunki döredijilikli
              we dürli usullarda ýerine yetirilen ýokary hilli suratlar ýörite
              siz üçin taýýarlanylar
            </p>
          </div>
        </div>

        <div className={styles.footer_1_1}>
          <div className={styles.footer_img}>
            <img src={web} alt="" />
          </div>

          <div className={styles.footer_h1}>
            <h1>Web-saýt düzmek</h1>
          </div>

          <div className={styles.footer_p}>
            <p>
              Biz web tehnologiýalaryna esaslanyp,size web saytlaryny düzmekde
              öz hyzmatlarymyzy size hödürleýäris. Dürli internet magazynlaryny
              işläp düzmek, Şeýle hem asly bar bolan web sahypalaryna düzediş
              girizmek, täzeden düzmek hyzmatlary we online söwdanyzy
              awtomatlaşdyrmak sistemasy bilen üpjün edilersiñiz !
            </p>
          </div>
        </div>
      </div>
      <div className={styles.last_button_container}>
        <a
          href="https://contact.yonekey.com/marketing.html"
          className={styles.last_button}
        >
          HABARLAŞ
        </a>
      </div>
      <div className={styles.footer_last}>
        <div className={styles.footer_header}>
          <div className={styles.link_mini}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>

        <div className={styles.footer_header_2}>
          <div className={styles.a_corps}>
            <a href="https://contact.yonekey.com">Habarlaş</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
