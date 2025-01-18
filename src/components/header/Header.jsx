import StrongManLogo from "../../images/strong-man-logo.svg"
import { useState, useEffect } from "react";


export default function Header() {
    const [scrolled, setScrolled] = useState(false);
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
            <header className={scrolled ? "scrolled-header" : "no-scrolled-header"}>
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
            </header>
            
        </>
    )
};
