import React, {useEffect, useState} from "react";
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
import { Link } from "react-router-dom";
import { getAllVideos } from "../../http/courseApi";
import { localStorageSave } from "../../utils/localStorageFunc";
import { FAV_VIDEO_PAGE, WATCHED_PAGE } from "../../utils/pathConsts";
import { observer } from "mobx-react-lite";

const Video = observer(() => {
    const [menuToggle, setMenuToggle] = useState(false)
    const [themaMode, setThemaMode] = useState(true)
    const [videos, setVideos] = useState([])
    const [query, setQuery] = useState('')
    const [active, setActive] = useState(1)
    const [paginationCount, setPaginationCount] = useState(1)
    useEffect(()=>{
      (async function(){
          await getAllVideos(active).then((data) => {setVideos(data.rows); setPaginationCount(data.count)});
      })()
  }, [active] )
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
              <Link to={'/'}>
                <img src={home} alt="Esasy Sahypa" />
                Esasy Sahypa
              </Link>
            </li>
            <li>
              <Link to={FAV_VIDEO_PAGE}>
                <img src={heart} alt="Halanlarym" />
                Halanlarym
              </Link>
            </li>
            <li> 
              <Link to={WATCHED_PAGE}>
                <img src={history} alt="Gorenlerim" />
                Görenlerim
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-auto">

        <Link to={'/login'}>
        <div style={{color:'#FFF'}}  className={`${styles["log_in_button"]}`}  id={`${styles["log_in_button"]}`}>
          <img src={login} alt="LogIN" id={`${styles["log_in"]}`} />
          IÇINE GIR
        </div>
        </Link>
        </div>
      </div>
      <div className={`${styles["wrapper"]}`}>
        <nav className={`${styles["nav-video"]}`}>
          <div className={`${styles["nav_icons"]}`} onClick={()=>{setThemaMode(!themaMode)}}>
            <img src={lamp} alt="" />
          </div>
          <div className={`${styles["search"]}`}>
            <input value={query} onChange={(e)=>setQuery(e.target.value)} className="input-video" type="search" placeholder="GÖZLE..." />
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
            <img className="me-2" src={bookmark} alt=''/>
            <h2 className="fs-5">HEMME VIDEOLAR</h2>
        </div>
        <div className={`${styles["content"]}`}>
          {
            videos.filter((video) => {return video.name.toLowerCase().includes(query.toLowerCase())}).map((i)=>
              <Link onClick={()=>{localStorageSave('watched', i.id)}} key={i.id} to={`/video/stream/${i.id}`}>
                <div key={i.id} className={`${styles["box"]}`}>
                <img src={`${process.env.REACT_APP_API_URL}api/static/${i.img}`} alt="Video" />
                <div className={`${styles["box_head"]}`}>{i.name}</div>
                <div className={`${styles["box_name"]}`}>{i.author}</div>
              </div>
              </Link>
            )
          }
        </div>
        </div>
      </div>
    </div>
  );
});

export default Video;
