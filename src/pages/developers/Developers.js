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


const Developers = () => {
    const [loading, setLoading] = useState(true)
    const [banner, setBanner] = useState({})
    useEffect(()=>{ 
        (async function(){
   
         await getBannerByPage('Developers').then(async data => {
            setBanner(data)
         }).finally(() => setLoading(false))
       })();
     }, []) 
     console.log(banner);
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
        <header style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}api/static/${banner.img})`}} className={`${styles["header"]}`}>
            <div className={`${styles["header__content"]}`}>
                <h1 className={`${styles["h1"]}`}>Öz biznesiňi şügünden başlap tutuş onlaýn geçir we söwdany köpelt<br/>"ÝÖNEKEÝ DEVELOPER"</h1>
                <a href="#sign" className={`${styles["a_href"]}`}>Başlamak!</a>
            </div>
        </header>
        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2 className={`${styles["h2"]}`}>ELEKTRONIKA DÜKANY</h2>
                <img src={first} alt=""/>
                <p className={`${styles["p"]}`}>Elektronika satýan telekeçilerimiz üçin ajaýyp teklip bu wep sahypasynda siziň dükanyňyzy işlerini
                    ýeňilleşdirip müşderleriň artmagyna we müşderleriňiziň aňsatlyk bilen sargy etmegine komek eder .
                    Web sahypaň aýratynlyklary barada has giňişleýin öwrenmek isleýaňizmi?
                </p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWA MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2>ÖÝ ELEKTRONIKA ENJAMLARY</h2>
                <img src={second} alt=""/>
                <p className={`${styles["p"]}`}>Hojalyk Elektronika satýan telekeçilerimiz üçin ýene bir ajaýyp teklip bu wep sahypada öz
                    harytlaryňyzy TV, SOWADYJY, OÝJIKLI TELEFONLAR... we ýene birnaça harytlaryn ajaýyp görinjekdigine
                    kepillik berip bileris !! Web sahypaň aýratynlyklary barada has giňişleýin öwrenmekçimi?</p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWO MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2>RESTORAN WEB SAHYPASY</h2>
                <img src={three} alt=""/>
                <p className={`${styles["p"]}`}>Restoranlar üçin ajaýyp teklip bu web sahypada siz dürli görnüşli menyuñyzy ýerleşdirip,
                    müşderileriñize zakaz etmek we eltip bermek hyzmatyndan peýdalanmak mümkinçiligini döredip
                    bilersiñiz. Web sahypaň aýratynlyklary barada has giňişleýin görmek isleseňiz..
                </p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWO MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2>MEBEL ÖÝ GOŞLARY</h2>
                <img src={four} alt=""/>
                <p className={`${styles["p"]}`}>Mebel we öý goşlaryny satýan müşderlerimiz üçin ajaýyp hödürleme bu wep sahypada ähli harytlary
                    ýerleşdirip, müşderileriñiziñ oturan ýerinde görmägine we sargyt etmeginde ýeñillik döredip
                    bilersiňiz. Web sahypaň aýratynlyklary barada doly görmek isleýaňizmi?
                </p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWO MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2>BIRNÄÇE RESTORAN IÝMITINI ELTIP BERMEK HYZMATY</h2>
                <img src={five} alt=""/>
                <p className={`${styles["p"]}`}>Ýene ajaýyp tekliplerin biri bu web sahypada dürli restoranlar, kafelar we dükanlar öz menýularyny
                    ýerleşdirmek üçin size ýuz tutarlar we siz olaryň satuwny ýokarlandyrmaga we eltip bermek
                    hyzmadyndan peýdalanmaga kömek edip bilersiňiz . Web sahypaň aýratynlyklary barada has giňişleýin
                    öwrenmek isleseňiz..
                </p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWO MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2>DERMANHANA DÜKANY</h2>
                <img src={six} alt=""/>
                <p className={`${styles["p"]}`}>Ýene bir hödürlemäniñ biri, jogapkärçilikli lukmançylyk enjamlaryny, dermanlyk we gözellik
                    serişdelerinii, hassahana esbaplaryny we ýüzlerçe saglygy goraýyş önümlerini satuwa girizmekde,
                    kepilli sahypalaryň biri. Web sahypaň aýratynlyklary barada has giňişleýin gör...
                </p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWO MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2>AWTO ŞAÝLAR ÜÇIN</h2>
                <img src={seven} alt=""/>
                <p className={`${styles["p"]}`}>Size ýene bir ajaýyp mümkinçilik: söwdañyzyñ hasabyny ýöretmek, ýagny her günki cykdajylar,
                    girdejiler, aýlyk haklar, goşmaça geçirilýän tölegler barada hasabat ýöretmekde kömekçi we zerur
                    sahypalaryñ biri. Web sahypaň aýratynlyklary barada has giňişleýin görmek isleseňiz..
                </p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWO MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2>SÖWDA HASABYNY ÝÖRETMEK</h2>
                <img src={eight} alt=""/>
                <p className={`${styles["p"]}`}>Ýene bir hödürlemäniñ biri, jogapkärçilikli lukmançylyk enjamlaryny, dermanlyk we gözellik
                    serişdelerinii, hassahana esbaplaryny we ýüzlerçe saglygy goraýyş önümlerini satuwa girizmekde,
                    kepilli sahypalaryň biri. Web sahypaň aýratynlyklary barada has giňişleýin gör...
                </p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWO MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__img"]}`}>
                <h2>MODA, EGIN EŞIK DÜKANY</h2>
                <img src={nine} alt=""/>
                <p className={`${styles["p"]}`}>Sizi gyzyklandyrjak sahypalaryñ biri: bu dükandaky dürli görnüşli, reňkli, fasonly döwrebap
                    egin-eşikleri, şeýle hem, aksesuarlar we aýakgaplary ýerleşdirip siziñ müşderileriňize oturan
                    ýerinde bu web sahypada sähel wagtyň içinde saýlap , sargyt edip bilerler. Web sahypaň
                    aýratynlyklary barada has giňişleýin öwrenmek isleýaňizmi?
                </p>
                <a href="#sign" className={`${styles["a_href"]}`}>HAWO MEN GYZYKLANDYM</a>
            </div>
        </section>

        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__container"]} ${styles["section__about"]}`}>
                <h3 className={`${styles["h3"]}`}>''ÝÖNEKEÝ DEVELOPER'' TÜRKMENISTANDA No1 ÝERDE DURÝAN <br/>ONLAÝN PLATFORMASY</h3>
                <p className={`${styles["p"]}`}>Internet platformasynda öz kompaniýañyzy giñişleýin ösdürmekde,kämilleşdirmekde,girdejiñizi
                    ýokarlandyrmakda yonekey.com developer sizi ugrukdyrýar we kömek edýär.Biz bilen siz-web-dizaýnyñ
                    yollaryny we ony ösdürmegiñ usullarynyöwrenersiñiz, marketing we satuw prosesi barada giñişleýin
                    maglumat alyp we tejribede üstünlikli ulanyp bilersiňiz,kompaniya üçin zerur bolan dolandyryş
                    gurallaryny,ýagny işgärleri dolandyrmak we olary ösüşe tarap ugrukdurmak,satuw dolandyrylyşyny
                    ýokarlandyrmakda dürli usullary saýlap almak we strategiýalary işläp düzmek,olara ,gözegçilik
                    etmek,inwentar we buhgalteriýa dolandyrylyşyk hyzmatlary, iPhone we Android programmalaryny düzüp
                    bermek hyzmatlary bilen üpjün edilersiñiz!</p>
            </div>
        </section>
        <section>
            <div className={`${styles["container"]} ${styles["section"]} ${styles["section__services"]}`}>
                <div className={`${styles["boxes"]}`}>
                    <div className={`${styles["box"]}`}>
                        <img src={up} alt=""/>
                        <h3 className={`${styles["h3"]}`}>SATUWY ÖSDIRMEK
                        </h3>
                        <p className={`${styles["p"]}`}>Satuwy ösdürmekde dürli planlary düzmek, köpugurly strategiýalardan peýdalanmak,marketing
                            prosesine girişmek ,biznes planyñyzy işläp düzmek we netijeliligine gözegçilik etmek göz
                            öňüne tutulýar.</p>
                    </div>
                    <div className={`${styles["box"]}`}>
                        <img src={document} alt=""/>
                        <h3 className={`${styles["h3"]}`}>DOLANŞYGY ÝEŇILLEŞDIRMEK
                        </h3>
                        <p className={`${styles["p"]}`}>Dünýa derejesinde alynyp barylýan ,geljege gönükdirilen dolanşygy üpjün edip,
                            ýeňilleşdirmekde biznesyñ hemmetaraplaýyn duşunjeleri bilen tanyş bolmak.Netijeli dolanşygy
                            ýöretmek üçin ussat dolandyjylardan ugur alyp, şahsy iş sistemasyny düzmek.</p>
                    </div>
                    <div className={`${styles["box"]}`}>
                        <img src={medal} alt=""/>
                        <h3 className={`${styles["h3"]}`}>DOLANŞYGY AWTOMATLAŞDYRMAK
                        </h3>
                        <p className={`${styles["p"]}`}>Kompaniýanyñ işleriniñ strategiýalaryny düzmek,planlaşdyrmak we doly derejede sanly ulgama
                            geçirip, işiñi ýeňilleşdirmek, işgärleriñ wezipelerine we işjeñligine gözegçilik etmek
                            mümkinçiligi.
                        </p>
                    </div>
                </div>
                </div>
        </section>

        <section className={`${styles["section__list"]} ${styles["section"]}`}>
            <div className={`${styles["section__list__container"]}`}>
                <h3 className={`${styles["h3"]}`}>TÜRKMENISTANDANDA 1 ÝERDE DURAN PLATFORMANY <br/>NÄME ÜÇIN SAÝLAMAK ZERUR ?</h3>
                <ul>
                    <li><img src={tick} alt=""/>KOMPANIÝAŇYZ ÖSDIRMEKDE DÜRLI USULLAR</li>
                    <li><img src={tick} alt=""/>SÖWDAŇYZY AWTOMATLAŞDYRMAK</li>
                    <li><img src={tick} alt=""/>KÖPUGURLY HÖDÜRLEMELER</li>
                    <li><img src={tick} alt=""/>WEP-DIZAÝNY ÖSDÜRMEK</li>
                    <li><img src={tick} alt=""/>KOMPANIÝANYŇ DOLANŞYGYNY ÜPJÜN ETMEK</li>
                    <li><img src={tick} alt=""/>HASAP HYZMATLARY-DÜRLI PROGRAMMALAR DÜZMEK</li>
                    <li><img src={tick} alt=""/>WEP SAHYPANY ÖSDÜRMEK</li>
                    <li><img src={tick} alt=""/>DOLANŞYGY ÝEŇILLEŞDIRMEK</li>
                    <li><img src={tick} alt=""/>ATUWYŇ DÜRLI STRATEGIÝALARYNDA PEÝDALANMAK</li>
                    <li><img src={tick} alt=""/>HEMETARAPLAÝYN ÖSÜŞI ÜPJÜN ETMEK</li>
                </ul>
                <a href="#sign" className={`${styles["a_href"]}`}>ÝÜZ TUTMAK</a>
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
                        <h4 className={`${styles["h4"]}`}>DIZAÝN WE ÖSÜŞ</h4>
                    </div>
                    <div className={`${styles["box"]}`}>
                        <img src={sell} alt=""/>
                        <h4 className={`${styles["h4"]}`}>MARKETING WE SATYŞ</h4>
                    </div>
                    <div className={`${styles["box"]}`}>
                        <img src={business} alt=""/>
                        <h4 className={`${styles["h4"]}`}>KOMPANIÝA ÜÇIN DOLANDYRYŞ GURALLARY</h4>
                    </div>
                    <div className={`${styles["box"]}`}>
                        <img src={statistic} alt=""/>
                        <h4 className={`${styles["h4"]}`}>SATYŞ DOLANDYRYŞY</h4>
                    </div>
                    <div className={`${styles["box"]}`}>
                        <img src={math} alt=""/>
                        <h4 className={`${styles["h4"]}`}>INWENTAR WE BUHGALTERÝA DOLANDYRYŞ</h4>
                    </div>
                    <div className={`${styles["box"]}`}>
                        <img src={phone} alt=""/>
                        <h4 className={`${styles["h4"]}`}>iPhone WE Android PROGRAMALARY</h4>
                    </div>
                    <a href="#sign" style={{marginTop:'20px'}} className={`${styles["a_href"]}`}>ÝÜZ TUTMAK</a>
                </div>
            </div>
        </section>

        <section className={`${styles["section__ourpartners"]} ${styles["section"]}`}>
            <div className={`${styles["container"]}`}>
                <h2>EÝÝAM BIZ BILEN IŞLEŞEN BIZNESLER</h2>
                <img src={section_5} alt="Our_Partners"/>
            </div>
        </section>
    </div>
    <section className={`${styles["section__contact"]} ${styles["section"]}`}>
        <div className={`${styles["container"]} ${styles["last_button_container"]}`}>
            <a href="#sign" className={`${styles["last_button"]}`}>HABARLAŞ</a>
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
};

export default Developers;