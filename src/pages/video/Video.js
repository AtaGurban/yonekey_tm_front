import React, {useState} from "react";
import styles from "./video.module.css";
import light from "./light.module.css";
import dark from "./dark.module.css";
import logo from './logo.png'
import home from './home.png'
import heart from './heart.png'
import history from './history.png'
import login from './login.png'
import lamp from './lamp.png'
import search from './search.png'
import bookmark from './bookmark.png'
import temp from './video.jpg'

const Video = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const [themaMode, setThemaMode] = useState(true)
  return (
    <div  className={`${styles["video-body"]} ${(themaMode ? light : dark)["video-body"]}`}>
      <div className={`${styles["blur"]}`}></div>
      <div className={`${styles[`menu`]} ${(themaMode ? light : dark)[`menu`]} ${styles[(menuToggle) && 'menu_toggle']}`}>
        <div className={`${styles["logo"]} ${(themaMode ? light : dark)[`logo`]}`}>
          <img src={logo} alt="Logo" className={`${styles['logo']}`} />
          VIDEO
        </div>
        <div className={`${styles["menu_navigation"]}`}>
          <ul>
            <li>
              <a href="#">
                <img src={home} alt="Esasy Sahypa" />
                Esasy Sahypa
              </a>
            </li>
            <li>
              <a href="#">
                <img src={heart} alt="Halanlarym" />
                Halanlarym
              </a>
            </li>
            <li>
              <a href="#">
                <img src={history} alt="Gorenlerim" />
                Görenlerim
              </a>
            </li>
          </ul>
        </div>
        <div style={{color:'#FFF'}} className={`${styles["log_in_button"]}`}  id={`${styles["log_in_button"]}`}>
          <img src={login} alt="LogIN" id={`${styles["log_in"]}`} />
          IÇINE GIR
        </div>
      </div>
      <div className={`${styles["wrapper"]}`}>
        <nav className={`${styles["nav-video"]}`}>
          <div className={`${styles["nav_icons"]}`} onClick={()=>{setThemaMode(!themaMode)}}>
            <img src={lamp} alt="" />
          </div>
          <div className={`${styles["search"]}`}>
            <input className="input-video" type="search" placeholder="GÖZLE..." />
            <span>
              <img src={search} alt="search" />
            </span>
          </div>

          <div className={`${styles["burger"]} ${(themaMode ? light : dark)[`burger`]}`} onClick={()=>{setMenuToggle(!menuToggle)}}>
            <div className={`${styles["burger_line_1"]}`}></div>
            <div className={`${styles["burger_line_2"]}`}></div>
            <div className={`${styles["burger_line_3"]}`}></div>
          </div>
        </nav>
        <div className={`${styles["banner"]}`}></div>
        <div className="container">

        <div style={{height:'30px'}} className="mb-3 d-flex align-items-center">
            <img className="me-2" src={bookmark}/>
            <h2 className="fs-5">KÖP GÖRÜLENLER</h2>
        </div>
        <div className={`${styles["content"]}`}>
          <div className={`${styles["box"]}`}>
            <img src={temp} alt="Video" />
            <div className={`${styles["box_head"]}`}>Nädip 200 manat gazanmaly?</div>
            <div className={`${styles["box_name"]}`}>KESHA REJEPOW</div>
          </div>
          <div className={`${styles["box"]}`}>
            <img src={temp} alt="Video" />
            <div className={`${styles["box_head"]}`}>Nädip 200 manat gazanmaly?</div>
            <div className={`${styles["box_name"]}`}>KESHA REJEPOW</div>
          </div>
          <div className={`${styles["box"]}`}>
            <img src={temp} alt="Video" />
            <div className={`${styles["box_head"]}`}>Nädip 200 manat gazanmaly?</div>
            <div className={`${styles["box_name"]}`}>KESHA REJEPOW</div>
          </div>
          <div className={`${styles["box"]}`}>
            <img src={temp} alt="Video" />
            <div className={`${styles["box_head"]}`}>Nädip 200 manat gazanmaly?</div>
            <div className={`${styles["box_name"]}`}>KESHA REJEPOW</div>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
