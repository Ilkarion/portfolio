import StrongManLogo from "../../images/strong-man-logo.svg"
import { useState, useEffect } from "react";


export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [ openMenu, setOpenMenu ] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); 
  
    return(
        <>
            <header className={`${scrolled ? "scrolled-header" : "no-scrolled-header"}`}>
                <div className="header-desctop">
                  <div className="logo-links">
                      <img src={StrongManLogo} alt="logo-strong-man" className="logo-stront-man"/>
                      <a href="#projects-section" className="section-links__projects">projects</a>
                      <a href="#skills-sect" className="section-links__skills">skills</a>
                  </div>
                  <span className="specialization">Full Stack Developer</span>
                  <div className="contacts-data">
                      <span className="contacts-data__gmail">work2006success@gmail.com</span>
                      <span className="contacts-data__number">+48 730 763 181</span>
                  </div>
                </div>

                {/* mobile header */}
                <div className={`header-mobile ${openMenu ? "open-header-mobile" : ""}`}>

                  <div className="visible-part-mobile">
                    <img src={StrongManLogo} alt="logo-strong-man" className="logo-stront-man logo-strong-man-mobile"/>
                    <div
                    className={`mobile-header-menu-button 
                                ${openMenu ? "expand-menu-mobile" : "close-menu-mobile"}
                                ${scrolled ? "mobile-header-menu-button-scrolled" : ""}
                              `}
                    onClick={()=>setOpenMenu(!openMenu)}
                    >
                      <div className={`line-top ${openMenu ? "move-line-top" : ""}`}></div>
                      <div className={`line-mid ${openMenu ? "delete-line-mid" : ""}`}></div>
                      <div className={`line-bottom ${openMenu ? "move-line-bottom" : ""}`}></div>
                    </div>
                  </div>

                  <div className="logo-links logo-links-mobile">
                      <a href="#projects-section" className="section-links__projects">projects</a>
                      <a href="#skills-sect" className="section-links__skills">skills</a>
                  </div>
                  
                  <div className="contacts-data">
                      <span className="contacts-data__gmail contacts-data__gmail-mobile">work2006success@gmail.com</span>
                      <span className="contacts-data__number contacts-data__number-mobile">+48 730 763 181</span>
                  </div>
                </div>
            </header>
            
        </>
    )
};
