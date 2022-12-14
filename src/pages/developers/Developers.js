import React, { useEffect, useState } from 'react';
import styles from "./developers.module.css";
import logo from './logo.png'
import first from './1.webp'
import second from './2.webp'
import three from './3.webp'
import four from './4.webp'
import five from './5.webp'
import six from './6.webp'
import seven from './7.webp'
import eight from './8.webp'
import nine from './9.webp'
import up from './up.png'
import document from './document.png'
import medal from './medal.png'
import tick from './tick.png'
import yone from './yone.png'
import developing from './developing.png'
import sell from './sell.png'
import business from './business.png'
import statistic from './statistic.png'
import math from './math.png'
import phone from './phone.png'
import section_5 from './section_5.jpg'
import tel from './tel.png'
import mail from './mail.png'
import instagram from './instagram.png'
import { MoonLoader } from 'react-spinners';
import { getBannerByPage } from '../../http/bannerApi';
import { observer } from 'mobx-react-lite';


const Developers = observer(() => {
    const [loading, setLoading] = useState(true)
    const [banner, setBanner] = useState({})
    const [bannerClass, setBannerClass] = useState({})
    useEffect(()=>{ 
        (async function(){
         await getBannerByPage('Developers').then(async data => {
            setBanner(data)
            if (data){
                setBannerClass({backgroundImage: `url(${process.env.REACT_APP_API_URL}api/static/${data.img})`})
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
        <div className={`${styles["body"]}`}>
            <nav className={`${styles["nav"]}`}><img src={logo} alt=""/></nav>
            <div className={`${styles["wrapper"]}`}>
        <header style={bannerClass} className={`${styles["header"]}`}>
            <div className={`${styles["header__content"]}`}>
                <h1 className={`${styles["h1"]}`}>??z biznesi??i ????g??nden ba??lap tutu?? onla??n ge??ir we s??wdany k??pelt<br/>"????NEKE?? DEVELOPER"</h1>
                <a href="#sign" className={`${styles["a_href"]}`}>Ba??lamak!</a>
            </div>
        </header>
        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2 className={`${styles["h2"]}`}>ELEKTRONIKA D??KANY</h2>
                <img src={first} alt=""/>
                <p className={`${styles["p"]}`}>Elektronika sat??an teleke??ilerimiz ????in aja??yp teklip bu wep sahypasynda sizi?? d??kany??yzy i??lerini
                    ??e??ille??dirip m????derleri?? artmagyna we m????derleri??izi?? a??satlyk bilen sargy etmegine komek eder .
                    Web sahypa?? a??ratynlyklary barada has gi??i??le??in ??wrenmek isle??a??izmi?
                </p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWA MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2>???? ELEKTRONIKA ENJAMLARY</h2>
                <img src={second} alt=""/>
                <p className={`${styles["p"]}`}>Hojalyk Elektronika sat??an teleke??ilerimiz ????in ??ene bir aja??yp teklip bu wep sahypada ??z
                    harytlary??yzy TV, SOWADYJY, O??JIKLI TELEFONLAR... we ??ene birna??a harytlaryn aja??yp g??rinjekdigine
                    kepillik berip bileris !! Web sahypa?? a??ratynlyklary barada has gi??i??le??in ??wrenmek??imi?</p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWO MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2>RESTORAN WEB SAHYPASY</h2>
                <img src={three} alt=""/>
                <p className={`${styles["p"]}`}>Restoranlar ????in aja??yp teklip bu web sahypada siz d??rli g??rn????li menyu??yzy ??erle??dirip,
                    m????derileri??ize zakaz etmek we eltip bermek hyzmatyndan pe??dalanmak m??mkin??iligini d??redip
                    bilersi??iz. Web sahypa?? a??ratynlyklary barada has gi??i??le??in g??rmek islese??iz..
                </p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWO MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2>MEBEL ???? GO??LARY</h2>
                <img src={four} alt=""/>
                <p className={`${styles["p"]}`}>Mebel we ???? go??laryny sat??an m????derlerimiz ????in aja??yp h??d??rleme bu wep sahypada ??hli harytlary
                    ??erle??dirip, m????derileri??izi?? oturan ??erinde g??rm??gine we sargyt etmeginde ??e??illik d??redip
                    bilersi??iz. Web sahypa?? a??ratynlyklary barada doly g??rmek isle??a??izmi?
                </p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWO MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2>BIRN????E RESTORAN I??MITINI ELTIP BERMEK HYZMATY</h2>
                <img src={five} alt=""/>
                <p className={`${styles["p"]}`}>??ene aja??yp tekliplerin biri bu web sahypada d??rli restoranlar, kafelar we d??kanlar ??z men??ularyny
                    ??erle??dirmek ????in size ??uz tutarlar we siz olary?? satuwny ??okarlandyrmaga we eltip bermek
                    hyzmadyndan pe??dalanmaga k??mek edip bilersi??iz . Web sahypa?? a??ratynlyklary barada has gi??i??le??in
                    ??wrenmek islese??iz..
                </p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWO MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2>DERMANHANA D??KANY</h2>
                <img src={six} alt=""/>
                <p className={`${styles["p"]}`}>??ene bir h??d??rlem??ni?? biri, jogapk??r??ilikli lukman??ylyk enjamlaryny, dermanlyk we g??zellik
                    seri??delerinii, hassahana esbaplaryny we ????zler??e saglygy gora??y?? ??n??mlerini satuwa girizmekde,
                    kepilli sahypalary?? biri. Web sahypa?? a??ratynlyklary barada has gi??i??le??in g??r...
                </p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWO MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2>AWTO ??A??LAR ????IN</h2>
                <img src={seven} alt=""/>
                <p className={`${styles["p"]}`}>Size ??ene bir aja??yp m??mkin??ilik: s??wda??yzy?? hasabyny ????retmek, ??agny her g??nki cykdajylar,
                    girdejiler, a??lyk haklar, go??ma??a ge??iril????n t??legler barada hasabat ????retmekde k??mek??i we zerur
                    sahypalary?? biri. Web sahypa?? a??ratynlyklary barada has gi??i??le??in g??rmek islese??iz..
                </p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWO MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2>S??WDA HASABYNY ????RETMEK</h2>
                <img src={eight} alt=""/>
                <p className={`${styles["p"]}`}>??ene bir h??d??rlem??ni?? biri, jogapk??r??ilikli lukman??ylyk enjamlaryny, dermanlyk we g??zellik
                    seri??delerinii, hassahana esbaplaryny we ????zler??e saglygy gora??y?? ??n??mlerini satuwa girizmekde,
                    kepilli sahypalary?? biri. Web sahypa?? a??ratynlyklary barada has gi??i??le??in g??r...
                </p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWO MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2>MODA, EGIN E??IK D??KANY</h2>
                <img src={nine} alt=""/>
                <p className={`${styles["p"]}`}>Sizi gyzyklandyrjak sahypalary?? biri: bu d??kandaky d??rli g??rn????li, re??kli, fasonly d??wrebap
                    egin-e??ikleri, ??e??le hem, aksesuarlar we a??akgaplary ??erle??dirip sizi?? m????derileri??ize oturan
                    ??erinde bu web sahypada s??hel wagty?? i??inde sa??lap , sargyt edip bilerler. Web sahypa??
                    a??ratynlyklary barada has gi??i??le??in ??wrenmek isle??a??izmi?
                </p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWO MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__about"]}`}>
                <h3 className={`${styles["h3"]}`}>''????NEKE?? DEVELOPER'' T??RKMENISTANDA No1 ??ERDE DUR??AN <br/>ONLA??N PLATFORMASY</h3>
                <p className={`${styles["p"]}`}>Internet platformasynda ??z kompani??a??yzy gi??i??le??in ??sd??rmekde,k??mille??dirmekde,girdeji??izi
                    ??okarlandyrmakda yonekey.com developer sizi ugrukdyr??ar we k??mek ed????r.Biz bilen siz-web-diza??ny??
                    yollaryny we ony ??sd??rmegi?? usullaryny??wrenersi??iz, marketing we satuw prosesi barada gi??i??le??in
                    maglumat alyp we tejribede ??st??nlikli ulanyp bilersi??iz,kompaniya ????in zerur bolan dolandyry??
                    gurallaryny,??agny i??g??rleri dolandyrmak we olary ??s????e tarap ugrukdurmak,satuw dolandyryly??yny
                    ??okarlandyrmakda d??rli usullary sa??lap almak we strategi??alary i??l??p d??zmek,olara ,g??zeg??ilik
                    etmek,inwentar we buhgalteri??a dolandyryly??yk hyzmatlary, iPhone we Android programmalaryny d??z??p
                    bermek hyzmatlary bilen ??pj??n edilersi??iz!</p>
            </div>
        </section>
        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__services"]}`}>
                <div className={`${styles["boxes"]}`}>
                    <div className={`${styles["box"]}`}>
                        <img src={up} alt=""/>
                        <h3 className={`${styles["h3"]}`}>SATUWY ??SDIRMEK
                        </h3>
                        <p className={`${styles["p"]}`}>Satuwy ??sd??rmekde d??rli planlary d??zmek, k??pugurly strategi??alardan pe??dalanmak,marketing
                            prosesine giri??mek ,biznes plany??yzy i??l??p d??zmek we netijeliligine g??zeg??ilik etmek g??z
                            ??????ne tutul??ar.</p>
                    </div>
                    <div className={`${styles["box"]}`}>
                        <img src={document} alt=""/>
                        <h3 className={`${styles["h3"]}`}>DOLAN??YGY ??E??ILLE??DIRMEK
                        </h3>
                        <p className={`${styles["p"]}`}>D??n??a derejesinde alynyp baryl??an ,geljege g??n??kdirilen dolan??ygy ??pj??n edip,
                            ??e??ille??dirmekde biznesy?? hemmetarapla??yn du??unjeleri bilen tany?? bolmak.Netijeli dolan??ygy
                            ????retmek ????in ussat dolandyjylardan ugur alyp, ??ahsy i?? sistemasyny d??zmek.</p>
                    </div>
                    <div className={`${styles["box"]}`}>
                        <img src={medal} alt=""/>
                        <h3 className={`${styles["h3"]}`}>DOLAN??YGY AWTOMATLA??DYRMAK
                        </h3>
                        <p className={`${styles["p"]}`}>Kompani??any?? i??lerini?? strategi??alaryny d??zmek,planla??dyrmak we doly derejede sanly ulgama
                            ge??irip, i??i??i ??e??ille??dirmek, i??g??rleri?? wezipelerine we i??je??ligine g??zeg??ilik etmek
                            m??mkin??iligi.
                        </p>
                    </div>
                </div>
                </div>
        </section>

        <section className={`${styles["section__list"]} ${styles["section"]}`}>
            <div className={`${styles["section__list__container"]}`}>
                <h3 className={`${styles["h3"]}`}>T??RKMENISTANDANDA 1 ??ERDE DURAN PLATFORMANY <br/>N??ME ????IN SA??LAMAK ZERUR ?</h3>
                <ul>
                    <li><img src={tick} alt=""/>KOMPANI??A??YZ ??SDIRMEKDE D??RLI USULLAR</li>
                    <li><img src={tick} alt=""/>S??WDA??YZY AWTOMATLA??DYRMAK</li>
                    <li><img src={tick} alt=""/>K??PUGURLY H??D??RLEMELER</li>
                    <li><img src={tick} alt=""/>WEP-DIZA??NY ??SD??RMEK</li>
                    <li><img src={tick} alt=""/>KOMPANI??ANY?? DOLAN??YGYNY ??PJ??N ETMEK</li>
                    <li><img src={tick} alt=""/>HASAP HYZMATLARY-D??RLI PROGRAMMALAR D??ZMEK</li>
                    <li><img src={tick} alt=""/>WEP SAHYPANY ??SD??RMEK</li>
                    <li><img src={tick} alt=""/>DOLAN??YGY ??E??ILLE??DIRMEK</li>
                    <li><img src={tick} alt=""/>ATUWY?? D??RLI STRATEGI??ALARYNDA PE??DALANMAK</li>
                    <li><img src={tick} alt=""/>HEMETARAPLA??YN ??S????I ??PJ??N ETMEK</li>
                </ul>
                <a href="#sign" className={`${styles["a_href"]}`}>????Z TUTMAK</a>
            </div>
        </section>
        <div className={`${styles["img_123"]}`}>
            <img src={yone}/>
        </div>
        <div className={`${styles["signin"]}`} id="sign">
            <iframe width="100%" height="600px;" style={{padding: '0 0'}}
                src="https://yonekey.com/forms/wtl/6296e4c14eb1b45505a8f6b9f6a97199" frameBorder="0"
                sandbox="allow-top-navigation allow-scripts allow-forms allow-same-origin" allowFullScreen></iframe>
        </div>
        <section className={`${styles["section__doing__container"]} ${styles["section"]}`}>
            <div>
                <div className={`${styles["boxes"]}`}>
                    <div className={`${styles["box"]}`}>
                        <img src={developing} alt=""/>
                        <h4 className={`${styles["h4"]}`}>DIZA??N WE ??S????</h4>
                    </div>
                    <div className={`${styles["box"]}`}>
                        <img src={sell} alt=""/>
                        <h4 className={`${styles["h4"]}`}>MARKETING WE SATY??</h4>
                    </div>
                    <div className={`${styles["box"]}`}>
                        <img src={business} alt=""/>
                        <h4 className={`${styles["h4"]}`}>KOMPANI??A ????IN DOLANDYRY?? GURALLARY</h4>
                    </div>
                    <div className={`${styles["box"]}`}>
                        <img src={statistic} alt=""/>
                        <h4 className={`${styles["h4"]}`}>SATY?? DOLANDYRY??Y</h4>
                    </div>
                    <div className={`${styles["box"]}`}>
                        <img src={math} alt=""/>
                        <h4 className={`${styles["h4"]}`}>INWENTAR WE BUHGALTER??A DOLANDYRY??</h4>
                    </div>
                    <div className={`${styles["box"]}`}>
                        <img src={phone} alt=""/>
                        <h4 className={`${styles["h4"]}`}>iPhone WE Android PROGRAMALARY</h4>
                    </div>
                    <a href="#sign" style={{marginTop:'20px'}} className={`${styles["a_href"]}`}>????Z TUTMAK</a>
                </div>
            </div>
        </section>

        <section className={`${styles["section__ourpartners"]} ${styles["section"]}`}>
            <div className={`${styles["container"]}`}>
                <h2>E????AM BIZ BILEN I??LE??EN BIZNESLER</h2>
                <img src={section_5} alt="Our_Partners"/>
            </div>
        </section>
    </div>
    <section className={`${styles["section__contact"]} ${styles["section"]}`}>
        <div className={`${styles["container"]} ${styles["last_button_container"]}`}>
            <a href="#sign" className={`${styles["last_button"]}`}>HABARLA??</a>
        </div>
    </section>
    <footer className={`${styles["footer"]}`}>
        <div className={`${styles["contact"]} ${styles["footer"]}`}>
            <h5><img src={tel} alt=""/>+993 62 818883</h5>
            <h5><img src={tel} alt=""/>+993 61 212559</h5>
        </div>
        <div className={`${styles["social_media"]} ${styles["footer"]}`}>
            <a href="mailto:yonekeysowda@gmail.com"><img src={mail} alt=""/></a>
            <a href="https://www.instagram.com/yonekey_lomaysowda/"><img src={instagram} alt=""/></a>
        </div>
    </footer>
        </div>
    );
});

export default Developers;