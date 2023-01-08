import React, { useEffect, useState } from "react";
import styles from "./lomay.module.css";
import video from './header.mp4'
import logo from './logo.png'
import scroll from './scroll.png'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import tick from './tick.png'
import yone from './yone.png'
import section_5 from './section_5.webp'
import tel from './tel.png'
import mail from './mail.png'
import instagram from './instagram.png'
import { getBannerByPage } from "../../http/bannerApi";
import { MoonLoader } from "react-spinners";
import { observer } from "mobx-react-lite";

const Lomay = observer(() => {
  const [headerClass, setHeaderClass] = useState({})
  const [videoClass, setVideoClass] = useState('')
  const [banner, setBanner] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(()=>{ 
    (async function(){
     await getBannerByPage('Lomay').then(async data => {
        setBanner(data)
        if (data){
          setHeaderClass({backgroundImage: `url(${process.env.REACT_APP_API_URL}api/static/${data.img})`})
          setVideoClass('d-none')
        }
     }).finally(() => setLoading(false))
   })();
 }, []) 

 if(loading){
  return (
    <div style={{alignItems: 'center',  justifyContent: 'center', height: '100vh'}} className='d-flex'>
    <MoonLoader color="#000000" />
  </div>)
}
  return (
    <div className={`${styles["lomay-body"]}`}>
      <div className={`${styles["wrapper"]}`}>
        <header style={headerClass} className={`${styles["header-lomay"]}`}>
          <video className={videoClass} autoPlay muted loop id={`${styles["video"]}`}>
            <source src={video} type="video/mp4" />
          </video>
          <div className={`${styles["logo"]}`}>
            <img src={logo} alt="" id={`${styles["logo"]}`} />
            <div className={`${styles["logo_click"]}`}>
              <a href="https://sowda.yonekey.com/orders/tracking">
                Meniň zakazlarym
              </a>
            </div>
          </div>
          <a href="#section">
            <img src={scroll} alt="Scroll" id={`${styles["scroll"]}`} />
          </a>
          <div className={`${styles["header_content"]}`}>
            <h1>BIZ BILEN SÖWDA EDIŇ!</h1>
            <p>
              Dünýä belli online söwda merkezleri bolan Alibaba, Aliexpress,
              Taobao ýaly hytaý platformalaryndan göwnüňize ýaran ähli
              harytlary, oturan ýeriňizden sargyt edip, bellenilen möhletde we
              bellenilen ýere eltip bermek hyzmaty bilen yonekey.сom sizi üpjün
              edýär.
            </p>
            <a href="#iframe" className={`${styles["form_btn"]}`}>
              Ýüz Tut
            </a>
          </div>
        </header>
        <section className={`${styles["section_1"]}`} id='section'>
          <div className={`${styles["container"]}`}>
            <h2 className={`${styles["h2-lomay"]}`}>TÜRKMENISTANDA IÑ AMATLY LOMAÝ SÖWDA BAZARY</h2>
            <p>
              Yonekey lomaý söwda internet platformasy Turkmenistanyñ islendik
              lomaý dükanlaryndan yokary derejeli hili we amatly bahasy bilen
              alyjynyñ ünsüni çekýär. Bizde siz göwnüñize ýarajak we
              islegleriñizi kanagatlandyrjak islendik brenddaky we görnüşdäki
              harytlary, ýagny gözellik serişdelerinden başlap tehniki
              enjamlaryna çenli ylalaşykly bahadan satyn alyp bilersiňiz.
              Bellenen wagtyñ içinde çalt we bitewilikde yurdumyzyñ ähli
              welaýatlaryna we şäherlerine eltip bermek hyzmaty bilen üpjün
              edilersiñiz.
            </p>
            <div className={`${styles["boxes"]}`}>
              <div className={`${styles["box"]}`} style={{ margin: "0" }}>
                <img src={one} alt="" />
                <h3 className={`${styles["h3-lomay"]}`}>LOMAÝ SÖWDAÑYZY ÝEŇILLEŞDIRMEK</h3>
                <p>
                  Söwdegäre yokary hilli harytlary köp möçberde asly bahasyndan
                  arzan alyp satmak mumkinciligi, ondan daşary hem kesgitlenilen
                  ýere eltip bermek yokary hilli müşderi hyzmatlary siziñ
                  söwdañyzy ýeňilleşdirmegiñ ilkinji ädimleri.
                </p>
              </div>
              <div className={`${styles["box"]}`}>
                <img src={two} style={{ margin: "25px" }} alt="" />
                <h3>YNAMDAR SÖWDA</h3>
                <p>
                  Lomaý söwda bazarymyzda hödürlenen ähli harytlary bitewilikde
                  eltip bermek, hyzmatdaşlyk şertleri bilen tanyş bolmak,öz
                  möhletinde zakaz edilen harydyñ üstünde işlemek we töleg
                  hyzmatlary barada size garantiýa beriler.
                </p>
              </div>
              <div className={`${styles["box"]}`} style={{ margin: 0 }}>
                <img src={three} alt="" />
                <h3 className={`${styles["h3-lomay"]}`}>HARYTLARYÑ KÖPDÜRLILIGI</h3>
                <p>
                  Internet platformamyzda siziñ wagtyñyzy we puluñyzy
                  tygşytlamak üçin niýetlenen köp sanly taýyn çözgütler
                  ýerleşdirilen. Harytlarymyzyñ köpdürli görnüşleriniñ arasynda:
                  dürli ýaşa niýetlenen gözellik serişdeleri,göwnüñize ýarajak
                  hoşboý ysly duhylar, telefon aksesuarlary,tehniki enjalmary we
                  ýüzlerçe görnüş zerur bolan harytlar siziñ ünsüñizi çeker!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles["section_2"]}`}>
          <div className={`${styles["container"]}`}>
            <h2 className={`${styles["h2-lomay"]}`}>ESASY BIZIŇ AÝRATYNLYKLARYMYZ</h2>
            <ul>
              <li>
                <img src={tick} />
                ÝOKARY HILI KÖPDÜRLI HARYTLAR
              </li>
              <li>
                <img src={tick} />
                SÖWDAŇYZY ÝEŇILLEŞDIRMEK
              </li>
              <li>
                <img src={tick} />
                WAGTYNDA ELTIP BERMEK
              </li>
              <li>
                <img src={tick} />
                ARZAN BAHADAN SATYN ALMAK
              </li>
              <li>
                <img src={tick} />
                HYZMATDAŞLYK ŞERTLERI
              </li>
              <li>
                <img src={tick} />
                GARANTIÝA BERMEK
              </li>
              <li>
                <img src={tick} />
                YNAMDAR SÖWDA
              </li>
              <li>
                <img src={tick} />
                ÝOKARY HILI MÜŞDERI HYZMATY
              </li>
            </ul>
            <h3 className={`${styles["h3-lomay"]}`}>SIZ TAÝYNMY BIZNESIŇIZI INDIKI DEREJÄ GALDYRMAK ÜÇIN?</h3>
            <a href="#iframe">HAWA MEN TAÝYN</a>
          </div>
        </section>
        <div className={`${styles["img"]}`} id={`${styles["iframe"]}`}>
          <img src={yone} />
        </div>
        <div className={`${styles["signin"]}`}>
          <iframe
            width="100%"
            height="550"
            src="https://yonekey.com/forms/wtl/3414866f7f1a910a56ef0f2af5596aae"
            frameBorder="0"
            sandbox="allow-top-navigation allow-scripts allow-forms allow-same-origin"
            allowFullScreen
          ></iframe>
        </div>
        <section className={`${styles["section_3"]}`}>
          <div className={`${styles["container"]}`}>
            <h2 className={`${styles["h2-lomay"]}`}>BIZIŇ HYZMATLARYMYZ</h2>
            <div className={`${styles["boxes"]}`}>
              <div className={`${styles["box_1"]} ${styles["box"]}`}>
                <span>
                  ÝÖRITELEŞDIRILEN SÖWDA NOKATLARYNYŇ WE DÜKANLARYŇ BAHALARYNDAN
                  EP-ESLI ARZAN
                </span>
              </div>
              <div className={`${styles["box_2"]} ${styles["box"]}`}>
                <span>
                  HARYTLARY ÇALT WE YNAMDAR ÝAGDAÝDA ELTIP BERMEK HYZMATY
                </span>
              </div>
              <div className={`${styles["box_3"]} ${styles["box"]}`}>
                <span>
                  TÜRKMENISTANYŇ ÄHLI WELAÝATLARYNA ŞÄHERLERINE ELTIP BERÝARIS !
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles["section_4"]}`}>
          <div className={`${styles["container"]}`}>
            <h2 className={`${styles["h2-lomay"]}`}>NAME ÜÇIN ÝÖNEKEÝ KÄRHANASY?</h2>
            <p>
              Müşderilerimiziň, we hyzmatdaşlarymyzyň dürli markalar üçin
              synlaryny we pikirlerini yzygiderli seljeryäris we hemme
              hödürleyän harytlarymyzy özümiz hem synap görýäris. Her çärýekde
              assortimenti giñeldýäris we täze isleg bildirilýän harytlary
              yzarlaýarys. Menejerlerimiz harytlaryň köplügi, düzümi, sizi
              boýunça bahasy, maksady önümi tapmaga yardam kanagatlandyrjak
              berer, we önümiň peýdaly aýratynlyklaryna baha bermek bilen bir
              hatarda, saýlamaga hem kömek eder.
            </p>
            <a href="#iframe">ÝÜZ TUTMAK</a>
          </div>
        </section>
        <section className={`${styles["section_5"]}`}>
          <div className={`${styles["container"]}`}>
            <h2 className={`${styles["h2-lomay"]}`}>EÝÝAM BIZ BILEN IŞLEŞEN BIZNESLER</h2>
            <img src={section_5} alt="Our_Partners" />
          </div>
        </section>
        <section className={`${styles["section_6"]}`}>
          <div className={`${styles["container"]} ${styles["last_button_container"]}`}>
            <a href="#iframe" className={`${styles["last_button"]}`}>
              HABARLAŞ
            </a>
          </div>
        </section>
        <footer className={`${styles["footer-lomay"]}`}>
          <div className={`${styles["contact"]}`}>
            <h5>
              <img src={tel} alt="" />
              +993 62 818883
            </h5>
            <h5>
              <img src={tel} alt="" />
              +993 61 212559
            </h5>
          </div>

          <div className={`${styles["social_media"]}`}>
            <a href="tel:+99362818883">
              <img src={tel} alt="" />
            </a>
            <a href="mailto:yonekeysowda@gmail.com">
              <img src={mail} alt="" />
            </a>
            <a href="https://www.instagram.com/yonekey_lomaysowda/">
              <img src={instagram} alt="" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
});

export default Lomay;
